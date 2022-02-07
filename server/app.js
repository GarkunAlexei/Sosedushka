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

app.use('/user', userRouter);
app.use('/roles', rolesRouter);
app.use('/notice', adRouter);
app.use('/interest', interestRouter);

app.listen(PORT, () => {
    console.log('server start on port ', PORT)
})
