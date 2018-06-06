'use strict';
var osquery = require('osquery');
var os = osquery.createClient({ path: '/var/osquery/osquery.em' });
var exec = require('child_process').exec;

var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.test = function(req,res1){
  os.query('select timestamp from time', function(err, res) {
  	res1.json(res);
});
};

exports.Usuarios = function(req,res1){
  os.query('SELECT * FROM users;', function(err, res) {
  	res1.json(res);
});
};

exports.Procesos = function(req,res1){
  os.query('SELECT * from processes;', function(err, res) {
  	res1.json(res);
});
};

exports.OsVersion = function(req,res1){
  os.query('SELECT * from os_version;', function(err, res) {
  	res1.json(res);
});
};

exports.KernelV = function(req,res1){
  os.query('SELECT version from kernel_info;', function(err, res) {
  	res1.json(res);
});
};

exports.Memoria = function(req,res1){
  os.query('SELECT memory_total from memory_info;', function(err, res) {
  	res1.json(res);
});
};

exports.Paquetes = function(req,res1){
  os.query('SELECT * from deb_packages;', function(err, res) {
  	res1.json(res);
});
};

exports.create_user = function(req, res) {
  var new_user = req.params('user');
  var final = 'useradd '.concat(new_user);
  exec(final,function(err,stdout,stderr){
  	console.log(new_user);
  	res.json(stdout)
  });
};

exports.delete_user = function(req, res) {
  var new_user = req.params('user');
  var final = 'userdel '.concat(new_user);
  exec(final,function(err,stdout,stderr){
  	console.log(new_user);
  	res.json(stdout)
  });
};


exports.kill_process = function(req, res) {
  var new_user = req.params('pid');
  var final = 'kill '.concat(new_user);
  exec(final,function(err,stdout,stderr){
  	console.log(new_user);
  	res.json(stdout)
  });
};

exports.install_package = function(req, res) {
  var new_user = req.params('name');
  var final = 'apt-get install '.concat(new_user);
  exec(final,function(err,stdout,stderr){
  	console.log(new_user);
  	res.json(stdout)
  });
};

exports.remove_package = function(req, res) {
  var new_user = req.params('name');
  var final = 'apt-get remove '.concat(new_user);
  exec(final,function(err,stdout,stderr){
  	console.log(new_user);
  	res.json(stdout)
  });
};


