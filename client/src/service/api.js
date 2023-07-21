import axios from 'axios';

const URL='http://192.168.29.224:8000';
export const addUser= async (data,token) =>{
    try{
        return await axios.post(`${URL}/add`, data, {
            headers: {
              'x-token': token
            }
          });
    }
    catch(error){
        console.log("error while calling add User API", error);
    }
}
export const register= async (data) =>{
    try{
        return await axios.post(`${URL}/register`, data);
    }
    catch(error){
        console.log("error while calling add register", error);
    }
}
export const login = async (data) => {
    try {
      return await axios.post(`${URL}/login`, data);
    } catch (error) {
      console.log('Error while calling login API', error);
      //throw error; // Optional: rethrow the error to handle it in the LoginUser component
    }
};
export const getUsers= async (token)=>{
    try{
        return await axios.get(`${URL}/all`, {
            headers:{
                'x-token': token
            }
        });
    }catch(error){
        console.log("error while calling getUsers API", error)
    }
}

export const getUser=async (id, token) =>{
    try{
        return await axios.get(`${URL}/${id}`, {
            headers:{
                'x-token': token
            }
        });
    }catch(error){
        console.log("error while calling user data for the given id", error)
    }
}
export const editUser=async (user,id, token) =>{
    try{
        return await axios.put(`${URL}/${id}`, user,  {
            headers: {
              'x-token': token
            }
          });
    }catch(error){
        console.log("error while calling edit user api", error)
    }
}

export const deleteUser=async (id, token) =>{
    try{
        return await axios.delete(`${URL}/${id}`, {
            headers:{
                'x-token': token
            }
        })
    }catch(error){
        console.log("error while calling delete API",error)
    }
}