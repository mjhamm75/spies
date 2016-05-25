var express = require('express');
var PORT = 3000;

var app = express();

app.get('/heartbeat', (req, res) => {
  res.json({
    is: 'working'
  })
})

app.listen(PORT, function() {
  console.log('listening to port: ', PORT)
})
