var express = require('express');
var bodyParser = require('body-parser');
var PORT = 3000;
var data = require('./mocks/spies.js');

var app = express();
app.use(bodyParser.json());

app.get('/heartbeat', (req, res) => {
  res.json({
    is: 'working'
  })
})

app.get('/spies', (req, res) => {
  res.json({
    spies: data
  })
})

app.post('/spies', (req, res) => {
  var spy = req.body.spy;
  data.push(spy);
  res.json({
    spies: data
  })
});

//
// app.put();
//
// app.delete();

app.listen(PORT, function() {
  console.log('listening to port: ', PORT)
})
