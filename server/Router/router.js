import express, { response } from 'express';
import { getCountOfSqlTable, getSqlData, postSqlData } from '../controller/sqlFunctions.js';
import { DemoSchema } from '../models/demoModel.js';

export const Router = express.Router();


// simple API's
Router.get("/getData",(req,res)=>{
    res.json( {success : "true"} );
});

Router.post("/postData",(req,res)=>{
    const data = {
        id : req.body.id,
        name : req.body.name
    }
    if( !req.body.id && !req.body.name)
    {
        res.json(  {success : "false"}  )
    }else{
        res.json(data);
    }
});


// SQL Database
Router.get("/getSqlData", getSqlData);
Router.post("/postSqlData",postSqlData);
Router.get("/getCount",getCountOfSqlTable)


// MongoDatabase
Router.get("/getMongodata", async(req, res) => {
    const data = await DemoSchema.find({}).sort({'created_at':'descending'});
    res.json(data)
});

Router.post("/postData", async(req, res) => {

    const response = await DemoSchema.create({ id: req.body.id, name: req.body.name,created_at: Date.now() })
    res.json(response);

});


