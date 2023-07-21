import registerUser from "../schema/register-schema.js";
import jwt from 'jsonwebtoken';


export const registeruser= async (request, response) =>{
    try{
        const {username, email, password, confirmpassword} =request.body;
       let exist= await registerUser.findOne({email})
       if(exist){
        return response.status(400).send("User already exist");
       }
       if(password !== confirmpassword){
        return response.status(400).send("Passwords are not matching");
       }
       let newUser= new registerUser({
            username, 
            email,
            password,
            confirmpassword
       })
       await newUser.save();
       response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({message:error.message});
    }
}

export const loginuser= async (request, response) =>{
    try{
        const { email, password} =request.body;
        let exist= await registerUser.findOne({email});
        if(!exist){
            return response.status(400).send("Invalid email, user not exist");
        }
        if(exist.password != password){
            return response.status(400).send("Invalid credentials or invalid password");
        }
        let payload ={
            user:{
                id: exist.id
            }
        }
        jwt.sign(payload, 'jwtSecret', {expiresIn:3600000}, (err, token) =>{
            if(err) throw err;
            return response.json({token})
        })
    }catch(error){
        response.status(409).json({message:error.message});
    }
}
