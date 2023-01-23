import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {Router} from './Router/router.js';
import { connection } from './database/mongoose';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

mongoose.set('strictQuery',false);

connection();

app.listen(3000,()=>{
    console.log('server 3000')
});
