const express = require('express');
const app = express();

/**
 * Sample server to simulate request's endpoints
 */

app.get('/person/:value', (req, res) => {
  res.json({val1:10, val2:20})
});

app.get('/facility/:value', (req, res) => {
  res.json({val3:30, val4:40})
});

app.get('/exposure/:value', (req, res) => {
  res.json({val5:50})
});


const port = process.env.PORT || 9000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});