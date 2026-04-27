// var birthdate = prompt("tani torson on hed be?");

// if (birthdate !== null) {
//   var currentYear = new Date().getFullYear();
//   var age = currentYear - birthdate;
//   var message = " sain bainu uu \n\n tani nas: " + age;

//   if (age > 18) {
//     console.log("ta nasand hursen bn ");
//   } else if (age > 15) {
//     console.log("ta ahlah angiin suragch bnaa");
//   } else if (age > 6) {
//     console.log("ta dund yumuu baga angiin suragch bn daa");
//   } else {
//     console.log("ta surguuld oroogui, jaahan huuhed bn ");
//   }

//   alert(message);
// } else {
//   alert("uuchlaarai ta torson ognoogoo sain oilgohgui bh shig bn bnuu!!");
// }

// dun talbar heseg
// var dun = 80;
// var hahuulMongo = 0;
// var hamaatan = true;
// var nadadTaalagddag = true;
// if (
//   dun > 95 ||
//   hahuulMongo > 50000 ||
//   (hamaatan === true && nadadTaalagddag === true)
// ) {
//   console.log("ta A avlaa");
// } else {
//   console.log("uuchlaarai taid A tavij chadahgui");
// }
// gurvalsan holson ashiglah
// var name = "sarantstseg";
// var age = 20;
// // if (age >= 18) console.log(name + " bol nasand hursen hun");
// // else console.log(name + " bol huuhed bn ");
// // age >= 18
// //   ? console.log(name + "bol nasand hursen hun")
// //   : console.log(name + "bol huuhed bn ");
// var who = age >= 18 ? "tom hun" : "huuhed";
// who === "tom hun"
//   ? console.log(name + " bol barand orj bolno")
//   : console.log(name + " bol barand orj bolohgui");
//switch hiih amar arga

// var avgDun = 80;

// if (avgDun >= 90) {
//   console.log(name + "bol Onts surlagatan");
// } else if (avgDun < 90 && avgDun >= 80) {
//   console.log(name + "bol Sain surlagatan");
// } else if (avgDun < 80 && avgDun >= 70) {
//   console.log(name + "bol Dund surlagatan");
// } else {
//   console.log(name + "bol Muu surlagatan");
// }
// switch (true) {
//   case avgDun >= 90:
//     console.log(name + "bol Onts surlagatan");
//     break;
//   case avgDun < 90 && avgDun >= 80:
//     console.log(name + "bol Sain surlagatan");
//     break;
//   case avgDun < 90 && avgDun >= 80:
//     console.log(name + "bol Dund surlagatan");
//     break;
//   default:
//     console.log(name + "bol Muu surlagatan");
// }
var module = function () {
  console.log("expression function ajillaj bn...");
};
module(35);
function mod(number) {
  console.log("statement function ajillaj bn...");
}
mod();
