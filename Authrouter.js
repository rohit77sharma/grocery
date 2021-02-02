var express = require('express');
var Authrouter = express.Router();
const bodyParser = require('body-parser');
const adminregister = require("../vertical/public/Contollers/admindetails/adminregister");
const adminlogin = require("./public/Contollers/admindetails/adminlogin");


Authrouter.use(express.json());
Authrouter.use(bodyParser.json());
Authrouter.use(bodyParser.urlencoded({ extended: true }));

//Authentications all TABs.
Authrouter.post('/login' ,adminlogin.adminlogin);
Authrouter.get('/pages-login', function (req, res) {
      res.locals = { title: 'Login' };
      res.render('Auth/login');
});
Authrouter.get('/recoverpassword', function (req, res) {
      res.render('Auth/recoverpassword');

});
Authrouter.post('/pages-register', adminregister.adminregister);
Authrouter.get('/pages-register', function (req, res) {
      res.locals = { title: 'Register' };
      res.render('Auth/register');
});
Authrouter.get('/pages-lock-screen', function (req, res) {
      res.locals = { title: 'Lock Screen' };
      res.render('Auth/pages_lock_screen');
});

Authrouter.get('/pages-recoverpw', function (req, res) {
      res.locals = { title: 'Password Recovery' };
      res.render('Auth/pages_recoverpw');
});

Authrouter.get('/pages-404', function (req, res) {
      res.locals = { title: '404 Page Error' };
      res.render('Auth/pages_404');
});

Authrouter.get('/pages-500', function (req, res) {
      res.locals = { title: '500 Page Error' };
      res.render('Auth/pages_500');
});

module.exports = Authrouter;