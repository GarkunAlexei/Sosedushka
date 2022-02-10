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

const { OAuth2Client } = require('google-auth-library');

const PORT = process.env.PORT ?? 3001;
const app = express();
app.use(morgan('dev'));
app.use(express.json());

//необходим для авторизации
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

app.use(
  session({
    name:'somename',
    store: new FileStore({}),
    saveUninitialized: false,
    secret: 'abracadabra777',
    resave: false,
  })
);

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

app.listen(PORT, () => {
    console.log('server start on port ', PORT)
})
