const config = require('../../config/app.config');

// const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];

const image = (req, res) => {
  const { file } = req;
  res.status(200)
    .json({
      fileName: file.filename,
      orginalName: file.originalname,
      tempPath: `${config.path.tmpUpload}/${file.filename}`,
    });
};

module.exports = image;

// TODO: Add mimeType and size validation
