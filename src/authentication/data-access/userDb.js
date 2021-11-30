import Id from "../../modules/helpers/id";
import User from "./userSchema";

const makeUserDb = (db) => {
    console.log(db)
    const findById = async ({ id: _id }) => {
        const result = await db.findById({ _id });
        return result;
    }

    const insert = async ({ id: _id = Id.makeId(), ...userInfo }) => {
        /* const result = await db.insertOne({ _id, ...userInfo });
        const { _id: id, ...insertedInfo } = result.ops[0];
        return { id, ...insertedInfo }; */
        const user = User(userInfo);
        console.log(user);
        const result = await user.save();
        console.log(result);
        return result;
    }
    const findByEmail = async ({ email: email }) => {
        console.log(email);
        const result = await db.find({ email: email }); // ! TODO : Fix response hang here
        console.log(result)
        return result;
    }

    return Object.freeze({
        findById,
        insert,
        findByEmail,
    });

}

export default makeUserDb;