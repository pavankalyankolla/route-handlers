const express = require('express');
const app = express();
const port = 3000;
let products = [{
    id:1,
    name:"pen",
    price:10
},
{
    id:2,
    name:'scale',
    price:20
},
{
    id:3,
    name:'pencil',
    price:5
}];
//req = request,res = response

//middlewares
//log middlewares
app.use((req,res,next)=>{
console.log(`${req.method} : ${req.url} : ${req.ip} : ${new Date()}`);
next();
})



//route handler methods
app.get('/', function(req,res){
    //res.send("Hello World");//in text format
    res.send('<h2>Hello World</h2>');//in html format
});

// /about - text needs to be sent back as json
app.get('/about', (req,res) => {
    res.send({
        notice:'This is the about us section'
    });
});

app.get('/contact', (req,res) => {
    res.send('<h2>Contact Details</h2>');
})

app.get('/products', (req,res) => {
    res.send(products);
})
app.listen(port, function(){
    console.log('Listening on port '+port);
});