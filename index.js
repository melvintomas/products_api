const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const Product = require("./model/Product")
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/products')

// parse application/json
app.use(cors({origin:"http://localhost:4200"}))
app.use(bodyParser.json())

//get all products
app.get('/products', (req,res) =>{
    Product.getProducts(req.query).then(products =>{
        res.json(products)
    })
})

//get product by id
app.get('/products/:id', (req,res) =>{
    Product.getProduct(req.params.id).then(product =>{
        res.json(product)
    })
})

app.put('/products/:id', (req,res) =>{
    Product.updateProduct(req.params.id, req.body).then(product =>{
        res.json(product)
    })
})

app.delete('/products/:id', (req,res) =>{
    Product.removeProduct(req.params.id).then(product =>{
        res.json(product)
    })
})

app.post('/products', (req,res) =>{
    Product.addProduct(req.body).then(product =>{
        res.json(product)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))