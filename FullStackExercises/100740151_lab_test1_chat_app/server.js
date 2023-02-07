const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

const server = http.createServer(app);
const io = require('socket.io')(server);

const port = 3000;

const mongoose = require('mongoose');
const user = require('./models/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'web')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/login.html');
});

app.post('/login', async (req, res) => {
  const userName = req.body.userName
  const password = req.body.password

  if (!userName || !password) {
    res.send({ message: 'Please Enter username or password' });
  }

  const successUser = await user.findOne({ userName: userName });
  if (successUser) {
    if (successUser.password === password) {
      res.send({
        status: true,
        userName: successUser.userName,
        message: 'Successful Login',
      });
    } else {
      res.send({
        status: false,
        message: 'Invalid Password',
      });
    }
  } else {
    res.send({ message: 'invalid user name' });
  }
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/web/register.html');
});

app.post('/register', async (req, res) => {
  const newUser = new user({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });
  try {
    newUser.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send({ message: 'There was an error adding user' });
    res.redirect('/');
  }
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/web/home.html');
});

app.get('/home/:room', (req, res) => {
  const room = req.params.room;
  res.sendFile(`${__dirname}/web/home/${room}`);
});

io.on('connection', (socket) => {
  console.log('Someone Connected');

  socket.on('sendMessage', (message) => {});

  socket.on('disconnect', () => {
    console.log('User has disconnected');
  });
});

mongoose.set('strictQuery', false);
mongoose
  .connect(
    'mongodb+srv://jjensen-ai:Bbnm-8779-mnz@jjensen-ai-cluster.g7rbfyi.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((success) => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Error Connecting to DB');
  });

server.listen(port, () => {
  console.log(`The application has connected on ${port}`);
});
