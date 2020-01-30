//const { TalkEvent, Talk, Attendee } = require('../models');
const { transformResponse, transformExpressValidationErrors } = require('../utils/transformer');
const { validationResult } = require('express-validator');
const { createTalk, getTalks, deleteTalk, updateTalk } = require('../processors/talk');
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
    if(req.params.id) query.id = req.params.id;

    getTalks(query).then((talks)=>{
        res.json(transformResponse(1, 'ok', talks));
    }).catch((error)=>{
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.deleteTalk = function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    deleteTalk(req.params.id).then((deletedTalk) => {
        res.json(transformResponse(1, 'ok', deletedTalk));
    }).catch((error) => {
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.updateTalk = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    let body = req.body;

    updateTalk(req.params.id, body).then((updatedTalk) => {
        res.json(transformResponse(1, 'ok', updatedTalk));
    }).catch((error) => {
        res.status(400).json(transformResponse(0, error.message));
    });
}


module.exports = Cntrl;