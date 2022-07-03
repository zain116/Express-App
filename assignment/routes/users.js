var express = require('express');
const User = require('../model/user');
var router = express.Router();
var user=require("../model/user")
/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.send('users/register');
});
router.post('/register', function(req, res, next) {
 let user=new User(req.body)
 await user.save()
res.redirect('users/register');
});
router.get('/login', function(req, res, next) {
  res.send('users/login');
});
router.get('/logout', function(req, res, next) {
  req.session.user=null;

  res.redirect('/');
});
router.post('/login',async function(req, res, next) {
  let user= await User.findOne({email:req.body.email, password: req.body.password})
  if(!user) return res.redirect("/login ")
  req.session.user=user;
  return res.redirect("/")

});

module.exports = router; 
