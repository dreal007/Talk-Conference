'use strict'

const  { Talk }  = require('../models');

function createTalk(talk){
    return Talk.create(talk).then((newTalk)=>{
        if(!newTalk) throw new Error('Talk not created');
        return newTalk;
    });
}

//make it search with filter..............................
function getTalks(params){
    if(params.id){
        return Talk.findOne({ _id : params.id });
    }
    return Talk.find().skip(params.skip).limit(params.limit).lean();
}

function updateTalk(id, talk){
    return Talk.findOneAndUpdate({ _id : id }, {$set : { ...talk }}, { new : true });
}

function deleteTalk(id){
    return Talk.findOneAndDelete({ _id : id });
}


module.exports = { createTalk, getTalks, deleteTalk, updateTalk }