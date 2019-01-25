const config = {
  name: 'Account',
  rest: true,
  path: [{
    url: '/account',
    method: 'get',
    controllers: 'getAccountDetail',
  }, {
    url: '/account',
    method: ''
  }],
};

module.exports = config;
