const request = require('request');
const { generateRouteGetCredits } = require('../lib/route-generator');
const appConfig = require('../config/app.config');

const getCredits = (req, res, next) => {
  const { movieId } = req.params;

  if (!movieId) {
    return res.status(400).json({
      message: 'movieId param is required.',
    });
  }

  const url = generateRouteGetCredits(movieId);

  return request(url, { json: true }, (error, response) => {
    if (error) {
      return next(error);
    }

    const { secureBaseUrl } = appConfig.api.moviedb.images;

    req.credits = response.body;
    req.credits.cast = req.credits.cast.map((cast) => {
      const profilePath = cast.profile_path
        ? `${secureBaseUrl}/w45${cast.profile_path}`
        : `${appConfig.domain}/${appConfig.image.defaultProfileImagePath}`;

      return {
        profilePath,
        id: cast.cast_id,
        name: cast.name,
        character: cast.character,
      };
    });
    return next();
  });
};

module.exports = getCredits;
