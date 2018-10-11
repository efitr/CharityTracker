
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User', {
    name: String,
    interests: String,
    opinionId: {type: Schema.Types.ObjectId, ref: 'Opinion'}
    // charityId: {type: Schema.Types.ObjectId, ref: 'Charity'}
});

// module.exports = User;