'use strict'

const express = require('express');
const router = express.Router();

const Controller = require('../../../controllers/talk-event');
const { checkSchema } = require('express-validator');
const { 
    addAttendeeToTalkEventSchema, 
    getTalkEventSchema, 
    removeTalkEventSchema,
    removeAttendeeTalkEventSchema
} = require('../../../middlewares/validators/talk-event')


router.delete('/:id', checkSchema(removeTalkEventSchema), Controller.remove);
router.post('/', checkSchema(addAttendeeToTalkEventSchema), Controller.addAttendeeToTalk);
router.post('/remove', checkSchema(removeAttendeeTalkEventSchema), Controller.removeAttendeeFromTalk);
router.get('/:talk_id', checkSchema(getTalkEventSchema), Controller.get);

module.exports = router;
