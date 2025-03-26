const { logger } = require('../../helpers/logger');
const { Users } = require('../../models/Users');

const signinSequelizer = async ({ where }) => {
    try {
        console.log(where);
        const user = await Users.findOne(where);
        console.log(user);
        if (!user) {
            logger.error('User not found');
            return { status: 404, message: 'User not found', data: {} };
        }
        logger.info('User found');
        return { status: 200, message: 'User found', data: user };
    } catch (err) {
        logger.error('Error during sign-in', err);
        return { status: 500, message: 'Internal server error', err: err.message };
    }
};

module.exports = { signinSequelizer };

