export function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
}
export function trimObj(obj) {
  Object.keys(obj).forEach((k) => {
    if (typeof obj[k] === 'string') obj[k] = obj[k].trim();
  });
  return obj;
}
