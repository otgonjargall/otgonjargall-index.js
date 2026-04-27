// // function text(a, b) {
// //   console.log([a + b]);
// //   console.log([a - b]);
// //   console.log([a / b]);
// //   console.log([a * b]);
// // }
// // text(10, 20);

// // + - / *

// let name = prompt("Ta neree oruulna uu");

// console.log(name);

// let nas = prompt(`${name} ta nasaa oruulna uu`);

// console.log(nas);

// function add(a, b) {
//   console.log(Number(a) + Number(b));
// }

// let op = prompt(
//   "ta ymar uildel hiimeer bn. etc (+,-,*,/) hiij bolno. \na. +\ nb. -\ nc. * \nd. /",
// );

// if (op === "+") {
// }
// let a = prompt(`${name} ta a toog oruulna uu`);
// let b = prompt(`${name} ta b toog oruulna uu`);

// add(a, b);

function usegSolih(haihUseg, solihUseg, ug) {
  let string = "";

  let usegOrsn = false;

  for (let i = 0; i < ug.length; i++) {
    if (ug[i] === haihUseg && !usegOrsn) {
      string += solihUseg;

      usegOrsn = true;
    } else {
      string += ug[i];
    }
  }

  console.log(string);
}

usegSolih("e", "a", "otgonjargal");
// let message = document.getElementById("greeting");
// message.textContent = "сайн байна уу, сурагчаа!";
// let hairtsag = document.getElementById("box");
let order = document.getElementById("amttan");
function accept() {
  order.innerHTML = " <p>Таны чихэр захиалгыг хүлээн авлаа</p";
}
function reject() {
  order.innerHTML = " <p>Таны бялуу захиалгыг хүлээн авлаа</p";
}
function reset() {
  order.innerHTML = " <p>Таны зайрмаг захиалгыг хүлээн авлаа</p";
}
