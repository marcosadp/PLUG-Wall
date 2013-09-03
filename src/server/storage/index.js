var file = require('./file');
var memory = require('./memory');
var nedb = require('./nedb');

var storageFactory = {};
storageFactory['file'] = file;
storageFactory['memory'] = memory;
storageFactory['nedb'] = nedb;

module.exports = storageFactory;
