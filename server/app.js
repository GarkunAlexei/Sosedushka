require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const { User } = require('./db/models')

const PORT = process.env.PORT ?? 3001;
const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());





app.listen(PORT, () => {
    console.log('server start on port ', PORT)
})
