

function paramCheck(fields) {
  return (req, res, next) => {
    req.dataError = null;
    const { body } = req;

    for (let i = 0; i <= fields.length; i += 1) {
      const field = fields[i];

      if (!body[field]) {
        req.dataError = req.dataError || {};
        req.dataError[field] = {
          message: `${fields} is can't be empty.`,
        };
      }
    }

    return next();
  };
}

module.exports = paramCheck;
