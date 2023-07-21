import mongoose from "mongoose"

const Connection= async () =>{
    
    const URL= "mongodb://mongo:27017/test";

    try{
       await  mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log("Db connection success")
    }catch(error){
        console.log("error while connecting with db", error)
    }
}

export default Connection;
