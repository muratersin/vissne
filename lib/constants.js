module.exports.DETAIL_QUERY_TYPES = [
  {
    name: 'Accoun States',
    key: 'account_states',
  },
  {
    name: 'Alternative Titles',
    key: 'alternative_titles',
  },
  {
    name: 'Changes',
    key: 'changes',
  },
  {
    name: 'Credits',
    key: 'credits',
  },
  {
    name: 'External Ids',
    key: 'external_ids',
  },
  {
    name: 'Images',
    key: 'images',
  },
  {
    name: 'Keywords',
    key: 'keywords',
  },
  {
    name: 'Release Dates',
    key: 'release_dates',
  },
  {
    name: 'Vides',
    key: 'videos',
  },
  {
    name: 'Recommendations',
    key: 'recommendations',
  },
  {
    name: 'Similar Movies',
    key: 'similar',
  },
  {
    name: 'Rating',
    key: 'rating',
  },
];

module.exports.QUERY_TYPES = [
  {
    name: 'Latest Movies',
    key: 'latest',
  },
  {
    name: 'Now Playing',
    key: 'now_playing',
  },
  {
    name: 'Popular',
    key: 'popular',
  },
  {
    name: 'Top Rated',
    key: 'top_rated',
  },
  {
    name: 'Upcoming',
    key: 'upcoming',
  },
];

module.exports.PARAM_CHECK_TYPES = {
  login: [
    'email',
    'password',
  ],
  register: [
    'email',
    'password',
    'confirmPassword',
    'firstName',
    'lastName',
  ],
};
