'use strict'

const express = require('express');
const router = express.Router();

const Controller = require('../../../controllers/attendees');
const { checkSchema } = require('express-validator');
const { 
    createAttendeeSchema, 
    updateAttendeeSchema, 
    deleteAttendeeSchema, 
    getAllAttendeeSchema,
    getAttendeeSchema 
} = require('../../../middlewares/validators/attendee')

router.post('/', checkSchema(createAttendeeSchema), Controller.createAttendee);
router.delete('/:id', checkSchema(deleteAttendeeSchema), Controller.deleteAttendee);
router.get('/', checkSchema(getAllAttendeeSchema), Controller.getAllAttendees);
router.get('/:id', checkSchema(getAttendeeSchema), Controller.getAllAttendees);
router.put('/:id', checkSchema(updateAttendeeSchema), Controller.updateAttendee);

module.exports = router;
