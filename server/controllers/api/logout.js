function logout(req, res) {
  try {
    const maxAge = Date.now();

    res.cookie('jwt', {
      maxAge,
    });

    res.cookie('user_email', {
      maxAge,
    });

    res.cookie('user_full_name', {
      maxAge,
    });

    res.redirect('/');
  } catch ({ message }) {
    res.status(400).json({ message });
  }
}

module.exports = logout;
