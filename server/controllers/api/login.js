const { createJWToken } = require('../../lib/auth');
const Clinick = require('../../models/clinick.model');

async function signinController(req, res) {
  const { email, password } = req.body;
  req.failedLogin = !!req.dataError;

  const clinick = await Clinick.findOne({ where: { email } });

  clinick.comparePassword(password, (auth) => {
    if (!auth) {
      return res.status(400).json({
        message: 'Invalid email or password.',
      });
    }

    const safeData = clinick.publicParse();

    return res.send({
      clinick: safeData,
      token: createJWToken({
        sessionData: safeData,
        maxAge: 3600,
      }),
    });
  });
}

module.exports = signinController;

/**

router.post('/login', (req, res) =>
{
  let { email, password } = req.body

  db.User.findByEmail(email)
  .then((user) => (!user) ? Promise.reject("User not found.") : user)
  .then((user) => user.comparePassword(password))
  .then((user) => user.publicParse(user))
  .then((user) =>
  {
    res.status(200)
      .json({
        success: true,
        token: createJWToken({
            sessionData: user,
            maxAge: 3600
          })
      })
  })
  .catch((err) =>
  {
    res.status(401)
      .json({
        message: err || "Validation failed. Given email and password aren't matching."
      })
  })
})

export default router
 */
