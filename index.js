const express = require('express');
const app = express();
//const port = process.env.Port || 3000
var port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/test',(req, res) => {
  res.send('This is only a Test!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

