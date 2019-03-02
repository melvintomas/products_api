const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    tags: [String]
})

let Product = mongoose.model('Product', productSchema);

Product.getProducts = function(callback){
    Product.find(callback)
}

Product.getProduct = function(id, callback){
    Product.findById(id,callback)
}

Product.addProduct = function(product, callback){
    Product.create(product,callback)
}

Product.removeProduct = function(id, callback){
    Product.findByIdAndDelete(id,callback)
}

Product.updateProduct = function(id,product, callback){
    Product.findByIdAndUpdate(id,product, {new: true},callback)
}

module.exports = Product