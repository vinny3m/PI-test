import { useState, useEffect, useContext } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import {getUser, editUser} from "../service/api"
import {store} from "../App";

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(defaultValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();
   
    
    const [token, setToken]= useContext(store);
    useEffect(() => {
        if (!token) {
          navigate('/login');
        }else{
            loadUserDetails();
        }
      }, [token]);
    

    
    const loadUserDetails = async() => {
        const response = await getUser(id, token);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(user, id, token);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={()=>editUserDetails()}>Edit User</Button>
            </FormControl>
            <Button color="success" variant="contained" onClick={()=>setToken(null)} style={{marginTop: "60px"}}>Logout </Button>
        </Container>
    )
}

export default EditUser;