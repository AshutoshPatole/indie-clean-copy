import crypto from 'crypto';
import Id from '../../modules/helpers/id';
import buildUser from './user';

const makeUser = buildUser({ Id, hash });

function hash(text) {
    return crypto
        .createHash('RSA-SHA1')
        .update(text, 'utf-8')
        .digest('hex')
}

export default makeUser;

