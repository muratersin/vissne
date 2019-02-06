const config = require('../../../config/app.config');

const getFile = (req, res) => {
  const filePath = req.params;
  res.sendFile(filePath);
};

module.exports = getFile;
