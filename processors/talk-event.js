'use strict'

const { TalkEvent } = require('../models');

function createTalkEvent(details) {
    const payload = {
        talk_id : details.talk_id,
        talk : details.talk_id,
        attendees : [details.attendees],
        event_held : details.event_held
    }
    return TalkEvent.create(payload).then((newTalkEvent) => {
        if (!newTalkEvent) throw new Error('Could not create talk event');
        return newTalkEvent;
    });
}

function addAttendeeToTalk(talk_event, details) {
    const payload = {
        attendees: [...talk_event.attendees]
    }

    const found = talk_event.attendees.some(element => {
        return element == details.attendees;
    });

    if(!found){
        payload.attendees = [...talk_event.attendees, details.attendees]
    }
    return TalkEvent.updateOne({ talk_id : details.talk_id}, {$set : { ...payload }}, {new : true});
}

function removeAttendeeFromTalk(talk_event, details) {
    const payload = {
        attendees: [...talk_event.attendees]
    }

    const found = talk_event.attendees.some((element) => {
        return element == details.attendees
    });

    if (found === true) {
        const index = payload.attendees.indexOf(details.attendees);
        payload.attendees.splice(index, 1)
    }
    return TalkEvent.updateOne({ talk_id: details.talk_id }, { $set: { ...payload } }, { new: true });
}

function get(body) {
    if (body.talk_id) {
        return TalkEvent.find({ talk_id: body.talk_id })
    }
    return TalkEvent.find().skip(params.skip).limit(params.limit)
}

function getWithPopulate(params) {
    if (params.talk_id) {
        return TalkEvent.find({ talk_id: params.talk_id })
             .populate('attendees').populate('talk');
    }
    return TalkEvent.find().skip(params.skip).limit(params.limit)
        .lean().populate('attendees').populate('talk');
}

function remove(params){
    return TalkEvent.deleteOne({ talk_id: params.id});
}

module.exports = { get, remove, getWithPopulate, createTalkEvent, addAttendeeToTalk, removeAttendeeFromTalk }