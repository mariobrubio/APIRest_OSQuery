'use strict';
module.exports = function(app) {
  var OSQuery = require('../controllers/OSQueryController');

  // OSQuery Routes
  app.route('/users')
    .get(OSQuery.Usuarios);

  app.route('/processes')
  	.get(OSQuery.Procesos);

  app.route('/OsV')
  	.get(OSQuery.OsVersion);

  app.route('/KernelV')
  	.get(OSQuery.KernelV);

  app.route('/Mem')
  	.get(OSQuery.Memoria);

  app.route('/Packages')
  	.get(OSQuery.Paquetes);
};