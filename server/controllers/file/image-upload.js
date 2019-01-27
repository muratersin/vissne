
const image = (req, res) => {
  const host = req.get('host');
  const { file, protocol } = req;

  res.status(200)
    .json({
      fileName: file.filename,
      orginalName: file.originalname,
      tempPath: `${protocol}://${host}/static/tmp/${file.filename}`,
    });
};

module.exports = image;

// TODO: Add mimeType and size validation
