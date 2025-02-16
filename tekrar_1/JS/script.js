console.log("Merhabalar Efenim");

/* şimdi
budradan
gidelim
 */

// console.log(2 + 2);

// const sayi = 54
// console.log(String(sayi), sayi,typeof(sayi));

// var text = "He said, \" I am a new developer in here.\"";
// console.log(text);

// let x ;
// console.log(x);

// Boolean("")  /* false */
// Boolean("false") /* true */,
// console.log(2 + "2");
// console.log("2" + "2");
// console.log(2 - "2");
// console.log(1 + 2+ 3 + "1" + "1");
// console.log(1 + " " + "murat"  +" "+ "khadi");
// console.log(1 + "1" + 1);
// console.log(1 + 1 + 1+ "1" + 2);
// console.log(2 == "2");
// console.log(2 == 2);
// console.log(2 === "2");
//  console.log("" ? "true" : "false");

// let person = {
//     name: "Khadi",
//     surname: "Azizova",
//     birthday: 1996,
//     job: "Accountant"
// }

// console.log(`${person.name} ${person.surname}: ${person.job} `);
// console.log(person);

// let age = +(prompt("Please give ur age"))

// if (age > 18){
//     console.log("Yetişkin");
// }else{
//     console.log("Velet");
// }

// let puan = +prompt("Give ur assignment note");
// console.log(puan);

// if (puan > 100) {
//   alert("En yüksek skor 100 olmalıdır");
// } else if (puan < 0) {
//   alert("0' dan küçük olamaz ");
// } else {
//   if (puan >= 75) {
//     console.log("AA degree");
//   } else if (puan >= 50 && puan < 75) {
//     console.log("BB Degree");
//   } else if (puan >= 25 && puan < 50) {
//     console.log("CC degree");
//     console.log("Failed");
//   }
// }

// let number = +prompt("Give a number")

// if (number > 0){
//     console.log("Positive", number);
// }else if(number == 0){
//     console.log("Number is zero", number )
// }else{
//     console.log("Number is negative", number);
// }

let a = +prompt("Give a number for a:");
let b = +prompt("Give a number for b:");
let c = +prompt("Give a number for c:");
console.log(a);
console.log(b);
console.log(c);

let biggest = a;

if (b > c && b > biggest) {
  console.log("biggest is :", b);
} else if (c > biggest) {
  console.log("biggest is :", c);
} else if (c > b) {
  console.log("biggest is ", c);
}

// if (biggest > b && biggest > c){
//     console.log("Biggest one is:",biggest);
// }
