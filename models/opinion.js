
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Opinion = mongoose.model('Opinion', {
    title: String,
    content: String,
    // userId: {type: Schema.Types.ObjectId, ref: 'User'},
    charityId: {type: Schema.Types.ObjectId, ref: 'Charity'}
});

module.exports = Opinion;