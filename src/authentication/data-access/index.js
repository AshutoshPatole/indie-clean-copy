import makeUserDb from "./userDb";
import User from "./userSchema";

const userDb = makeUserDb(User);

export default userDb;