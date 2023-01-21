export const getJson = (req,res)=>{

    console.log(req.body);
    res.json({"greet":"Hello"});
}