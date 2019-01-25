const { image } = require('../../config/app.config');

const index = (req, res) => {
  res.render('index.html', {
    image,
    title: 'Vissne',
  });
};

module.exports = index;
