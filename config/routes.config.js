const passport = require('passport');
const multer = require('multer');

const config = require('./app.config');
const controllers = require('../app/controllers');
const {
  paramCheck,
  setCookie,
  responder,
  getCredits,
  getVideos,
  getImages,
  verifyToken,
} = require('../app/middlewares');

const upload = multer({ dest: config.path.tmpUpload });

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
        controllers.auth.socialAuthantication('facebook'),
        controllers.auth.loginWithSocialMedia,
        setCookie,
        responder,
      ],
    },
    '/auth/google/callback': {
      get: [
        controllers.auth.socialAuthantication('google'),
        controllers.auth.loginWithSocialMedia,
        setCookie,
        responder,
      ],
    },
    '/user': {
      '/change-password': {
        put: [
          verifyToken(false),
          controllers.user.changePassword,
        ],
      },
      '/:id': {
        put: [
          verifyToken(false),
          controllers.user.update,
          setCookie,
          responder,
        ],
      },
    },
    '/account': {
      get: [
        verifyToken(false),
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
    '/upload': {
      post: [
        verifyToken(false),
        upload.single('file'),
        controllers.file.imageUpload,
      ],
    },
    '/lists': {
      get: [
        verifyToken(true),
        controllers.lists.get,
      ],
      post: [
        verifyToken(false),
        controllers.lists.create,
      ],
      '/:id': {
        delete: controllers.lists.destroy,
        put: controllers.lists.update,
        '/movie/:movieId': {
          post: [
            verifyToken(false),
            controllers.lists.addToList,
          ],
          delete: [
            verifyToken(false),
            controllers.lists.deleteFromList,
          ],
        },
      },
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
  '/logout': {
    get: controllers.auth.logout,
  },
  '/*': {
    get: controllers.home.index,
  },
};
