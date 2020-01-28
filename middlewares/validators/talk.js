'use strict'

const createTalkSchema = {
    name : {
        in : ['body'],
        isString: true,
        errorMessage: 'Not a valid name'
    },

    description: {
        in: ['body'],
        isString : true,
        optional : true,
        errorMessage: 'Not a valid description'
    },

    category: {
        in: ['body'],
        isString : true,
        errorMessage: 'Category is required and must be string'
    },

    date: {
        in: ['body'],
        isString : true,
        errorMessage: 'Date format is YYYY-MM-DD',
        optional : true
    },

    duration: {
        in: ['body'],
        isString : true,
        errorMessage: 'Duration is required in mins as string'
    },

    public: {
        in: ['body'],
        isBoolean : true,
        errorMessage: 'Public value type is boolean',
        optional : true
    },

    status: {
        in: ['body'],
        custom : {
            option : (value) => {
                return ['WILL HOLD', 'HOLDING', 'HAS HELD'].includes(value);
            },
            errorMessage: 'Not a valid status type. Status must be one of \'WILL HOLD \' or \'HOLDING \' or \'HAS HELD \''
        },
        optional : true
    },
}

const updateTalkSchema = {
    id : {
        in : ['params']
    },
    name: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Not a valid name'
    },

    description: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Not a valid description'
    },

    category: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Category is required and must be string'
    },

    date: {
        in: ['body'],
        isString: true,
        errorMessage: 'Date format is YYYY-MM-DD',
        optional: true
    },

    duration: {
        in: ['body'],
        isString: true,
        errorMessage: 'Duration is required in mins as string',
        optional: true,
    },

    public: {
        in: ['body'],
        isBoolean: true,
        errorMessage: 'Public value type is boolean',
        optional: true
    },

    status: {
        in: ['body'],
        custom: {
            option: (value) => {
                return ['WILL HOLD', 'HOLDING', 'HAS HELD'].includes(value);
            },
            errorMessage: 'Not a valid status type. Status must be one of \'WILL HOLD \' or \'HOLDING \' or \'HAS HELD \''
        },
        optional: true
    },
}

const deleteTalkSchema = {
    id: {
        in: ['params']
    }
}

module.exports = { createTalkSchema, updateTalkSchema, deleteTalkSchema }