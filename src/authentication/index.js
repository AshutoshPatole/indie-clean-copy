import { Router } from "express";

const authRoute = Router();


authRoute.get('/', (req, res)=>{
    return res.send('hello auth')
})

export default authRoute;