'use strict';
module.exports = function(app) {
  var OSQuery = require('../controllers/OSQueryController');

  // OSQuery Routes
  app.route('/users')
    .get(OSQuery.test)
    .post(OSQuery.create_user);


  app.route('/users/:userId')
    .get(OSQuery.read_user)
    .put(OSQuery.update_user)
    .delete(OSQuery.delete_user);
};