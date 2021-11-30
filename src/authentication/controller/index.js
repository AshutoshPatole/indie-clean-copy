import { addUser } from "../user-case";
import addSellerUser from "./addSeller";

const sellerAuth = addSellerUser({ addUser });

export { sellerAuth };