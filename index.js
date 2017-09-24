const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/test', function(req, res){
    var test = {name:"Sean", email:"b03902001@ntu.edu.tw"}
    res.send(test)
})

app.listen(port, function(){
    console.log('listening on port: '+port)
})
