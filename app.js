const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
const port = 5000 || PROCESS.ENV

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Listening to post ${port}`)
})
