import { addUser } from "../user-case";
import addSellerUser from "./addSeller";

const addSeller = addSellerUser({ addUser });

export default addSeller;