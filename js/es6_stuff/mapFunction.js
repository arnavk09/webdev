// const products = [
//   {
//     name: "laptop",
//     price: "1000",
//     count: 5,
//   },
//   {
//     name: "desktop",
//     price: "1500",
//     count: 2,
//   },
//   {
//     name: "phone",
//     price: "500",
//     count: 15,
//   },
// ];


var objArray=[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 46
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
// const out=objArray.map((objArray)=>{
//     if (objArray.age>18) {
//         console.log(objArray.name +" is " +"okie");
//     }else{
//         console.log(objArray.name +" is " +"not okie");
//     }
// })
// const prodval = products.map((item) => ({
//   name: item.name,
//   totalValue: item.price * item.count,
// }));
// console.log(prodval);

//multiply each element by 2



var double=(value,index,arr)=>{
    return value*2
}
nums=[2,4,6,8,10,12]
const newarr=nums.map(double)

console.log(newarr);