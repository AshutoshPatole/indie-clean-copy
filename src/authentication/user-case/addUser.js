import makeUser from "../entity";

const makeAddUser = (db) => {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo);
        const exists = await db.findByEmail({ email: user.getEmail() })
        console.log(exists)
        if (exists) throw new Error("User exists");
        return db.insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            mobile: user.getMobile(),
            createdAt: user.getCreatedAt(),
            updatedAt: user.getUpdatedAt(),
        })
    }
}
export default makeAddUser;