import express from "express";
import middleware from "../middleware/middleware.js"
import {addUser, getUsers, getUser, editUser, deleteUser, myProfile} from "../controller/user-controller.js"
import {registeruser, loginuser} from "../controller/register-controller.js"
const router=express.Router();
router.post('/register', registeruser);
router.post('/login', loginuser );

router.use(middleware);

router.post('/add',  addUser );
router.get('/all',  getUsers );
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

router.post("/profile",middleware,myProfile)

export default router;
