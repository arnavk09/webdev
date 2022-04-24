// let letterArray = ["a", "a", "b", "c", "d", "d", "e"];
// console.log(letterArray);
// let count = {};

// letterArray.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });
// console.log(count);

let groceryStore = ["apple", "banana", "orange", "chicken"];
let uprcs = {};
groceryStore.forEach((item) => {
  uprcs[item] = item.toUpperCase();
});
console.log(uprcs);
