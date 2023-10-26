const express = require('express');
const app = express(); //create new server
const PORT = 3000;

// ROUTING
app.get('/', (req, res, next) => {
  req.test = 1;
  console.log('first');
  if(true===true){
    res.send('true'+req.test);
  }
  next();
},
(req, res, next) => {
  req.test += 10;
  console.log('second');
  next();
},
(req, res) => {
  res.send('third'+req.test);
});
// app.post('/', ()=>{})
// app.delete('/', ()=>{})
// app.put('/', ()=>{})
// app.patch('/', ()=>{})

app.listen(PORT, () => {
  console.log('server started at port = ', PORT);
});
