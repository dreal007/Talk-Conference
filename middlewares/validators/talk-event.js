'use strict'

const addAttendeeToTalkEventSchema = {
    talk_id : {
        in : ['body'],
        isString : true,
        errorMessage : 'Please provide a talk id parameter'
    },

    attendees: {
        in: ['body'],
        isString: true,
        errorMessage: 'Please provide a attendee id parameter'
    },

    event_held: {
        in: ['body'],
        isBoolean: true,
        errorMessage: 'Please provide a talk id parameter',
        optional : true
    },
}

const getTalkEventSchema = {
    talk_id : {
        in : ['params'],
        isString : true,
        errorMessage : 'Please provide talk_id in params'
    },

    limit: {
        in: ['query'],
        isString: true,
        toInt: true,
        optional: true,
        errorMessage: 'Limit must be a number'
    },

    skip: {
        in: ['query'],
        isString: true,
        toInt: true,
        optional: true,
        errorMessage: 'Skip must be a number'
    },
}

const removeTalkEventSchema = {
    id: {
        in: ['params'],
        isString: true,
        errorMessage: 'Please provide talk_id in params'
    },

}

const removeAttendeeTalkEventSchema = {

    talk_id: {
        in: ['body'],
        isString: true,
        errorMessage: 'Please provide a talk id parameter'
    },

    attendees: {
        in: ['body'],
        isString: true,
        errorMessage: 'Please provide a attendee id parameter'
    },

}



module.exports = { addAttendeeToTalkEventSchema, getTalkEventSchema, removeTalkEventSchema, removeAttendeeTalkEventSchema }