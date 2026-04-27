// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = 1; j <= 4 - i; j++) {
//     line = line + " ";
//   }
//   for (let l = 1; l <= 2 * i - 1; l++) {
//     line = line + "*";
//   }
//   console.log(line);
// }
// for (let i = 1; i <= 3; i++) {
//   let line = "";
//   for (let j = 1; j <= 3 - i; j++) {
//     line = line + " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     line = line + "*";
//   }
//   console.log(line);
// }
// for (let i = 2; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= 3 - i; j++) {
//     line = line + " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     line = line + "*";
//   }
//   console.log(line);
// }
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log(
//     "1 үржвэл, 2 үржвэл, 3 үржвэл, 4 үржвэл, 5 үржвэл, 6 үржвэл, 7 үржвэл, 8 үржвэл, 9 үржвэл",
//   );
// }
let n = 5;

for (let i = 1; i <= 3; i++) {
  let line = "";

  for (let j = 1; j <= n; j++) {
    if (i === 1) {
      line = line + j + " ";
    } else if (i === 2) {
      line = line + j * 2 + " ";
    } else if (i === 3) {
      line = line + (j * 2 - 1) + " ";
    }
  }
  console.log(line);
}
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; j <= n; j++) {
//     if (i === 1 || i === n || j === 1 || j === n) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }
// let star = "";
// for (i = 1; i <= 10; i++) {
//   star = star + "*";
//   console.log(star);
// }
// let n = 5;

// for (let i = 1; i <= 3; i++) {
//   let line = "";

//   for (let j = 1; j <= n; j++) {
//     if (i === 1) {
//       line = line + j + " ";
//     } else if (i === 2) {
//       line = line + j * 2 + " ";
//     } else if (i === 3) {
//       line = line + (j * 2 - 1) + " ";
//     }
//   }
//   console.log(line);
// }
console.log(line);
