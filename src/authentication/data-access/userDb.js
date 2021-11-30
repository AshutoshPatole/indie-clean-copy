import Id from "../../modules/helpers/id";

const makeUserDb = ({ db }) => {
    const findById = async ({ id: _id }) => {
        const result = await db.findById({ _id });
        return result;
    }

    const insert = async ({ id: _id = Id.makeId(), ...userInfo }) => {
        const result = await db.insertOne({ _id, ...userInfo });
        const { _id: id, ...insertedInfo } = result.ops[0];
        return { id, ...insertedInfo };
    }
    const findByemail = async ({ email: email }) => {
        const result = await db.find({ email: email });
        return result;
    }

    return Object.freeze({
        findById,
        insert,
        findByemail,
    });

}

export default makeUserDb;