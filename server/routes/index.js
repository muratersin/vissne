const passport = require('passport');

const controllers = require('../controllers');
const {
  paramCheck,
  setCookie,
  responder,
  getCredits,
  getVideos,
  getImages,
  verifyToken,
} = require('../middlewares');

module.exports = {
  '/api': {
    '/login': {
      post: [
        paramCheck('login'),
        controllers.auth.login,
        setCookie,
        responder,
      ],
    },
    '/register': {
      post: [
        paramCheck('register'),
        controllers.auth.register,
        setCookie,
        responder,
      ],
    },
    '/auth/facebook/callback': {
      get: [
        passport.authenticate('facebook', {
          session: false,
          failureRedirect: '/login',
        }),
        controllers.auth.loginWithSocialMedia,
        setCookie,
        responder,
      ],
    },
    '/auth/google/callback': {
      get: [
        passport.authenticate('google', {
          session: false,
          failureRedirect: '/login',
        }),
        controllers.auth.loginWithSocialMedia,
        setCookie,
        responder,
      ],
    },
    '/account': {
      get: [
        verifyToken,
        controllers.account.getUserAccount,
      ],
    },
    '/movie/:movieId': {
      get: [
        getCredits,
        getVideos,
        getImages,
        controllers.movie.getById,
      ],
    },
    '/discover': {
      get: controllers.movie.discover,
    },
    '/genre': {
      get: controllers.movie.genre,
    },
  },
  '/auth/google': {
    get: passport.authenticate('google', {
      scope: [
        'profile',
        'email',
      ],
    }),
  },
  '/auth/facebook': {
    get: passport.authenticate('facebook'),
  },
  '/*': {
    get: controllers.home.index,
  },
};
