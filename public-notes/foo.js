var node = {
    id:"02092097-2987292798",
    name:"phoenixbox1",
    catalogs:{
        foo:{},
        bar:{}
    },
    tags:[],
    availableGettables: {},
    availableSettables: {}


    availableActions: {
{  classOfAction: "reboot",
    displayname: "reboot via raritan",
    injectable:"renasar.service.reboot.pdu.raritan",
    priorityWithinClass: 50,
    overrides: {
           port:8,
           waitBeforeStart:30
    }

},
{  classOfAction: "reboot",
    displayname: "reboot via BMC",
    injectable:"renasar.service.reboot.chassis.bmc",
    priorityWithinClass: 10
}

    }
}