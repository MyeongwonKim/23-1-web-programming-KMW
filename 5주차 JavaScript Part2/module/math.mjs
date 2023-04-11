// 1. export
// export function add(x, y) {
//   return x + y;
// }

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

// 2. export default
export default {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
