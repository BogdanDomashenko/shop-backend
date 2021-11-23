let express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Product = require('./api/models/productModel.js'); 
const Order = require('./api/models/orderModel'); 
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Shop'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let routes = require('./api/routes/shopRoutes');
routes(app); 


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);