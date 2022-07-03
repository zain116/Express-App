var mongoose=require("mongoose")

var ProductSchema=mongoose.Schema({
    Name:String,
    Email:String,
    password: String,
});
const User=mongoose.model("Product",ProductSchema);
module.exports= User;