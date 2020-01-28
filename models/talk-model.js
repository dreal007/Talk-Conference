"use strict"

module.exports = function (mongoose, connection) {
    var Schema = mongoose.Schema,
        TalkDefinition,
        TalkSchema,

    TalkDefinition = {
        name: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String },
        date: { type: Date, required: true },
        duration: { type: String, required: true },
        public: { type: Boolean, default: true },
        status: { type: String, enum: ['WILL HOLD', 'HOLDING', 'HAS HELD'], default: 'WILL HOLD' }
    }

    TalkSchema = new Schema(TalkDefinition, {
        collection: "talks",
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    })

    var TalkModel = connection.model('Talk', TalkSchema)

    return TalkModel


}