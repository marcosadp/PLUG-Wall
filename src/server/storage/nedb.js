var config = require('../config.json');
var Datastore = require('nedb');
var db = new Datastore({ filename: config.nedb.dbfile, autoload: true });

function storeMessage(name, message, user) {

    var post = {};
    post.board = name;
    post.message = message;
    post.user = user;
    post.date = new Date();

    db.insert(post);
}

function getMessage(name, callback) {

    db.find({ board: name }, function(err, docs) {
        callback(undefined, docs);
    });

}

exports.storeMessage = storeMessage;
exports.getMessage = getMessage;
