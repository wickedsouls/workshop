const express = require('express');
const app = express();
require('dotenv').config();

/**
 * Sample server to simulate request's endpoints
 */

app.get('/api/person/:value', (req, res) => {
  res.json({val1:10, val2:20})
});

app.get('/api/facility/:value', (req, res) => {
  res.json({val3:30, val4:40})
});

app.get('/api/exposure/:value', (req, res) => {
  res.json({val5:50})
});

// load client page if above routes are not used
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/client/build'));
  app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
}

const port = process.env.PORT || 9000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});