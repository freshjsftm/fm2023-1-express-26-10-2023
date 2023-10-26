const User = require("../models/User");


module.exports.create = async (req, res) => {
  try {
    const user = await new User(req.body);

    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports.update = async (req, res) => {
  try {
    const user = req.body;
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
