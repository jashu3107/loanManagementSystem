const { logger } = require('../../helpers/logger');
const { signinSequelizer } = require('../../sequelizeController/userSequelizer/signinSequelizer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');

const signinController = async (req, res) => {
  const { email, password } = req.body;
  const loggerPrefix = "Sign-in Controller: ";
  try {
    logger.info(`${loggerPrefix}Sign-in request received`);
    const result = await signinSequelizer({where: { email: email } } );

    if (result.status !== 200) {
      return res.status(result.status).send({ message: result.message, data: result.data });
    }

    const user = result.data;
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.error(`${loggerPrefix}Invalid password`);
      return res.status(400).send({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.user_id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    logger.info(`${loggerPrefix}Sign-in response sent`);
    return res.header(token).status(200).send({ message: 'User signed in successfully', data: { user } });
  } catch (err) {
    logger.error(`${loggerPrefix} Error during sign-in ${err.message}`);
    return res.status(500).send({ message: 'Internal server error', err: err.message });
  }
};

module.exports = { signinController };