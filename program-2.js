// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

const hitHttp = async function (URL, statusFeild) {
  const response = await fetch(URL);

  return new Promise((res, rej) => {
    if (response[statusFeild] != '200')
      rej(new Error('Error while fetching data'));
    else res(response);
  });
};

(async function () {
  try {
    const data = await hitHttp(
      'https://cat-fact.herokuapp.com/facts',
      'status'
    );

    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
})();
