//Wrapper for Mongo in place
const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});
//Model structure using the wrapper in place
var Charity = mongoose.model('Charity', {
    
    name: String,
    purpose: String,
    description: String,
    image: String
});
//Makes it be available for other parts
module.exports = Charity;
