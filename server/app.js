require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const { Worker } = require('./db/models')

const PORT = process.env.PORT ?? 3001;
const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.get('/workers', async (req, res) => {
    const workers = await Worker.findAll();
    res.json({workers})
});

app.delete('/:id', async (req, res) => {

    await Worker.destroy({where:{id: req.params.id}})

    res.sendStatus(200)
})
app.post('/getoffer/:id', async (req, res) => {
    const {id} = req.params;

    await Worker.update({staff: true}, {where:{id}});

    res.sendStatus(200)
})

app.post('/getworkers', async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const workers = await axios(url);

    const workersTodb = workers.data.map( worker => ({
        name: worker.name,
        email: worker.email,
        phone: worker.phone,
        staff: false
    }));
   const db =  await Worker.bulkCreate(workersTodb);
    res.json({workers: db})
})


 


app.listen(PORT, () => {
    console.log('server start on port ', PORT)
})
