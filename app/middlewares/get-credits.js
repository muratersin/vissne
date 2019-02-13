const axios = require('axios');
const { generateRouteGetCredits } = require('../../lib/route-generator');
const appConfig = require('../../config/app.config');

const getCredits = async (req, res, next) => {
  const { movieId } = req.params;

  if (!movieId) {
    return res.status(400).json({
      message: 'movieId param is required.',
    });
  }

  try {
    const url = generateRouteGetCredits(movieId);
    const response = await axios.get(url);
    const { secureBaseUrl } = appConfig.api.moviedb.images;

    req.credits = response.data;
    req.credits.cast = req.credits.cast.map((cast) => {
      const profilePath = cast.profile_path
        ? `${secureBaseUrl}/w185${cast.profile_path}`
        : `${appConfig.domain}/${appConfig.image.defaultProfileImagePath}`;

      return {
        profilePath,
        id: cast.cast_id,
        name: cast.name,
        character: cast.character,
      };
    });
    return next();
  } catch (err) {
    next(err);
  }
};

module.exports = getCredits;
