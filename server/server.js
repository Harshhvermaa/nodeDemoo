import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {Router} from './Router/router.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

app.listen(3000,()=>{
    console.log('server at 3000')
});
