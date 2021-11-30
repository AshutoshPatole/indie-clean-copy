import { Router } from "express";
import addSeller from "./controller";
import makeCallBack from "./helper";

const authRoute = Router();


authRoute.get('/', (req, res) => {
    return res.send('hello auth')
})

authRoute.post('/user', makeCallBack(addSeller));

export default authRoute;