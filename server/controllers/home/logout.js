const logout = (req, res) => {
  res.clearCookie('jwt');
  res.clearCookie('user_id');
  res.clearCookie('user_email');
  res.clearCookie('user_full_name');
  res.redirect('/');
};

module.exports = logout;
