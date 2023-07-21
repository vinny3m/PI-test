
import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header= styled(AppBar)`
    background:#111111
`;

const Tabs=styled(NavLink)`
    font-size: 20px;
    margin: 0 3%;
    color:inherit;
    text-decoration:none;
`
const Tab1=styled(NavLink)`
    font-size: 20px;
    margin-left: 45%;
    margin-right: 1%;
    color:inherit;
    text-decoration:none;
`;
const Tab2=styled(NavLink)`
    font-size: 20px;
    margin-left: 1%;
    margin-right: 1%;
    color:inherit;
    text-decoration:none;
`;

const Navbar =() =>{
    return(
       <Header position="static">
            <Toolbar>
                <Tabs to='/'>Dashboard</Tabs>
                <Tabs to='/all'> All users</Tabs>
                <Tabs to='/add'> Add user</Tabs>
                <Tab1 to='/register'>Register</Tab1>
                <Tab2 to='/login'>Login</Tab2>    
            </Toolbar>
       </Header>
    )
}

export default Navbar;