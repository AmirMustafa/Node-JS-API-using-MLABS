// note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  // READ
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
  	const details = {'_id': new ObjectID(id)};
  	db.collection('notes2').findOne(details, (err, item) => {
  		if(err) {
  			res.send({'error':'An error has occurred'});
  		} else {
  			res.send(item);
  		}
  	});
  });

  // Create
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

  // Delete
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes2').remove(details, (err, item) => {
      if(err) {
        res.send({'error' : 'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  // Update
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id:ObjectID(id) };
    const note = {text: req.body.body, title: req.body.title};  // data to be updated

    db.collection('notes2').update(details, note, (err, item) => {
      if(err) {
        res.send({'error' : 'An error has occurred'});
      } else {
        res.send('data is updated with the following value' + note);
      }
    });
  });
};

