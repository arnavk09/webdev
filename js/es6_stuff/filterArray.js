arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(value) {
  return value % 2 === 0;
}
var another = arr.filter(isEven);
console.log(another);