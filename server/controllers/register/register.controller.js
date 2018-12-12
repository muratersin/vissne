const bcrypt = require('bcrypt');
const Clinick = require('../../models/clinick.model');
const { saltRounds } = require('../../config/app.config');

async function registerController(req, res, next) {
  try {
    const clinick = req.body;

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(clinick.password, salt);

    clinick.password = hash;

    const result = await Clinick.create(clinick);
    res.send(result);
  } catch (err) {
    req.registerError = err;
    next(err);
  }
}

module.exports = registerController;
