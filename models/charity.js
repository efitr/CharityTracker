
const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

var Charity = mongoose.model('Charity', {
    
    name: String,
    purpose: String,
    description: String,
    image: String
});

module.exports = Charity;
