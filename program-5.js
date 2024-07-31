// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
const fetchAll = async function (arr) {
  const data = await Promise.all(
    arr.map((url) =>
      fetch(url)
        .then((d) => d.json())
        .catch((err) => err.message)
    )
  );
  return new Promise((res) => res(data));
};

(async function () {
  try {
    const res = await fetchAll([
      'https://catfact.ninja/fact',
      'https://catfact.ninja/fact',
      'https://catfact.ninja/fact',
    ]);

    res.forEach((d) => console.log(d.fact));
  } catch (err) {
    console.log(err.message);
  }
})();
