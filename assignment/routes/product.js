var express = require('express');
var router = express.Router();
var Product=require("../model/product");
var checkSessionAuth= require("./middlewares./checkSessionAuth")
/* GET home page. */
router.get('/', async function(req, res, next) {
  let product=await Product.find();
  
   
  //console.log(product)
  res.render("product/list",{title: "Product in DB"}, {product});
});
router.get('/add',checkSessionAuth, async function(req, res, next) {
 
  res.render("product/add");
});
router.post('/add', async function(req, res, next) {
  let product=new Product(req.body);
  await product.save();
  res.redirect("product");
});
router.get('/delete/:id', async function(req, res, next) {
  let product=await Product.findByIdAndDelete(req.params.id)
  responce.redirect("/product")
});
router.get('/cart/:id', async function(req, res, next) {
  let product=await Product.findById(req.params.id)
  let cart=[];
  if(req.cookies.cart) cart=req.cookies.cart;
  cart.push(product)
  res.cookie("cart",cart)
 
  responce.redirect("/product")
});
router.get('/edit/:id', async function(req, res, next) {
  
  responce.render("/product/edit",{product})
});
router.post('/edit/:id', async function(req, res, next) {
  let product=await Product.findById(req.params.id)
  responce.render("/product/edit",{product})
  product.name=req.body.name;
  product.price=req.body.price; 
  await product.save();
  res.redirect("product")
});
module.exports = router;
