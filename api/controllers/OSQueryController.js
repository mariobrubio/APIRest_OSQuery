'use strict';
var osquery = require('osquery');
var os = osquery.createClient({ path: '/var/osquery/osquery.em' });

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
  os.query('SELECT * FROM logged_in_users;', function(err, res) {
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
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.read_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_user = function(req, res) {


  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
