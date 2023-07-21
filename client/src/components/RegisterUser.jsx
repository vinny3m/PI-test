import React,{useState} from 'react'
import { FormControl, FormGroup, InputLabel,Input, Typography, styled, Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import {register} from "../service/api";

const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto;
    & > div{
        margin-top: 20px;
    }
`;

const RegisterUser = () => {
    const navigate = useNavigate();
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = async e => {
        e.preventDefault();
        try {
          await register(data);
          alert('Registration successful!');
          setData({
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
          });
          // Navigate to login page or any other page as needed
          navigate('/login');
        } catch (error) {
          console.log('Error while registering:', error);
        }
      };

    return (
        <Container>
            <Typography variant="h4">Register Admin</Typography>
            <FormControl>
               <InputLabel>Username</InputLabel>
               <Input onChange={(e)=>changeHandler(e)} name="username"/>
            </FormControl>
            <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e)=>changeHandler(e)} name="email"/>
            </FormControl>
            <FormControl>
               <InputLabel>Password</InputLabel>
               <Input onChange={(e)=>changeHandler(e)} name="password" />
            </FormControl>
            <FormControl>
               <InputLabel>Confirm Password</InputLabel>
               <Input onChange={(e)=>changeHandler(e)} name="confirmpassword" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="success" onClick={submitHandler}>Register</Button>
            </FormControl>

        </Container>
    )
}
export default RegisterUser;
