// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
const fetchAll = async function (arr) {
  const data = await Promise.all(arr.map((url) => fetch(url)));

  return new Promise((res) => res(data));
};

(async function () {
  try {
    const res = await fetchAll([
      'https://httpstat.us/200',
      'https://httpstat.us/200',
      'https://httpstat.us/400', // testing
      'https://httpstat.us/200',
      'https://httpstat.us/400',
    ]);

    console.log(res);
  } catch (err) {
    console.log(err.message);
  }

  // console.log('data', res);
})();
