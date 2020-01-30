'use strict'

const  { Attendee }  = require('../models');

function createAttendee(attendee){
    return Attendee.create(attendee).then((newAttendee)=>{
        if(!newAttendee) throw new Error('Attendee not created');
        return newAttendee;
    });
}

//make it search with filter..............................
function getAttendees(params){
    if(params.id){
        return Attendee.findOne({ _id : params.id });
    }
    return Attendee.find().skip(params.skip).limit(params.limit).lean();
}

function updateAttendee(id, attendee){
    return Attendee.findOneAndUpdate({ _id : id }, {$set : { ...attendee }}, { new : true });
}

function deleteAttendee(id){
    return Attendee.findOneAndDelete({ _id : id });
}


module.exports = { createAttendee, getAttendees, deleteAttendee, updateAttendee }