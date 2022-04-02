// let testObj = {
//   hat: "ballcap",
//   shirt: "jersey",
//   shoes: "cleats",
// };
// let foods = {
//   "an entree": "hamburger",
//   "a side": "veggies",
//   "a drink": "soda",
// };
// let hatValue=testObj.hat;
// let shirtValue=testObj.shirt;
// console.log(hatValue);
// console.log(shirtValue);

// let entree = foods["an entree"];
// let side = foods["a side"];
// console.log(entree);
// console.log(side);

//rest parameters:

var sum = (...args) => {
  return args.reduce((previous, current) => {
    return previous + current;
  });
};
console.log("Ans : "+sum(1,2,3));
console.log("Ans : "+sum(2,2));