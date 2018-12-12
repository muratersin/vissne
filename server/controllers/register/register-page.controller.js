const { bundles } = require('../../config/app.config');

function registerPageController(req, res) {
  res.render('register', {
    title: 'Register',
    jsBundle: bundles.site.js,
    cssBundle: bundles.site.css,
    formError: req.formError || {},
  });
}

module.exports = registerPageController;
