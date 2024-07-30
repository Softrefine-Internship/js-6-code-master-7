// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function hi(msg) {
  console.log(msg);
}

const interval = function (callBack, msg) {
  setTimeout(() => callBack(msg), 2000);
};

interval(hi, 'Hello Word');
