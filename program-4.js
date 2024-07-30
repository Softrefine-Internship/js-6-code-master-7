// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

const hitHttp = async function (URL, statusValidator) {
  const response = await fetch(URL);

  return new Promise((res, rej) => {
    if (response[statusValidator] != '200')
      rej(new Error('Error while fetching data'));

    res(response);
  });
};

(async function () {
  try {
    const d1 = await hitHttp('https://httpstat.us/random/200', 'status');
    console.log(d1);
    const d2 = await hitHttp('https://httpstat.us/random/200', 'status');
    console.log(d2);
    const d3 = await hitHttp('https://httpstat.us/random/200', 'status');
    console.log(d3);
    const d4 = await hitHttp('https://httpstat.us/random/400', 'status');
    console.log(d4);
  } catch (err) {
    console.error(err.message);
  }
})();
