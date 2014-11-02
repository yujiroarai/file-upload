var fs = require('fs'),
multiparty = require('multiparty'),
exec = require('child_process').exec;

// Creates a new thing in the DB.
exports.create = function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // FIXME コマンドじゃなくてnodeでやりたいよね
  exec('rm -rf ./uploads', function(err, stdout){
    console.log(stdout);
  });
  var form = new multiparty.Form();
  form.parse(req, function(err, fields, data){
    console.log(data.files[0].path);
    // FIXME コマンドじゃなくてnodeでやりたいよね
    exec('unzip ' + data.files[0].path + ' -d ./uploads', function(err, stdout){
      console.log(stdout);
    });
  });

  return res.json(201, { 'upload_files': [] });
};

function handleError(res, err) {
  return res.send(500, err);
}
