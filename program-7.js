// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function print() {
  console.log('hi');
}

const repeator = function (functionName, interval) {
  setInterval(functionName, interval * 1000);
};

repeator(print, 1);
