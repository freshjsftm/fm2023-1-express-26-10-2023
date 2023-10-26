const express = require('express');
const validate = require('./middlewares/validate.mw');
const UserController = require('./controllers/user.controller');

const app = express(); //create new server
const PORT = 3000;

const parse = express.json();

// ROUTING
app.get('/', (req, res) => {
  res.send('hi');
});
app.post('/users', parse, validate, UserController.create);
// app.delete('/', ()=>{})
app.put('/users', parse, validate, UserController.update);
// app.patch('/', ()=>{})

app.listen(PORT, () => {
  console.log('server started at port = ', PORT);
});
