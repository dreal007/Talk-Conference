'use strict'

const { transformResponse, transformExpressValidationErrors } = require('../utils/transformer');
const { validationResult } = require('express-validator');
const { get, getWithPopulate, remove, createTalkEvent, addAttendeeToTalk, removeAttendeeFromTalk } = require('../processors/talk-event');
const Cntrl = {}

Cntrl.addAttendeeToTalk = function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    const body = req.body;
    get(body).then((talkEvent)=>{
        if (talkEvent.length > 0){
            return addAttendeeToTalk(talkEvent[0], body);
        }
        else{
            return createTalkEvent(body);
        }
    })
    .then((created)=>{
        res.json(transformResponse(1, 'ok', created));
    })
    .catch((error) => {
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.removeAttendeeFromTalk = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    const body = req.body;
    get(body).then((talkEvent) => {
        if (talkEvent.length > 0) {
            return removeAttendeeFromTalk(talkEvent[0], body);
        }
    })
    .then((removed) => {
        res.json(transformResponse(1, 'ok', removed));
    })
    .catch((error) => {
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.get = function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    getWithPopulate(req.params).then((talkEvent)=>{
        res.json(transformResponse(1, 'ok', talkEvent));
    }).catch((error) => {
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.remove = function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    const params = req.params;
    remove(params).then((removed)=>{
        res.json(transformResponse(1, 'ok', removed));
    }).catch((error) => {
        res.status(400).json(transformResponse(0, error.message));
    });
}

module.exports = Cntrl;