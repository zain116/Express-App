var mongoose=require("mongoose")

var ProductSchema=mongoose.Schema({
    Name:String,
    Price:String,
});
const Product=mongoose.model("Product",ProductSchema);
module.exports= Product;