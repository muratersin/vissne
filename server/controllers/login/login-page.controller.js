const { bundles } = require('../../config/app.config');

/**
 * Controller of login page
 * @param {*} req request object
 * @param {*} res response object
 */

function loginPageController(req, res) {
  res.render('login', {
    title: 'Login',
    jsBundle: bundles.login.js,
    cssBundle: bundles.login.css,
    failed: req.failedLogin,
    user: {},
  });
}

module.exports = loginPageController;
