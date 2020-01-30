"use strict"

module.exports = function (mongoose, connection) {
    var Schema = mongoose.Schema,
        TalkEventDefinition,
        TalkEventSchema;


    TalkEventDefinition = {
        talk_id: { type: String, required : true },
        talk: { type: Schema.ObjectId, ref: 'Talk', required: true },
        attendees: [{ type: Schema.ObjectId, ref: 'Attendee' , required : true }],
        // date: { type: Date, required: true },
        event_held: { type: Boolean, required: true, default: false }
    }

    TalkEventSchema = new Schema(TalkEventDefinition, {
        collection: "talk_events",
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

    var TalkEventModel = connection.model('TalkEvent', TalkEventSchema)

    return TalkEventModel


}