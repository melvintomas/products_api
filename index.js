const express = require('express')
const app = express()
const port = 3000
const Product = require("./model/Product")
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/products')

// parse application/json
app.use(bodyParser.json())

//get all products
app.get('/products', (req,res) =>{
    if (Object.keys(req.query).length == 0){
        res.json(products)
    }
    Product.getProducts(function(err, products){
        if(err){
            throw err;
        }
        res.json(products)
    })
})

//get product by id
app.get('/products/:id', (req,res) =>{
    Product.getProduct(req.params.id, function(err, product){
        if(err){
            throw err;
        }
        res.json(product)
    })
})

app.put('/products/:id', (req,res) =>{
    Product.updateProduct(req.params.id, req.body, function(err, product){
        if(err){
            throw err;
        }
        res.json(product)
    })
})

app.delete('/products/:id', (req,res) =>{
    Product.removeProduct(req.params.id, function(err, product){
        if(err){
            throw err;
        }
        res.json(product)
    })
})

app.post('/products', (req,res) =>{
    Product.addProduct(req.body, function(err, product){
        if(err){
            throw err;
        }
        res.json(product)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))