var express = require('express');
var router = express.Router();

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


/* post user plus. */
router.post('/plus', function(req, res, next) {
  Star
      .find({ id: 1 })
      .then(function(user){
        user.counter =  user.counter+1
        user.save()
          .success(
            function() {
              Star
                  .findAll({ limit: 50 })
                  .then((users) =>   res.render('user_list', { title : "User's stars",users: users }))
                  .catch((err) => res.status(400).send(err));
            })
          .error(function(error){})
      })
      .catch((err) => res.status(400).send(err));
});

/* post user minus. */
router.post('/minus', function(req, res, next) {
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  Star
      .findAll({ limit: 50 })
      .then((users) => res.json(users))
      .catch((err) => res.status(400).send(err));
});

/* GET users listing. */
router.get('/display', function(req, res, next) {
  Star
      .findAll({ limit: 50 })
      .then((users) =>   res.render('user_list', { title : "User's stars",users: users }))
      .catch((err) => res.status(400).send(err));
});


module.exports = router;
