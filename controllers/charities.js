
const Charity = require('../models/charity');
const Opinion = require('../models/opinion');

function charities(app){
// INDEX
app.get('/charities', function(req, res){
//get the basic webpage with all the charities
  Charity.find()
  .then(charities => {
    res.render('charity-index', {charities: charities});
  }).catch(err => {
    console.log(err);
  });
});

// SHOW
app.get('/charities/:id', function(req, res){
//get a particular charity
});

// NEW
app.get('/charities/new', function(req, res){
//get the form to fill a new charity
});

// CREATE
app.post('/charities', function(req, res){
//get the form of the charity you just made
});

// EDIT
app.get('/charities/:id/edit', function(req, res){
//get the new form with all the data from this particular charity
});

// UPDATE
app.put('/charities/:id', function(req, res){
//get back to the charity form with the updated data 
});

// DESTROY
app.delete('/charities/:id', function(req, res){
//get back to the index 
});
}