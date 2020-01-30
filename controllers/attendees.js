'use strict'

const { transformResponse, transformExpressValidationErrors } = require('../utils/transformer');
const { validationResult } = require('express-validator');
const { createAttendee, getAttendees, deleteAttendee, updateAttendee } = require('../processors/attendee');
const Cntrl = {}

Cntrl.createAttendee = function(req, res){

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    let attendee = req.body;

    createAttendee(attendee).then((newAttendee)=>{
        res.json(transformResponse(1, 'ok', newAttendee));
    }).catch((error)=>{
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.getAllAttendees = function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    let query = req.query;
    if(req.params.id) query.id = req.params.id;

    getAttendees(query).then((Attendees)=>{
        res.json(transformResponse(1, 'ok', Attendees));
    }).catch((error)=>{
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.deleteAttendee = function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    deleteAttendee(req.params.id).then((deletedAttendee) => {
        res.json(transformResponse(1, 'ok', deletedAttendee));
    }).catch((error) => {
        res.status(400).json(transformResponse(0, error.message));
    });
}

Cntrl.updateAttendee = function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let msg = transformExpressValidationErrors(errors.array());
        return res.status(400).json(transformResponse(0, msg, errors.mapped()));
    }

    let body = req.body;

    updateAttendee(req.params.id, body).then((updatedAttendee) => {
        res.json(transformResponse(1, 'ok', updatedAttendee));
    }).catch((error) => {
        res.status(400).json(transformResponse(0, error.message));
    });
}


module.exports = Cntrl;