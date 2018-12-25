const { createJWToken } = require('../../lib/auth');
const User = require('../../models/user.model');

async function signinController(req, res) {
  const { email, password } = req.body;
  const authError = {
    message: 'Invalid email or password.',
  };

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json(authError);
  }

  return user.comparePassword(password, (auth) => {
    if (!auth) {
      return res.status(400).json(authError);
    }

    const safeData = user.publicParse();
    const token = createJWToken({
      sessionData: safeData,
      maxAge: 3600,
    });

    res.cookie('jwt', token, {
      maxAge: 900000,
      httpOnly: true,
    });

    res.cookie('user_email', safeData.email, {
      maxAge: 900000,
    });

    res.cookie('user_first_name', safeData.firstName, {
      maxAge: 900000,
    });

    res.cookie('user_last_name', safeData.lastName, {
      maxAge: 900000,
    });

    return res.send({
      user: safeData,
      success: true,
    });
  });
}

module.exports = signinController;

// TODO: Add doc.
