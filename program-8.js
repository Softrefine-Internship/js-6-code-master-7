// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

const timeConstrainCall = async function (url, statusValidator, waitingTime) {
  const timer = setTimeout(() => {
    throw new Error(`can't fetch in given time constrain`);
  }, waitingTime * 1000);

  const data = await fetch(url); // Hitting API

  return new Promise((res, rej) => {
    clearTimeout(timer); // cancle TImer
    if (data[statusValidator] != 200)
      rej(new Error(`Failed to fetch`)); // Checking constrains
    else res(data);
  });
};

(async function () {
  try {
    const res = await timeConstrainCall(
      'https://httpstat.us/200?sleep=6000',
      // 'https://httpstat.us/400?sleep=2000', // TEst Data
      'status', // Feild name
      3
      // 5 // test Data
    );
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
})();
