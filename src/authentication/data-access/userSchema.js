import mongo from 'mongoose';

const UserSchema = new mongo.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    emailVerified: {
        type: Boolean
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
    },
    avatarUrl: {
        type: String,
    },
    addresses: {
        type: Array
    },
    refreshToken: {
        type: String
    },
    shops: {
        type: Array,
    }
});

const User = mongo.model('seller', UserSchema);

export default User;