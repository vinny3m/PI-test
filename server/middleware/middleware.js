import jwt from 'jsonwebtoken';

// const middleware = (request, response, next)=>{
//     try{
//         let token= request.header("x-token");
//         if(!token){
//             return response.send(400).send("Token not found");
//         }
//         let decode= jwt.verify(token,"jwtSecret");
//         let payload= {
//             user:{
//                 id: exist.id
//             }
//         }
//         request.user=decode.user
//         next();

         
//     }catch(error){
//         console.log(err);
//         return response.status(500).send("Invalid token or server error");
//     }
// }


const middleware = (request, response, next) => {
    try {
      const token = request.header('x-token');
  
      if (!token) {
        return response.status(401).json({ message: 'Token not found, access denied' });
      }
  
      // Verify the token with the secret key
      jwt.verify(token, 'jwtSecret', (error, decodedToken) => {
        if (error) {
          return response.status(401).json({ message: 'Invalid token, access denied' });
        }
  
        // If the token is valid, extract the user ID from the decoded token and attach it to the request object
        request.user = decodedToken.user;
        next();
      });
    } catch (error) {
      response.status(500).json({ message: 'Server error' });
    }
  };
export default middleware;