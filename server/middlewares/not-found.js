const notFound = (req, res) => res.render('404.html', {
  title: '404 Not Found',
});

module.exports = notFound;
