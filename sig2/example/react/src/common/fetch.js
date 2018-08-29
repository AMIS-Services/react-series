const handleResponse = response => {
  function redirectTo404() {
    window.location.replace("http://localhost:3000/page404/");
  }

  if (!response.ok) {
    redirectTo404();
    window.alert(`ERROR ${response.status}: ${response.statusText}`);
    return undefined;
  }
  return response.json();
};

export const fetch = (path, options = {}) => {
  const url = `http://localhost:3030/${path}`;
  return window
    .fetch(url, options)
    .then(handleResponse)
    .catch(error => window.alert(`Network error: ${error}`));
};
