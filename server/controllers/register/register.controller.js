
function registerController(req, res, next) {
  const form = req.body;
  console.log(form);
  next();
}

module.exports = registerController;
