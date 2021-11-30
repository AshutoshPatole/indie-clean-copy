import Id from "../../modules/helpers/id";

const makeUserDb = (db) => {
    const findById = async ({ id: _id }) => {
        const result = await db.findById({ _id });
        return result;
    }
    const insert = async ({ id: _id = Id.makeId(), ...userInfo }) => {
        const user = db(userInfo);
        const result = await user.save();
        return result;
    }
    const findByEmail = async ({ email: email }) => {
        try {
            const result = await db.find({ email: email });
            return result.length === 0 ? null : result[0];
        }
        catch (e) {
            throw new Error(e.message);
        }
    }

    return Object.freeze({
        findById,
        insert,
        findByEmail,
    });

}

export default makeUserDb;