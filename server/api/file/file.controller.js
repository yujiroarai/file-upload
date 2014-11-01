'use strict';

var fs = require('fs');

// Creates a new thing in the DB.
exports.create = function(req, res) {
  // Thing.create(req.body, function(err, thing) {
    // if(err) { return handleError(res, err); }
    console.log(req);
    return res.json(201, {'a': ''});
  // });
};

function handleError(res, err) {
  return res.send(500, err);
}
