import express, { response } from 'express';
import { getSqlData } from '../controller/functions.js';
import { DemoSchema } from '../models/demoModel.js';

export const Router = express.Router();


Router.get("/getdata", async(req, res) => {
    const data = await DemoSchema.find({}).sort({'created_at':'descending'});
    res.json(data)
});

Router.get("/getSqlData", getSqlData);

Router.post("/postData", async(req, res) => {

    const response = await DemoSchema.create({ id: req.body.id, name: req.body.name,created_at: Date.now() })
    res.json(response);

})

// Router.get("/getData", getJson);


