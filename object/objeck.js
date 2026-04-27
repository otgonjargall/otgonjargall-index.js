// let tast = {
//   todo: "geree tseverleh",
//   isCompleted: false,
// };
// let me = {
//   name: "otgonjargal",
//   age: 20,
//   hobby: "writing code",
// };

// const personas = [
//   {
//     name: "otgonjargal",
//     age: 20,
//     phoneNumber: 89654321,
//     gender: "male",
//   },
//   {
//     name: "otgonjargal",
//     age: 20,
//     phoneNumber: 89654321,
//     gender: "male",
//   },
//   {
//     name: "otgonjargal",
//     age: 20,
//     phoneNumber: 89654321,
//     gender: "female",
//   },
//   {
//     name: "otgonjargal",
//     age: 20,
//     phoneNumber: 89654321,
//     gender: "female",
//   },
//   {
//     name: "otgonjargal",
//     age: 20,
//     phoneNumber: 89654321,
//     gender: "female",
//   },
//   {
//     name: "otgonjargal",
//     age: 20,
//     phoneNumber: 89654321,
//     gender: "female",
//   },
// ];

// let users = [];

// function getallperson() {
//   for (let i = 0; i < personas.length; i++) {
//     if (personas[i].gender === "male") {
//       users.push(personas[i]);
//     }
//   }
// }

// getallperson();

// console.log(users);
// let person = [
//   {
//     firstname: "otgonjargal",
//     lastname: "battulga",
//     age: 31,
//     city: "ulaanbaatar",
//     email: "",
//   },
// ];
// console.log(person[0].firstname, person[0].city);

let student = {
  name: "otgonjargal",
  age: 20,
  grade: {
    math: 90,
    history: 85,
    science: 95,
  },
  address: {
    city: "ulaanbaatar",
    zip: "bayanzurh",
    street: "sukhbaatar",
    email: "otgonjargal@example.com",
  },
};
//1. exsercise 1:
// console.log(person[0])
//2. exsercise 2:
// console.log([person[0].firstname, person[0].city]);
//3. exsercise 3:

//4. exsercise 4:
// console.log(student.grade.math, student.address.city, student.email);
//5. exsercise 5:
// console.log(Object.keys(student));
// console.log(Object.values(student));
//6. exsercise 6:
// delete student.address.zip;
// console.log(student);

let todos = [
  {
    title: "hello world",
    isDone: false,
  },
  {
    title: "hool hiih",
    isDone: false,
  },
  {
    title: "hool hiih 2",
    isDone: false,
  },
  {
    title: "hool hiih 3",
    isDone: false,
  },
  {
    title: "hool hiih 4",
    isDone: false,
  },
  {
    title: "hool hiih 5",
    isDone: false,
  },
];

todos[1].isDone = true;

function changeIsDone(index) {
  todos[index].isDone = true;
}

function createTodo(title) {
  todos.push({ title: title, isDone: false });
}

function removeTodo(index) {
  let newArray = [];
  for (let i = 0; i < todos.length; i++) {
    if (i === index) {
      console.log("skipped");
    } else {
      newArray.push(todos[i]);
    }
  }
  todos = newArray;
}

function filterByIsDone() {
  let done = [];
  let incomplete = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].isDone === true) {
      done.push(todos[i]);
    } else {
      incomplete.push(todos[i]);
    }
  }
  console.log(done, incomplete);
  console.log("done tasks : ", done.length);
  console.log("incomplete tasks : ", incomplete.length);
}

changeIsDone(3);
createTodo("hicheel orno");
changeIsDone(todos.length - 1);
removeTodo(todos.length - 3);
filterByIsDone();
console.log(todos);
