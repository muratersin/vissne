const allowedMethods = [
  'GET',
  'POST',
  'PUT',
  'DELETE',
];

/**
 * TODO: Doc this.
 * @param {*} ops 
 * @param {*} callBack 
 */

function xhr(ops) {
  const options = ops;

  return new Promise((resolve, reject) => {
    options.method = options.method || 'GET';

    if (allowedMethods.indexOf(options.method) === -1) {
      return reject(new Error('Incorrect http method.'));
    }

    if (!options.url || typeof options.url !== 'string') {
      return reject(new Error('Invalid url'));
    }

    const url = `api/${options.url}`;
    const data = options.data
      ? JSON.stringify(options.data)
      : null;

    const http = new XMLHttpRequest();
    http.open(options.method, url, true);
    http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    http.send(data);

    http.onreadystatechange = () => {
      if (http.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(http.responseText);
        const { status } = http;

        response.status = http.status;

        switch (status) {
          case 403:
          case 400:
          case 500:
            reject(response);
            break;

          default:
            resolve(response);
            break;
        }
      }
    };
  });
}

module.exports = xhr;
