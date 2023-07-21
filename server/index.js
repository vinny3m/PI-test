import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from "./database/db.js";
import Routes from "./routes/route.js"

const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


app.use(cors());
const allowedOrigins = ['http://localhost:3000']; // Replace with your actual frontend URLs
app.use(cors({
  origin: allowedOrigins,
}));
app.use('/', Routes);


dotenv.config();
const PORT=8000;

// const username=process.env.DB_USERNAME;
// const password=process.env.DB_PASSWORD;

Connection();
app.listen(PORT, ()=> console.log(`Server is successfull on port ${PORT}`));