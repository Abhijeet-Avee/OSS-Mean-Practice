var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Product = require('./Product.model');

var port = 8080;
var db = 'mongodb://localhost/productapp';

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//----- get all products ------
app.get('/products',function(req,res){
    console.log('getting all books');
    Product.find({})
    .exec(function(err,products){
        if(err){
            res.send('error occured');
        }else{
            console.log(products);
            //res.set('Access-Control-Allow-Origin','*')  //for all domains
            res.set('Access-Control-Allow-Origin','http://127.0.0.1:5500') //for specific domains
            res.json(products);
        }
    })
});

//---- Posting the product----
app.post('/products',function(req,res){
    console.log('adding product..');
    Product.create(req.body,function(err,product){
        if(err){
            res.send('error saving product');
        }else{
            console.log(product);
            res.send(product);
        }
    })
});

//---Find product by category----
app.get('/products/:category',function(req,res){
    console.log("Getting book by category");
    Product.find({category: req.params.category})
    .exec(function(err,product){
        if(err){
            res.send('error occurred');
        }else{
            console.log(product);
            res.set('Access-Control-Allow-Origin','http://127.0.0.1:5500')
            res.json(product);
        }
    })
});

app.listen(port,function(){
    console.log('server started, listening on port '+port);
})