const allowedMethods = [
  'GET',
  'POST',
  'PUT',
  'DELETE',
];

function xhr(ops, callBack) {
  if (!ops.method || allowedMethods.indexOf(ops.method) === -1) {
    return callBack(new Error('Incoreect http method.'));
  }

  if (!ops.url || typeof ops.url !== 'string') {
    return callBack(new Error('Invalid url'));
  }

  const url = `api/${ops.url}`;
  const data = ops.data
    ? JSON.stringify(ops.data)
    : null;

  const http = new XMLHttpRequest();

  http.onreadystatechange = () => {
    if (http.readyState === XMLHttpRequest.DONE) {
      const response = JSON.parse(http.responseText);
      const { status } = http;

      response.status = http.status;

      switch (status) {
        case 403:
          window.location.href = '/login';
          break;

        case 400:
        case 500:
          callBack(response);
          break;

        default:
          callBack(null, response);
          break;
      }
    }
  };

  http.open(ops.method, url, true);
  http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  http.send(data);

  return http;
}

module.exports = xhr;
