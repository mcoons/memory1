var config      = require('./knexfile.js');  
var env         = 'development';  
var knex        = require('knex')(config[env]);

// knex.migrate.latest([config]);

module.exports = knex;
