//var express = require('express');
//var router = express.Router();
var Star = require('../models/users');

/* post user plus. */
exports.plusFunction = function(req, res, next) {
  console.log(req.params.id)
  Star
      .findById(req.params.id)
      .then(function(user){
        user.counter =  user.counter+1
        user.save()
          .then(
            res.redirect('/users/'))
          .error(function(error){})
      })
      .catch((err) => res.status(400).send(err));
};

/* post user minus. */
exports.minusFunction = function(req, res, next) {
  console.log(req.params.id)
  Star
      .findById(req.params.id)
      .then(function(user){
        user.counter =  user.counter-1
        user.save()
          .then(
            res.redirect('/users/'))
          .error(function(error){})
      })
      .catch((err) => res.status(400).send(err));
};

/* GET users listing. */
exports.listFunction = function(req, res, next) {
  Star
      .findAll({ limit: 50 })
      .then((users) =>   res.render('user_list', { title : "User's stars",users: users }))
      .catch((err) => res.status(400).send(err));
};
