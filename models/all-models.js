"use strict"
//const mongoose = require('mongoose')
//mongoose.Promise = require('bluebird');

module.exports = function(mongoose, connection){
    var Schema = mongoose.Schema,
        TalkDefinition,
        TalkSchema,
        AttendeeDefinition,
        AttendeeSchema,
        TalkEventDefinition,
        DB = {},
        TalkEventSchema;

    TalkDefinition = {
        name: { type : String, required : true},
        category: { type : String, required : true},
        description : { type : String },
        date: { type: Date, required: true },
        duration : { type : String, required : true },
        isPublic : { type : Boolean, default : true },
        status : { type : String, enum : ['WILL HOLD', 'HOLDING', 'HAS HELD'], default : 'WILL HOLD' }
    }

    AttendeeDefinition = {
        first_name: { type: String, required : true },
        last_name: { type: String, required : true },
        email: { type: String, required : true, unique : true, sparse : true },
        phone: { type: String, required : true, unique : true },
    }

    TalkEventDefinition = {
        talk_id: { type: Schema.ObjectId, ref: 'Talk' },
        attendee_id : { type: Schema.ObjectId, ref: 'Attendee'},
        date : { type : Date, required : true},
        event_held : { type : Boolean, required : true, default : false }
    }

    TalkSchema = new Schema(TalkDefinition, {
        collection: "talks",
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

    AttendeeSchema = new Schema(AttendeeDefinition, {
        collection: "attendees",
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

    TalkEventSchema = new Schema(TalkEventDefinition, {
        collection: "talk_events",
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

    DB.TalkModel = connection.model('Talk', TalkSchema)
    DB.AttendeeModel = connection.model('Attendee', AttendeeSchema)
    DB.TalkEventModel = connection.model('TalkEvent', TalkEventSchema)

    return DB
        
        
}