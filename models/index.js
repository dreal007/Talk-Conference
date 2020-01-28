"use strict"

require("dotenv").config();
var mongoose = require("mongoose"),
    DBConfig = require('../config/database'),
    conn1;
    mongoose.Promise = require('bluebird');

if (process.env.NODE_ENV === 'production'){
    conn1 = mongoose.createConnection(DBConfig.mongodb.uri, DBConfig.mongodb.options);
	//mongoose.connect('mongodb://dreal007:seam804@ds161426.mlab.com:61426/bookstore');
}
else{
    conn1 = mongoose.createConnection(DBConfig.mongodb.uri, DBConfig.mongodb.devOptions);
	//mongoose.connect('mongodb://dreal007:seam804@ds161426.mlab.com:61426/bookstore');
}


conn1.once('open', function callback() {
    console.log('db connection open');
});

const AttendeeModel  = require("./attendee-model")(mongoose, conn1);
const TalkModel  = require("./talk-model")(mongoose, conn1);
const TalkEventModel = require("./talk-event-model")(mongoose, conn1);

module.exports = {
    Talk: TalkModel,
    Attendee: AttendeeModel,
    TalkEvent: TalkEventModel,
    mongoose: mongoose,
    mongodbConfig: DBConfig.mongodb
}