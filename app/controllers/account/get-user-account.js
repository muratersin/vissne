
const getCurrentUser = (req, res) => {
  res.status(200).json(req.user);
};

module.exports = getCurrentUser;
