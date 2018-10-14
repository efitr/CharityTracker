
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User', {
    name: String,
    password: String,
    email: String
    // interests: String,
    //opinionId: {type: Schema.Types.ObjectId, ref: 'Opinion'}
    // charityId: {type: Schema.Types.ObjectId, ref: 'Charity'}
});

// module.exports = User;

//async
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

