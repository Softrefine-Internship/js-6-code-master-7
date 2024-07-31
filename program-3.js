//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

const fetchAll = (arr) =>
  Promise.all(
    arr.map((url) =>
      fetch(url)
        .then((res) => res.json())
        .catch((err) => console.error(err.message))
    )
  );

fetchAll(['https://catfact.ninja/fact', 'https://catfact.ninja/fact'])
  .then((data) => data.forEach((res) => console.log(res.fact)))
  .catch((err) => console.error(err.message));
