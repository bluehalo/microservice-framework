'use strict';

var controller = require('../controllers/microservice.server.controller');

module.exports = function(app) {

	app.route('/')
		.get(controller.index);

};