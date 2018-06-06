'use strict';
module.exports = function(app) {
  var OSQuery = require('../controllers/OSQueryController');

  // OSQuery Routes
  app.route('/users')
    .get(OSQuery.Usuarios);

  app.route('/processes')
  	.get(OSQuery.Procesos);

  app.route('/osv')
  	.get(OSQuery.OsVersion);

  app.route('/kernelv')
  	.get(OSQuery.KernelV);

  app.route('/mem')
  	.get(OSQuery.Memoria);

  app.route('/packages')
  	.get(OSQuery.Paquetes);

  app.route('/users/create')
  	.post(OSQuery.create_user);

  app.route('/users/delete')
  	.post(OSQuery.create_user);

  app.route('/processes/kill')
  	.post(OSQuery.kill_process);

  app.route('/packages/install')
  	.get(OSQuery.install_package);

  app.route('/packages/remove')
  	.get(OSQuery.remove_package);

};