function sessionAuth(req,res,next){
  res.local.user=req.session.user;
  next();
}

module.exports=sessionAuth