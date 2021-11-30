const buildUser = ({ Id, hash }) => {
    return function makeUser({
        name,
        email,
        emailVerified = false,
        id = Id.makeId(),
        password,
        mobile,
        /* avatarUrl,
        address,
        refToken,
        shops, */
        createdAt = Date.now(),
        updatedAt = Date.now(),
    } = {}) {
        const mobileRegEx = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

        if (!Id.isValidId(id)) throw new Error("User must have a valid id");
        if (!name) throw new Error("User must have a name");
        if (!email) throw new Error("User must have an email");
        if (!password || password.length < 6) throw new Error("Password should be atleast 6 characters long");
        if (!mobile) throw new Error("User must have a mobile number");
        if (!mobileRegEx.test(mobile)) throw new Error("Mobile number should be valid")
        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getEmail: () => email,
            getPassword: () => hashPassword(),
            getMobile: () => mobile,
            getCreatedAt: () => createdAt,
            getUpdateAt: () => updatedAt,
            markEmailVerified: () => {
                emailVerified = true;
            },
            markEmailNotVerified: () => {
                emailVerified = false;
            }
        });
        function hashPassword() {
            return hash(password + email + id);
        }
    }
}


export default buildUser;