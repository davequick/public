#include <sys/types.h>
#include <sys/socket.h>
#include <sys/uio.h>

#include <netinet/in.h>
#include <arpa/inet.h>

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define LISTEN_PORT     67
#define BUFSIZE         1024

#if defined IP_RECVDSTADDR
# define DSTADDR_SOCKOPT IP_RECVDSTADDR
# define DSTADDR_DATASIZE (CMSG_SPACE(sizeof(struct in_addr)))
# define dstaddr(x) (CMSG_DATA(x))
#elif defined IP_PKTINFO
# define DSTADDR_SOCKOPT IP_PKTINFO
# define DSTADDR_DATASIZE (CMSG_SPACE(sizeof(struct in_pktinfo)))
# define dstaddr(x) (&(((struct in_pktinfo *)(CMSG_DATA(x)))->ipi_addr))
#else
# error "can't determine socket option"
#endif

union control_data {
    struct cmsghdr  cmsg;
    u_char          data[DSTADDR_DATASIZE];
};

int
main(void)
{
    int                 sock;
    int                 sockopt;
    struct sockaddr_in  srvaddr;
    struct sockaddr_in  cliaddr;
    struct msghdr       msg;
    union control_data  cmsg;
    struct cmsghdr     *cmsgptr;
    struct iovec        iov[1];
    ssize_t             nbytes;
    char                buf[BUFSIZE];

    setbuf(stdout, NULL);

    sock = socket(AF_INET, SOCK_DGRAM, 0);
    if (sock == -1) {
        perror("socket");
        exit(EXIT_FAILURE);
    }

    sockopt = 1;
    if (setsockopt(sock, IPPROTO_IP, DSTADDR_SOCKOPT, &sockopt, sizeof sockopt) == -1) {
        perror("setsockopt");
        exit(EXIT_FAILURE);
    }

    char* adapter="eth2";
    if (setsockopt(sock, SOL_SOCKET, SO_BINDTODEVICE, adapter, sizeof adapter) == -1) {
        perror("setsockopt bindtodevice");
        exit(EXIT_FAILURE);
    }

    memset(&srvaddr, 0, sizeof srvaddr);
    srvaddr.sin_family      = AF_INET;
    srvaddr.sin_addr.s_addr = htonl(INADDR_ANY);
    srvaddr.sin_port        = htons(LISTEN_PORT);

    if (bind(sock, (struct sockaddr *)&srvaddr, sizeof srvaddr) == -1) {
        perror("bind");
        exit(EXIT_FAILURE);
    }

    iov[0].iov_base = buf;
    iov[0].iov_len  = sizeof buf;

    memset(&msg, 0, sizeof msg);
    msg.msg_name       = &cliaddr;
    msg.msg_namelen    = sizeof cliaddr;
    msg.msg_iov        = iov;
    msg.msg_iovlen     = 1;
    msg.msg_control    = &cmsg;
    msg.msg_controllen = sizeof cmsg;

    for (;;) {
        printf("recvmsg...");

        nbytes = recvmsg(sock, &msg, 0);
        if (nbytes == -1) {
            perror("recvfrom");
            exit(EXIT_FAILURE);
        }

        printf("%ld bytes ", (long)nbytes);
        printf("from %s:%hu ", inet_ntoa(cliaddr.sin_addr), ntohs(cliaddr.sin_port));

int i;
        for (cmsgptr = CMSG_FIRSTHDR(&msg);
             cmsgptr != NULL;
             cmsgptr = CMSG_NXTHDR(&msg, cmsgptr)) {

            if (cmsgptr->cmsg_level == IPPROTO_IP &&
                cmsgptr->cmsg_type == DSTADDR_SOCKOPT) {

                printf("to %s", inet_ntoa(*(struct in_addr *)dstaddr(cmsgptr)));
            }
             printf("\nstructure size : %zu bytes\n",sizeof(struct cmsghdr));
               for(i=0;i<sizeof(struct cmsghdr);i++)
                   printf("%02x ",((char*)cmsgptr)[i]);
        }

        putchar('\n');
    }

    /*NOTREACHED*/
    return EXIT_SUCCESS;
}
