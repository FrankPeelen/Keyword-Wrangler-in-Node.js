'use strict';

var DBWrapper = require('node-gbi').DBWrapper;

var dbWrapper = new DBWrapper('sqlite3', {'path': '/var/tmp/keyword-wrangler.test.sqlite'});
dbWrapper.connect();

module.exports = dbWrapper;
