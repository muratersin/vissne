const doc = document;

const set = (name, value) => {
  doc.cookie = `${name}=${value}`;
};

const get = (name) => {
  const cookies = doc.cookie.split(';');

  for (let i = 0; i < cookies.length; i += 1) {
    const [cname, cvalue] = cookies[i].split('=');
    if (cname.trim() === name.trim()) {
      return cvalue;
    }
  }

  return undefined;
};

module.exports = {
  get,
  set,
};
