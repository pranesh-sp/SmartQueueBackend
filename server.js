const express = require('express')
const app = express()
const port = 3100
var mongoose = require('./db.js')
var bodyParser = require('body-parser')
var token = require('./Models/Token.js')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
var tok = 0;

app.get('/', (req, res) =>{ res.send('Hello World!')})

app.post('/getToken',(req,res)=>{
    tok++;
    console.log(req);
    console.log(token);
    var curtoken={
        token: tok,
        counter:null,
    }
    token.create(curtoken).then((doc)=>{
        console.log(doc);
        res.status(200).send({data:doc});
    }).catch((err)=>{
        res.status(500).send({message: err.toString()});
    })
})

app.listen(port, () => console.log(`Token Manager listening on port ${port}!`))