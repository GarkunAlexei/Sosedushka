require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

const userRouter = require('./routes/userRouter');
const rolesRouter = require('./routes/rolesRouter');
const adRouter = require('./routes/adRouter');
const interestRouter = require('./routes/interestRouter');
const formRouter = require('./routes/formRouter');
const WebSocket = require('ws');


const { OAuth2Client } = require('google-auth-library');

const PORT = process.env.PORT || 3001

const map = new Map();// for ws
const http = require('http');

const app = express();

app.use(morgan('dev'));
app.use(express.json());


//необходим для авторизации
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

const sessionParser = session({
  name:'somename',
  store: new FileStore({}),
  saveUninitialized: false,
  secret: 'abracadabra777',
  resave: false,
})
app.use(sessionParser);

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

const users = [];

app.post('/api/google-login', async (req, res) => {
  console.log(req.body);
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  console.log(ticket.getPayload());
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});

app.use('/user', userRouter);
app.use('/roles', rolesRouter);
app.use('/notice', adRouter);
app.use('/interest', interestRouter);
app.use('/profile', formRouter);


//WS
const server = http.createServer(app);
const wss = new WebSocket.Server({ clientTracking: false, noServer: true });

server.on('upgrade', function (request, socket, head) {
  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {

    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit('connection', ws, request);
    });
  });
});

wss.on('connection', function (ws, request) {
  const userId = request.session.user.id
  const name = request.session.user.login
  console.log(request.session.user)

  map.set(userId, ws);

  ws.on('message', function (message) {
    console.log(`Received message ${message} from user: ${name}`);
    for(const [userId, wsClient] of map){
      wsClient.send(`${name} : ${message}`)
    }
  });
});


server.listen(PORT, () => {
    console.log('server start on port ', PORT)
})
