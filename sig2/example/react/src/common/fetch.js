const handleResponse = response => {
  if (!response.ok) {
    window.alert(`ERROR ${response.status}: ${response.statusText}`);
    return undefined;
  }
  return response.json();
};

export const fetch = path => {
  const url = `http://localhost:3030/${path}`;
  return window
    .fetch(url)
    .then(handleResponse)
    .catch(error => window.alert(`Network error: ${error}`));
};
