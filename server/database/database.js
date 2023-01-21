import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

export const connection = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rgbookd.mongodb.net/MyFirstDatabase?retryWrites=true&w=majority`);
        console.log("database connected")
    }catch(err){
        return err;
    }
}