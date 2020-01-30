'use strict'

const createAttendeeSchema = {
    first_name : {
        in : ['body'],
        isString: true,
        matches: /[a-zA-Z\-\s]/,
        errorMessage: 'Not a valid first name'
    },

    last_name: {
        in: ['body'],
        isString: true,
        matches: /[a-zA-Z\-\s]/,
        errorMessage: 'Not a valid last name'
    },

    email: {
        in: ['body'],
        isEmail: true,
        errorMessage: 'Not a valid email'
    },

    phone: {
        in: ['body'],
        isString: true,
        isLength: {
            options: { max: 20 },
            errorMessage: 'Phone number cannot be more than 20 characters'
        },
        errorMessage: 'Phone number is required'
    }

}

const updateAttendeeSchema = {
    id: {
        in: ['params'],
        errorMessage: 'No params id provided'
    },

    first_name: {
        in: ['body'],
        isString: true,
        matches: /[a-zA-Z\-\s]/,
        optional : true,
        errorMessage: 'Not a valid first name'
    },

    last_name: {
        in: ['body'],
        isString: true,
        matches: /[a-zA-Z\-\s]/,
        optional: true,
        errorMessage: 'Not a valid last name'
    },

    email: {
        in: ['body'],
        isEmail: true,
        optional: true,
        errorMessage: 'Not a valid email'
    },

    phone: {
        in: ['body'],
        isString: true,
        optional: true,
        isLength: {
            options: { max: 20 },
            errorMessage: 'Phone number cannot be more than 20 characters'
        },
        errorMessage: 'Phone number is required'
    }
}

const deleteAttendeeSchema = {
    id: {
        in: ['params'],
        errorMessage: 'No params id provided'
    }
}

const getAttendeeSchema = {
    id: {
        in: ['params'],
        errorMessage: 'No params id provided'
    }
}

const getAllAttendeeSchema = {
    limit: {
        in: ['query'],
        isString : true,
        toInt : true,
        optional : true,
        errorMessage : 'Limit must be a number'
    },

    skip: {
        in: ['query'],
        isString: true,
        optional : true,
        errorMessage: 'Skip must be a number'
    },

    filter: {
        in: ['query'],
        optional: true,
        errorMessage: 'Filter must be an object'
    },

}

module.exports = { createAttendeeSchema, updateAttendeeSchema, deleteAttendeeSchema, getAttendeeSchema, getAllAttendeeSchema }