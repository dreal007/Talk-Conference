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
    return Talk.find().skip(params.skip).limit(params.limit);
}


module.exports = { createTalk, getTalks }