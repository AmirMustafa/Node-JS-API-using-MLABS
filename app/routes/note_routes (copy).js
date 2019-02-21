// note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
  	const details = {'_id': new ObjectID(id)};
  	db.collection('notes2').findOne(details, (err, item) => {
  		if(err) {
  			res.send({'error':'An error has occurred'});
  		} else {
  			res.send(item);
  		}
  	});
  });

  const collection = 
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes2').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};

// basic insert in mongo db
/*// note_routes.js
module.exports = function(app, db) {
  const collection = 
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes2').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};*/

// First routes
/*module.exports = function (app, db){
  app.post('/notes', (req, res) => {
      // notes here
      console.log(req.body);
      res.send('Hello from notes')
  });  
};*/