export const slug = str => str.replace(/ /g, '').toLowerCase();

export const dateFormat = () => {
  const date = new Date(d);

  return `${date.getTime}/${date.get}`
};
