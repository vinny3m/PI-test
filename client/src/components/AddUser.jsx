import { FormControl, FormGroup, InputLabel,Input, Typography, styled, Button } from "@mui/material";
import {addUser} from "../service/api"
import {useState, useContext, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {store} from "../App";

const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto;
    & > div{
        margin-top: 20px;

    }

`;

const defaultValue={
    name:"",
    email:"",
    username:"",
    phone:""
}

const AddUser=() =>{
    const [user,setUser]=useState(defaultValue);

    const navigate=useNavigate();
    
    const [token, setToken]= useContext(store);
    useEffect(() => {
        if (!token) {
          navigate('/login');
        }
      }, [token]);
    

    const onValueChange=(e)=>{
        console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
    }

    const addUserDetails=async () =>{
        await addUser(user, token);
        navigate('/all');
    }

    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
               <InputLabel>Username</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
               <InputLabel>Phone Number</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
            <Button color="success" variant="contained" onClick={()=>setToken(null)} style={{marginTop: "60px"}}>Logout </Button> 

        </Container>
    )
}
export default AddUser;
//Functional component so that I can use hooks in future which are predefined functions
