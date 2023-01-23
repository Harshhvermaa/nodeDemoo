import mongoose from 'mongoose';

const demoSchema = mongoose.Schema({
    id:{
       type:String
    },
    name:String,
    created_at: String
});

export const DemoSchema = mongoose.model("demo",demoSchema);
