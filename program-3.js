//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const fetchAll = async function (arr, statusFeild) {
  // console.log(arr);
  const data = await Promise.all(arr.map(async (url) => await fetch(url)));

  return new Promise((res, rej) => {
    data.forEach((response) => {
      if (response[statusFeild] != 200) {
        rej(new Error('Error while fetching data'));
      }
    });
    res(data);
  });
};

(async function () {
  try {
    const res = await fetchAll(
      [
        'https://httpstat.us/random/200',
        'https://httpstat.us/random/200',
        'https://httpstat.us/random/400',
      ],
      'status'
    );

    console.log(res);
  } catch (err) {
    console.log(err.message);
  }

  // console.log('data', res);
})();
