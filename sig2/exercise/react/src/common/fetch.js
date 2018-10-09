export const fetch = (path, options) => {
  const url = "http://localhost:3030/" + path;
  return window.fetch(url, options).then(response => response.json());
};
