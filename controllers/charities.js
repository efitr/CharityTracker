
const Charity = require('../models/charity')
const Opinion = require('../models/opinion')

//We don't import app because when it will be needed app is declared there
function charities(app){
// INDEX
app.get('/', (req, res) => {
//get the basic webpage with all the charities
  Charity.find()
  .then(charities => {
    console.log("route get( / ) - index")
    res.render('charities-index', {charities: charities});
    console.log("renders(charities-index)")
    console.log("-----")
  }).catch(err => {
    console.log(err);
  });
});


// SHOW
app.get('/charities/:id', (req, res) => {
//get a particular charity
  Charity.findById(req.params.id)
  .then((charity) => {
    Comment.find({ charityId: req.params.id })
      .then(opinions => {
        console.log("route get('/charities/:id - get the opinions included")
        res.render('charities-show', {
          charity: charity, 
          opinions: opinions
        })
        console.log("renders(charities-show)")
        console.log("-----")
      })
  }).catch((err) => {
    console.log(err.message);
  });
});

// NEW
app.get('/charities/new', (req, res) => {
//get the form to fill a new charity
  console.log("route get(/charities/new) - new form")
  res.render('charities-new', {});
  console.log("renders(charities-new)")
  console.log("-----")
});

// CREATE
app.post('/charities', (req, res) => {
//get the form of the charity you just made
  Charity.create(req.body)
    .then((charity) => {
      console.log("that charity id")
      console.log(charity._id);
      console.log("route post(/charities) - redirect(charities/:id)")
      res.redirect(`/charities/${charity._id}`);
      console.log("back(charities-show)")
      console.log("-----")
    }).catch((err) => {
      console.log(err.message);
  });
});

// // EDIT
// app.get('/charities/:id/edit', function(req, res){
// //get the new form with all the data from this particular charity
// });

// // UPDATE
// app.put('/charities/:id', function(req, res){
// //get back to the charity form with the updated data 
// });

// // DESTROY
// app.delete('/charities/:id', function(req, res){
// //get back to the index 
// });
}

module.exports = charities;