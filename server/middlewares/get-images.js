const axios = require('axios');
const { generateRouteGetImages } = require('../lib/route-generator');

const getCredits = async (req, res, next) => {
  try {
    const { movieId } = req.params;

    if (!movieId) {
      return res.status(400).json({
        message: 'movieId param is required.',
      });
    }

    const url = generateRouteGetImages(movieId);
    const response = await axios.get(url);

    req.images = response.data;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = getCredits;
