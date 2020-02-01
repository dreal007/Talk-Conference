"use strict"

module.exports = function (mongoose, connection) {
    var Schema = mongoose.Schema,
        AttendeeDefinition,
        AttendeeSchema


    AttendeeDefinition = {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true, unique: true, index:true },
        phone: { type: String, required: true, unique: true, index:true},
    }

    AttendeeSchema = new Schema(AttendeeDefinition, {
        collection: "attendees",
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

    var AttendeeModel = connection.model('Attendee', AttendeeSchema)

    return AttendeeModel


}