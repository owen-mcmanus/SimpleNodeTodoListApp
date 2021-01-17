const express = require('express'),
app = express(),
port = 3000;

const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) =>{
    res.send("HI ROOT")
});

app.use('/api/todos', todoRoutes)

app.listen(3000, () => {console.log('App is listening on port: ' + port)})