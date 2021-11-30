import { Router } from "express";
import { sellerAuth } from "./controller";
import makeCallBack from "./helper";

const authRoute = Router();


authRoute.get('/', (req, res) => {
    return res.send('hello auth')
})

authRoute.post('/', makeCallBack(sellerAuth));

export default authRoute;