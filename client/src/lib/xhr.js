const allowedMethods = [
  'GET',
  'POST',
  'PUT',
  'DELETE',
];

const contentTypes = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json',
};

/**
 * TODO: Doc this.
 * @param {*} ops 
 * @param {*} callBack 
 */

function xhr(ops) {
  const options = ops;

  return new Promise((resolve, reject) => {
    options.method = options.method || 'GET';
    options.contentType = options.contentType || 'json';

    if (allowedMethods.indexOf(options.method) === -1) {
      return reject(new Error('Incorrect http method.'));
    }

    if (!options.url || typeof options.url !== 'string') {
      return reject(new Error('Invalid url'));
    }

    const url = `${vissne.domain}/api/${options.url}`;
    const data = (() => {
      if (options.data) {
        if (options.isFile) {
          return options.data;
        }

        return JSON.stringify(options.data);
      }

      return null;
    })();

    const http = new XMLHttpRequest();
    http.open(options.method, url, true);
    http.setRequestHeader('Content-type', contentTypes[options.contentType]);
    http.send(data);

    http.onreadystatechange = () => {
      if (http.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(http.responseText);
        const { status } = http;

        response.status = http.status;

        switch (status) {
          case 403:
            window.location.href = `${vissne.domain}/auth`;
            break;

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
