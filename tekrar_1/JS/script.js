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

// let a = +prompt("Give a number for a:");
// let b = +prompt("Give a number for b:");
// let c = +prompt("Give a number for c:");
// console.log(a);
// console.log(b);
// console.log(c);

// let biggest = a;

// if (b > c && b > biggest) {
//   console.log("biggest is :", b);
// } else if (c > biggest) {
//   console.log("biggest is :", c);
// } else if (c > b) {
//   console.log("biggest is ", c);
// }

// if (biggest > b && biggest > c){
//     console.log("Biggest one is:",biggest);
// }

// let day = +prompt("Day: 1-7");
// switch (day) {
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Saturday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   case 7:
//     day = "Sunday";
//     break;
//   default:
//     alert("Should be 1-7 ");
//     break;
// }

// console.log(day);

// let day = +prompt("Give a  number of week.");
// switch (day) {
//   case 1:
//     day = "In Class";
//     break;
//   case 2:
//     day = "In Class";
//     break;
//   case 3:
//     day = "In Class";
//     break;
//   case 4:
//     day = "In Class";
//     break;
//   case 5:
//     day = "Teamwork";
//     break;
//   case 6:
//     day = "InClass + WorkShop";
//     break;
//   case 7:
//     day = "Self-Study";
//     break;
//   default:
//     alert("Wrong day entry.");
//     break;
// }
// console.log(day);

// const speed = 90
// const message= speed >= 120 ? "Fast": "Slow"
// console.log(message);

// const message = speed >= 120 ? "Fast" : (speed >=90 ? "Normal": "Slow")
// console.log(message)

// const note = +prompt("Give ur note");

// const message = note>=50 ?  "Passed": "Failed"
// console.log(message);

// const note = +prompt("Give ur note");

// const message =
//   note >= 50 ? "Gecti" : (note > 40 && note < 50 ? "şartli Geçti" : "Kaldi");
// console.log(message);

// let maas = +prompt("Give ur salary");
// const asgari = 22000

// const newSalary = maas > asgari ? (maas * 1.1 ): (maas * 1.5)
// console.log(newSalary.toFixed());

// const gelir = +prompt("Geliriniz:");
// const gider = +prompt("Gideriniz:");
// const asgari = 22000;

// const kredi = gelir - gider > asgari ? "Kredi Verilir" : "kredi Verilmez";
// console.log("Net kazanç:", gelir - gider, "=>", kredi);

// let number = +prompt("Give a number to learn even or odd")
// const oddOrEven = (number % 2 == 0) ? "Even" : "Odd"
// console.log(oddOrEven);

// const a = +prompt("Give an number");
// const b = +prompt("Give an number");
// const c = +prompt("Give an number");

// let biggest = a;
// let list = [a, b, c];

// console.log(list);
// const sortedList = list.sort();
// const biggestOne = sortedList[sortedList.length - 1];
// const smallestOne = sortedList[0];

// console.log("Biggest:", biggestOne, "<==>", "Smallest:", smallestOne);

// const biggestOne =
//   b > biggest && b > c ? b : c > b && c > biggest ? c : biggest;
// console.log(biggestOne);

// let month = +prompt("Give a number of month: 1-12");

// switch (month) {
//   case 1:
//     month = "january";
//     break;
//   case 2:
//     month = "February";
//     break;
//   case 3:
//     month = "March";
//     break;
//   case 4:
//     month = "April";
//     break;
//   case 5:
//     month = "May";
//     break;
//   case 6:
//     month = "June";
//     break;
//   case 7:
//     month = "July";
//     break;
//   case 8:
//     month = "August";
//     break;
//   case 9:
//     month = "September";
//     break;
//   case 10:
//     month = "October";
//     break;
//   case 11:
//     month = "November";
//     break;
//   case 12:
//     month = "December";
//     break;

//   default:
//     alert("Wrong number of month");
//     break;
// }
// console.log(month);

// let fahrenheit = +prompt("Give a fahrenheit degree")

// let celcius= 5/9 *(fahrenheit-32)

// console.log(celcius);

// let celcius = +prompt("Give a celcius degree")

// let fahrenheit = (1.8*celcius + 32)
// console.log(fahrenheit);

// for(let i = 0; i<10; i++){
//   console.log("Khadi looo");
// }

// let sum = 0;
// for(let i = 0; i<10;i++){
//   sum += i
// }
// console.log(sum);

// let sum = 0;
// for(let i = 10; i<=20;i++){
//   sum += i
// }
// console.log(sum);

// const number = +prompt("Gİve a positive number");


// const isPrime = (number)=>{
//   let prime = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       prime = false;
//       break;
//     }
//   }
//   return prime ? "Prime": "Not Prime"
// }

// console.log(`${number} ==> ${isPrime(number)}`);

// let i = 1;

// while (i<=10) {
  
//   console.log(i + "=> Matrushka");
//   i++;
// }

// let note;
// do {
//   note = +prompt("0-100")
  
// } while (note <0 || note>100);
// console.log(note,":Girdiğiniz not 1-100 arasindadir.");

// let number = 2
// let guess = +prompt("Give a number 1-9")

// do {
//   guess = + prompt("Gİve again")
  
// } while (guess !== number);

// console.log(guess, number, "Congrats");