'use strict';

var Percolator = require('percolator').Percolator;
var dbSession = require('../../src/backend/dbSession.js');

var Server = function(port) {
	var server = Percolator({'port': port, 'autoLik': false});

	server.route('/api/keywords',
		{
			GET: function (req, res) {
				dbSession.fetchAll('SELECT id, value, categoryID FROM keyword ORDER BY id', function (err, rows) {
					if (err) {
						console.log(err);
						res.status.internalServerError(err);
					} else {
						console.log(rows);
						res.collection(rows).send();
					}
				});
			}
		}
	);

	return server;
};

module.exports = {'Server': Server};
