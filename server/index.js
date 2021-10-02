import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './connection/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Router);

const PORT = 5000;

Connection();

app.listen(PORT, ()=> {
    console.log(`Server is running at port: ${PORT}`);
})

DefaultData();