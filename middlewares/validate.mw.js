const { schemaUser } = require('../utils/validation');

module.exports = async (req, res, next) => {
  try {
    req.body = await schemaUser.validate(req.body);
    next();
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};