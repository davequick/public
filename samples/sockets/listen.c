/*
 * build:
 * gcc -o listen listen.c
 *
 * Use:
 * ./bserver
 */

#include <stdio.h>
#include <string.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

#define MAXBUF 65536
int main()
{
  int sock, status, buflen;
  unsigned sinlen;
  char buffer[MAXBUF];
  struct sockaddr_in sock_in;

  sinlen = sizeof(struct sockaddr_in);
  memset(&sock_in, 0, sinlen);

  sock = socket (PF_INET, SOCK_DGRAM, IPPROTO_UDP);

  sock_in.sin_addr.s_addr = htonl(INADDR_ANY);
  sock_in.sin_port = htons(67); //note: will need to run as sudo
  sock_in.sin_family = PF_INET;

  status = bind(sock, (struct sockaddr *)&sock_in, sinlen);
  printf("Bind status = %d\n", status);

  status = getsockname(sock, (struct sockaddr *)&sock_in, &sinlen);
  printf("Sock port %d\n",htons(sock_in.sin_port));

  buflen = MAXBUF;
  memset(buffer, 0, buflen);
  status = recvfrom(sock, buffer, buflen, 0, (struct sockaddr *)&sock_in, &sinlen);
  printf("sendto Status = %d\n", status);

  shutdown(sock, 2);
  close(sock);
}

