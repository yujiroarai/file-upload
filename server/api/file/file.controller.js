'use strict';

var fs = require('fs');
var multiparty = require('multiparty');

// Creates a new thing in the DB.
exports.create = function(req, res) {
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, data){
      for (var i in data.files) {
        var upload_path = './uploads/' + data.files[i].originalFilename;
        fs.rename(data.files[i].path, upload_path);
      }
    });
    return res.json(201, { 'upload_files': response });
};

function handleError(res, err) {
  return res.send(500, err);
}
