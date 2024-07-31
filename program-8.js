// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

const timeout = (sec) =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('request took to long')), sec * 1000)
  );

const call = async (url) => await fetch(url).then((res) => res.json());

const timeConstrainCall = async (url, waitingTime) =>
  Promise.race([call(url), timeout(waitingTime)]);

(async function () {
  try {
    const res = await timeConstrainCall('https://catfact.ninja/fact', 0.1);
    console.log(res.fact);
  } catch (err) {
    console.error(err.message);
  }
})();
