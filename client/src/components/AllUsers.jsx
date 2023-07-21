import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import react, { useState, useEffect, useContext} from 'react';
import  {getUsers, deleteUser} from "../service/api";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {store} from "../App";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers=() => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [token, setToken]= useContext(store)
    useEffect(() => {
        if (!token) {
          navigate('/login');
        } else {
          getAllUsers();
        }
      }, [token]);
    

    const getAllUsers = async () => {
        let response = await getUsers(token);
        console.log(response.data);
        setUsers(response.data);
    }
    const deleteUserDetails=async (id)=>{
        await deleteUser(id,token);
        getAllUsers();
    }
    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> 
                            {/* component={Link} to={`/edit/${user._id}`} */}
                            <Button color="secondary" variant="contained" onClick={()=>deleteUserDetails(user._id)}>Delete</Button> 
                            {/* onClick={() => deleteUserData(user._id)} */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody> 
           
            <Button color="success" variant="contained" onClick={()=>setToken(null)} style={{marginTop: "60px"}}>Logout </Button> 
            
            
            
        </StyledTable>

    )
}
export default AllUsers;