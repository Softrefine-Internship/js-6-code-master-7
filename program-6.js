// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

const forceFetch = async function (url, numberOfAttempt, errorFeild) {
  while (numberOfAttempt > 0) {
    const data = await fetch(url);
    if (data[errorFeild] == 200) {
      return new Promise((res) => res(data));
    }
    numberOfAttempt--;
  }
  return new Error(`Failed to fetch the data`);
};

(async function () {
  try {
    const hittingUrl = await forceFetch(
      'https://httpstat.us/random/200-300',
      2,
      'status'
    );
    console.log(hittingUrl);
  } catch (err) {
    console.error(err.message);
  }
})();
