'use strict'

const  { Talk }  = require('../models');

function createTalk(talk){
    return Talk.create(talk).then((newTalk)=>{
        if(!newTalk) throw new Error('Talk not created');
        return newTalk;
    });
}


module.exports = { createTalk }