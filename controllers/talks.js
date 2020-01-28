//const { TalkEvent, Talk, Attendee } = require('../models');
const { transformResponse, transformExpressValidationErrors } = require('../utils/transformer');
const { validationResult } = require('express-validator');
const { createTalk, getTalks } = require('../processors/talk');
const Cntrl = {}

Cntrl.createTalk = function(req, res){

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    let talk = req.body;

    createTalk(talk).then((newTalk)=>{
        res.json(transformResponse(1, 'ok', newTalk));
    }).catch((error)=>{
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.getAllTalks = function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    let query = req.query;
    getTalks(query).then((talks)=>{
        res.json(transformResponse(1, 'ok', talks));
    }).catch((error)=>{
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.deleteOne = function(req, res){
    let query = {
        _id : req.params.id
    }
    Talk.deleteOne(query).then((resp)=>{
        res.status(200).json({
            responseCode : 1
        })
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json({
            error : err,
            responseCode :  0
        })
    })
}


module.exports = Cntrl;