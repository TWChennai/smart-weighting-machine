var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
  var db = req.db;

  var accessCode = req.body.accesscode;
  var weight = req.body.weight;

  var collection = db.get('weights');

  collection.insert({
    "accesscode": accessCode,
    "weight": weight
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send(err.toString());
    }
    else {
      res.render('weight', {
        "weight": weight
      });
    }
  });
});

module.exports = router;
