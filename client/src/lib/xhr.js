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
  return new Promise((resolve, reject) => {
    if (!ops.method || allowedMethods.indexOf(ops.method) === -1) {
      return reject(new Error('Incorrect http method.'));
    }

    if (!ops.url || typeof ops.url !== 'string') {
      return reject(new Error('Invalid url'));
    }

    const url = `api/${ops.url}`;
    const data = ops.data
      ? JSON.stringify(ops.data)
      : null;

    const http = new XMLHttpRequest();
    http.open(ops.method, url, true);
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
