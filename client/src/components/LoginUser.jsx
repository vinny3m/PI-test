import React,{useState, useContext} from 'react';
import { FormControl, FormGroup, InputLabel,Input, Typography, styled, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {login} from "../service/api"
import {store} from "../App"


const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto;
    & > div{
        margin-top: 20px;
    }
`;

const LoginUser = () => {
    const [token, setToken]= useContext(store);
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
          const res = await login(data);
          setToken(res.data.token);
        } catch (error) {
          console.log('Error while logging in:', error);
        }
    };
    

    if(token){
        navigate("/");
    }

    return (
        <Container>
            <Typography variant="h4">Login Admin</Typography>
            <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>changeHandler(e)} name="email"/>
            </FormControl>
            <FormControl>
            <InputLabel>Password</InputLabel>
            <Input onChange={(e)=>changeHandler(e)} name="password" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="success" onClick={submitHandler}>Login</Button>
            </FormControl>
        </Container>
    )
}
export default LoginUser;
