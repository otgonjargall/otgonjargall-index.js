// // let n = 5;
// // for (let i = 1; i <= 11; i++) {
// //   console.log(n, "*", i, "=", n * i);
// // }

// // let String = "Hello";
// // {
// //   console.log(String);
// // }
// // //string="hello";
// // //1. console.log each char
// // //h, e, l, l,o
// // // let string = "hello"
// // // for (let i = 0; i < string.length; i++){
// // //   console.log(string[i])
// // // }
// // // 2.reverse console log
// // // o, l,l,e,h
// // // let string = "hello";
// // // for (let i = string.length - 1; i >= 0; i--){
// // //   console.log(string[i])
// // // }
// // //3.olleh
// // // let string = "hello";
// // // let reversed = "";
// // // for (let i = string.length - 1; i >= 0; i--) {
// // //   reversed = reversed + string[i];
// // // }
// // // console.log(reversed);
// // // 1."hello world"
// // // let string = "Hello";
// // // let stringOne = "World";
// // // console.log(string + " " +stringOne);

// // 2.reversed => "olleH dlroW"
// let string = "hello World";
// let reversed = "";
// for (let i = string.length - 1; i >= 0; i--) {
//   reversed = reversed + string[i];
// }
// console.log(reversed);
// // //3.2to4 index switch value
// // //output"Heoll","Wodlr"
let temp = 0;
let string = 0;
let result = "";

for (let i = 0; i < string.length; i++) {
  if (i === 2) {
    temp = string[2];
    result += string[4];
  } else if (i === 4) {
    result += temp;
  } else {
    result += string[i];
  }
}
console.log(result);
