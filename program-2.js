// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

const hitHttp = (URL) => fetch(URL).then((res) => res.json());

hitHttp('https://catfact.ninja/fact')
  .then((data) => console.log(data.fact))
  .catch((err) => console.error(err.message + ' ' + err));
