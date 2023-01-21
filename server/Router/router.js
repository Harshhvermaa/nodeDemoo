import express from 'express';
import { getJson } from '../controller/functions.js';

export const Router = express.Router();

Router.get("/",(req,res)=>{
    res.send('Hi');
})
Router.get("/getData",getJson);


