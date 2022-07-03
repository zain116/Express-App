var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello world");
});
router.get('/cart', function(req, res, next) {
  let cart=req.cookies.cart;
  if(!cart ) cart=[]
  res.send("cart",{cart});
});
module.exports = router;
