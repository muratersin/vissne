
const path = require('path');
const { version } = require('../package.json');

const {
  MOVIE_DB_API_KEY,
  NODE_ENV,
  JWTSECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  GOOGLE_SECRET,
  GOOGLE_CLIENT_ID,
} = process.env;

const domain = process.env.DOMAIN;
const cdn = process.env.CDN;
const env = (NODE_ENV || 'development').trim();
const projectDir = path.resolve(__dirname, '../');

const appConfig = {
  domain,
  cdn,
  version,
  env,
  name: 'Vissne',
  path: {
    public: path.join(projectDir, 'public'),
    view: path.join(projectDir, 'app/views'),
    favicon: path.join(projectDir, 'public/favicon.ico'),
    ucontent: path.join(projectDir, 'public/ucontent'),
    tmpUpload: 'public/tmp',
  },
  saltRounds: 10,
  jwtSecret: JWTSECRET,
  corsOptions: {
    origin: (origin, callback) => {
      const whiteList = [
        'http://localhost:3000',
        'https://vissne.herokuapp.com',
        'https://vissne.com',
      ];

      if (whiteList.indexOf(origin) === -1) {
        return callback(new Error('Not allowed by CORS'));
      }

      return callback(null, true);
    },
  },

  facebook: {
    appId: FACEBOOK_APP_ID,
    secret: FACEBOOK_APP_SECRET,
  },

  google: {
    clientId: GOOGLE_CLIENT_ID,
    projectId: 'vissne',
    authUri: 'https://accounts.google.com/o/oauth2/auth',
    tokenUri: 'https://www.googleapis.com/oauth2/v3/token',
    authProvideX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
    clientSecret: GOOGLE_SECRET,
    redirectUri: `${domain}/api/auth/google/callback`,
  },

  image: {
    defaultProfileImagePath: 'images/default-profile.jpg',
    defaultCoverImagePath: 'images/default-cover.png',
  },

  // Config for whic uses all externall api in vissne
  api: {
    moviedb: {
      protocol: 'https',
      url: 'api.themoviedb.org',
      version: 3,
      lang: 'en',
      key: MOVIE_DB_API_KEY,
      images: {
        secure_base_url: 'https://image.tmdb.org/t/p', // TODO: Delete Snake Case
        secureBaseUrl: 'https://image.tmdb.org/t/p',
        backdrop_sizes: [
          'w300',
          'w780',
          'w1280',
          'original',
        ],
        logo_sizes: [
          'w45',
          'w92',
          'w154',
          'w185',
          'w300',
          'w500',
          'original',
        ],
        poster_sizes: [
          'w92',
          'w154',
          'w185',
          'w342',
          'w500',
          'w780',
          'original',
        ],
        profile_sizes: [
          'w45',
          'w185',
          'h632',
          'original',
        ],
        still_sizes: [
          'w92',
          'w185',
          'w300',
          'original',
        ],
      },
      change_keys: [
        'adult',
        'air_date',
        'also_known_as',
        'alternative_titles',
        'biography',
        'birthday',
        'budget',
        'cast',
        'certifications',
        'character_names',
        'created_by',
        'crew',
        'deathday',
        'episode',
        'episode_number',
        'episode_run_time',
        'freebase_id',
        'freebase_mid',
        'general',
        'genres',
        'guest_stars',
        'homepage',
        'images',
        'imdb_id',
        'languages',
        'name',
        'network',
        'origin_country',
        'original_name',
        'original_title',
        'overview',
        'parts',
        'place_of_birth',
        'plot_keywords',
        'production_code',
        'production_companies',
        'production_countries',
        'releases',
        'revenue',
        'runtime',
        'season',
        'season_number',
        'season_regular',
        'spoken_languages',
        'status',
        'tagline',
        'title',
        'translations',
        'tvdb_id',
        'tvrage_id',
        'type',
        'video',
        'videos',
      ],
    },
  },
};

module.exports = appConfig;
