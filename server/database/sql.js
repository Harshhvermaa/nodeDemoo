import {createPool} from 'mysql';

export const pool1 = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodedemo",
    connectionLimit:10
})