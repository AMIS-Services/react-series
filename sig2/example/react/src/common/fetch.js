export function fetch(url, options) {
  const opts = {
    ...options,
    headers: {
      accept: 'application/json',
    },
  };

  if (options && options.headers) {
    opts.headers = { ...opts.headers, ...options.headers };
  }

  function handleResponseError(response) {
    if (!response.ok) {
      return response.text().then((txt) => {
        throw new Error(
          `Error getting response! Status: ${response.status} - ${response.statusText}, bodytext: ${txt}`);
      });
    }
    return response;
  }

  function handleNetWorkError(error) {
    throw new Error(`Network issue occured. Error: ${error}`);
  }

  return window
    .fetch(url, opts)
    .then(handleResponseError)
    .catch(handleNetWorkError);
}

export function fetchApi(path, options) {
  const url = `http://127.0.0.1:3030/${path}`;
  return fetch(url, options);
}

export function fetchAsJson(path, options) {
  return fetchApi(path, options)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}