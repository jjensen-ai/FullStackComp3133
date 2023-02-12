const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const users = require('./route/users');
const app = express();
dotenv.config({ path: `${__dirname}/config.env` });

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);
console.log(DB);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(DB)
  .then(() => {
    console.log('DB Connected');
  })
  .catch((error) => {
    console.log(error, 'Sorry Database could not connect');
  });

app.use('/api/v1', users);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
