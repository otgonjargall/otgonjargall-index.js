// let array = [1, 2, 3, 4,]
// console.log(array);
let array = [
  "Lkhagvasuren",
  "Ууганбаяр",
  "Наргис",
  "Билэгүүдэй",
  "Шинэбаяр",
  "Золбаяр",
  "Жавхлан",
  "Балжинням",
  "Хатанбаатар",
  "Батбаяр",
  "Төгсбилэг",
  "Баярмаа",
  "Булганбат",
  "Мягмарсүрэн",
  "НандинЭрдэнэ",
  "Бямбасайхан",
  "Нандин-Эрдэнэ",
  "Цэнгүүн",
  "Отгонжаргал",
  "Оюунэрдэнэ",
  "Лхагвадорж",
  "мягмарсүрэн",
  "Өсөхбаяр",
];
console.log(array);
let a = [
  "Lkhagvasuren",
  "Ууганбаяр",
  "Наргис",
  "Билэгүүдэй",
  "Шинэбаяр",
  "Золбаяр",
  "Жавхлан",
  "Балжинням",
  "Хатанбаатар",
  "Батбаяр",
  "Төгсбилэг",
  "Баярмаа",
  "Булганбат",
  "Мягмарсүрэн",
  "НандинЭрдэнэ",
  "Бямбасайхан",
  "Нандин-Эрдэнэ",
  "Цэнгүүн",
  "Отгонжаргал",
  "Оюунэрдэнэ",
  "Лхагвадорж",
  "мягмарсүрэн",
  "Өсөхбаяр",
];
for (let i = 0; i < array.length; i++) if (i % 2 === 0) console.log(array);
// let b =[]
console.log(array[a]);
let towerOne = ["Red", "Blue", "Red", "Green"];
let towerTwo = ["Blue", "Green", "Blue", "Red"];
let towerThree = ["Green", "Blue", "Red", "Green"];
// towerOne.pop;
// console.log

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let array = [1, 2, 3]
// let temp =array[2]
// array[2] array
const number = [13, 20, 31, 88, 24, 10, 8, 39, 1, 5];
//find second largest number
let max = 0;
let second = 0;
for (i = 0; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
    second = max;
  } else if (number[i] > second && number[i] != max) {
    second = number[i];
  }
}
console.log(second);
//input:[19,20,31,88,24,10,8,39,1,5];
//output; 39
console.log(secondMax);
