
const Review = require('../models/charity');
const Comment = require('../models/user');

function users(app){
// INDEX
app.get('/posts', function(req, res){

});

// SHOW
app.get('/posts/:id', function(req, res){

});

// NEW
app.get('/posts/new', function(req, res){

});

// CREATE
app.post('/posts', function(req, res){

});

// EDIT
app.get('/posts/:id/edit', function(req, res){

});

// UPDATE
app.put('/posts/:id', function(req, res){

});

// DESTROY
app.delete('/posts/:id', function(req, res){

});
}