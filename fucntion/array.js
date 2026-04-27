// let hobbys = [
//   "togloom togloh",
//   "darts shideh",
//   "kiwi",
//   "banana",
//   "apple",
//   "pubg ",
// ];

// // console.log(hobbys[1]);
// // console.log(hobbys[2]);
// // console.log(hobbys[4]);
// // console.log(hobbys.length)
// for (let i = 0; i < hobbys.length; i++) {
//   console.log(hobbys[i]);
// }
let ages = [
  28, 36, 30, 32, 23, 41, 38, 21, 36, 22, 23, 23, 22, 22, 21, 44, 25, 24,
];
// for (let i = 0; i < ages.length; i++)
//     console.log(ages[i])
let sum = 0;
let dundaj = 0;
// let min = ages[0];
// let max = ages[0];
for (let i = 0; i < ages.length; i++) {
  //   if (min > ages[i]) {
  //     min = ages[i];
  //   }
  //   if (max < ages[i]) {
  //     max = ages[i];
  //   }
  sum = sum + ages[i];
}
// console.log(min);
console.log(max);
dundaj = sum / ages.length;
console.log(dundaj.toFixed(0));
// //1 +25 age print
// for (let i = 0; i <= ages.length; i++) {
//     console.log([i]);
// }
// 1 +25 age print
// 2.20-29, 30-39, 40 count
// output;20nastai 14 hun
// output; 30nastai 3 hun
// 3. 20-29 dundaj
// 30-39 dundaj
// 40

let max = 0;

for (let i = 0; i < ages.length; i++) {
  let duplicatedCount = 0;
  for (let j = i + 1; j < ages.length; j++) {
    if (ages[i] === ages[j]) {
      duplicatedCount++;
    }
  }
  if (max < duplicatedCount) {
    max = duplicatedCount;
  }
  console.log(ages[i], duplicatedCount);
}
