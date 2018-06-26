// Init sequelize
var Sequelize = require('sequelize')
  , sequelize = new Sequelize('starcounter', 'root', '1234', {
    dialect: 'mysql',
    host:    'db',
    port:    3306
  });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
    not_connected = false;
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });

// Star schema definition

var Star = sequelize.define('Star', {
  user: Sequelize.STRING,
  counter: Sequelize.INTEGER
}, {
  tableName: 'stars', // this will define the table's name
  timestamps: false   // this will deactivate the timestamp columns
});

sequelize
  .sync()
  .then(function(err) {
    console.log('It worked!');
  }, function (err) {
    console.log('An error occurred while creating the table:', err);
  });

module.exports = Star;
