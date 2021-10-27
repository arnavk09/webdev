"use strict";
// var mass1, height1, mass2, height2;
// mass1 = 78;
// mass2 = 92;
// height1 = 1.69;
// height2 = 1.95;
// var BMI1 = mass1 / (height1 * height1);
// var BMI2 = mass2 / (height2 * height2);

// // console.log(`BMI1 : ${BMI1}`);
// // console.log(`BMI2 : ${BMI2}`);

// if (BMI1 > BMI2) {
//   console.log("BMI1>BMI2");
// } else if (BMI1 < BMI2) {
//   console.log("BMI1<BMI2");
// }
// calcAge = (age) => {
//   return 2021 - age;
// };
//functions practice
var BMICalculator = () => {
  var mass1, height1, mass2, height2;
  mass1 = 78;
  mass2 = 92;
  height1 = 1.69;
  height2 = 1.95;
  var BMI1 = mass1 / (height1 * height1);
  var BMI2 = mass2 / (height2 * height2);
  console.log(BMI1);
  console.log(BMI2);
  if (BMI1 > BMI2) {
    console.log("BMI1>BMI2");
  } else {
    console.log("BMI1<BMI2");
  }
};
BMICalculator();

//object + array practice
const Arnav = {
  FirstName: "Arnav",
  LastName: "Katgeri",
  age: 19,
  job: "student",
  friends: ["A", "B", "C", "D"],
};
Arnav.location = "Pune";
Arnav["github"] = "arnavk09";
console.log(Arnav);

const nameKey = "Name";
console.log(Arnav["First" + nameKey]);
console.log(Arnav["Last" + nameKey]);

console.log(Arnav.friends); //DOT notation
console.log(Arnav["github"]); //BRACKET notation

if (Arnav.friends.length >= 3) {
  console.log(`You have quite a few friends, that is ${Arnav.friends.length}`);
} else {
  console.log(
    `Make some more lmao, all you have are ${Arnav.friends.length} friends`
  );
}
// console.log(
//   `Arnav has ${Arnav.friends.length} friends and his best friend is ${Arnav.friends[0]}. His GitHub Link is ${Arnav["github"]} and he lives in ${Arnav.location}`
// );
alert(
  `${Arnav["FirstName"]} has ${Arnav.friends.length} friends and his best friend is ${Arnav.friends[0]}. His GitHub Link is ${Arnav["github"]} and he lives in ${Arnav.location}`
);
