import mongoose from "mongoose"

const Connection= async () =>{
    //const URL=`mongodb://user:vineela@ac-j9s5vkl-shard-00-00.6ry7bsq.mongodb.net:27017,ac-j9s5vkl-shard-00-01.6ry7bsq.mongodb.net:27017,ac-j9s5vkl-shard-00-02.6ry7bsq.mongodb.net:27017/?ssl=true&replicaSet=atlas-bybrih-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL=`mongodb://${username}:${password}@ac-j9s5vkl-shard-00-00.6ry7bsq.mongodb.net:27017,ac-j9s5vkl-shard-00-01.6ry7bsq.mongodb.net:27017,ac-j9s5vkl-shard-00-02.6ry7bsq.mongodb.net:27017/?ssl=true&replicaSet=atlas-bybrih-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const URL= "mongodb://mongo:27017/test";

    try{
       await  mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
       console.log("Db connection success")
    }catch(error){
        console.log("error while connecting with db", error)
    }
}

export default Connection;
