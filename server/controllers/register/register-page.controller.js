const { bundles } = require('../../config/app.config');

function registerPageController(req, res) {
  res.render('register', {
    title: 'Register',
    jsBundle: bundles.register.js,
    cssBundle: bundles.register.css,
    formError: req.formError || {},
  });
}

module.exports = registerPageController;
