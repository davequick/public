'use strict';

function Node(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.name = options.name;
    this.sku = options.sku;
}

module.exports = Node;
