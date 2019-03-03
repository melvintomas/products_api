const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    tags: [String]
})

let Product = mongoose.model('Product', productSchema);

Product.getProducts = function(query){
    return Product.find(query).exec()
}

Product.getProduct = function(id){
    return Product.findById(id).exec()
}

Product.addProduct = function(product){
    return Product.create(product).exec()
}

Product.removeProduct = function(id, callback){
    return Product.findByIdAndDelete(id).exec()
}

Product.updateProduct = function(id,product, callback){
    return Product.findByIdAndUpdate(id,product, {new: true}).exec()
}

module.exports = Product