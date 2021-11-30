import makeUser from "../entity";

const makeAddUser = ({ db }) => {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo);
        const exists = await db.findbyEmail({ email: user.getEmail() })
        if (exists) return new Error("User exists");
        return db.insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            mobile: user.getMobile(),
            createdAt: user.createdAt(),
            updatedAt: user.updatedAt(),

        })
    }
}
export default makeAddUser;