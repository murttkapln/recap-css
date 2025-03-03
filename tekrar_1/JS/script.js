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

// let year = +prompt("Give ur birth year here")
// function yasYazdir(year){
//     console.log(`Benim adim Mehmet ve Ben ${2025-year} yasindayim.`);
// }

// yasYazdir(year);
// function yasYazdir(name, year) {
//   console.log(
//     `My name is ${name} and I am ${new Date().getFullYear() - year} years old.`
//   );
// }

// yasYazdir("Murat", 1993)

// console.log(new Date().getFullYear());

// function yasYazdir(name, bod) {
//   age = new Date().getFullYear() - bod;
//   console.log(`My name is ${name} and I am ${age} years old.`);
//   return age;
// }

// const ageMurat = yasYazdir("Murat", 1993);
// const ageAhmet = yasYazdir("Ahmet", 1990);
// const ageSeda = yasYazdir("Seda", 1989);

// function yasOrtalamasi(first, second, third) {
//   let ort = (first + second + third) / 3;
//   console.log(ort.toFixed());
// }
// yasOrtalamasi(ageAhmet, ageMurat, ageSeda);

// let number1 = +prompt("Give a number");
// let number2 = +prompt("Give a number");
// function dortIslem() {
//   let number1 = +prompt("Give an number");
//   let funct = prompt("Give an operator");
//   let number2 = +prompt("Give an number");
//   if (funct == "+") {
//     console.log(`${number1} + ${number2} = ${number1 + number2} `);
//   } else if (funct == "-") {
//     console.log(`${number1} - ${number2} = ${number1 - number2} `);
//   } else if (funct == "*") {
//     console.log(`${number1} * ${number2} = ${number1 * number2} `);
//   } else if (funct == "/") {
//     console.log(`${number1} / ${number2} = ${number1 / number2} `);
//     console.log("please give correct operator");
//   }
// }

// dortIslem();

// function oddOrEven(number){
//     if(number % 2 === 0){
//         console.log("Even");
//     }else {
//         console.log("Odd");
//     }
// }

// oddOrEven(22)
// const tekMi = function (x) {
//   return x % 2 ? "tek" : "Çift";
// };

// const number = +prompt("Give a number");
// console.log(`${number}:  ${tekMi(number)}`);

// const sum = (a, b) => a + b;
// alert(sum(1, 2));

// const topla = (a, b) => {
//   return a + b;
// };

// alert(topla(2, 5));

// const tekMi = (x) => (x % 2 ? "Tek" : "Çift");
// console.log(tekMi(5));

// p*r**

// const areaOfCirclre = (pi, r) => pi *( r * r);
// alert(areaOfCirclre(3.14, 2));

// const age = (year) => new Date().getFullYear() - year;

// console.log(age(1994));

// let text = "Is this all there is?";

// console.log(text.match(/[h]/g));
// let text = "1234567890"
// console.log(text.match(/[1-4]/g));

// let text = "re, red, green, gren, gr,blue, yellow";

// console.log(text.match(/(red|green)/g));

// let text ="Give 100%!"
// console.log(text.match(/\d/g));

// let text = "Is this all there is?."

// console.log(text.match(/\s/g));
// let text = "HELLO, LOOK AT YOU!";
// console.log(text.match(/\bLO/));
// let text = "HELLO, LOOK AT YOU!";
// console.log(text.match(/LO\b/));
// let text = "Visit W3Schools. Hello World!";
// console.log(text.match(/\u0057/g));
// let text = "Hellooo World! Hello W3Schools!"
// console.log(text.match(/o+/g));

// let text = "Hellooo World! Hello W3Schools!";
// console.log(text.match(/lo*/g));

// let text = "1, 100 or 1000?";
// console.log(text.match(/10?/g));

// let s = "Hello John, welcome to Clarusway.";
// console.log(s.split(" "));
// console.log(s.slice(12,-10));
// console.log(s.substr(23,10));

// let s = "Welcome to Clarusway.";
// console.log(s.substring(10, 15));

// console.log("KOŞ ALİ KOŞ".toLocaleLowerCase());
// console.log("ali koş lan".toUpperCase());

// let text = "Ali KOŞ abicim"
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text);

// let text = "                                koşun lan                    "
// console.log(text);
// console.log(text.trim());

// let text = "Hayvanat   "
// console.log(text.length);

//** DİZİLER */
// const sayilar = [1,2,"3", "Üç"]
// sayilar.includes(2)
// sayilar.includes(3)
// sayilar.includes("3")
// sayilar.includes("3")

// const elementler = ["Ateş","Hava", "Su"]
// console.log(elementler.join());
// console.log(elementler.join(""));
// console.log(elementler.join(" "));
// console.log(elementler.join("<=>"));
// const animals = ["elephant","birds","camel","mick","cat"]
// console.log(animals.slice(2));
// console.log(animals.slice(2,4));
// console.log(animals.slice(1,5));

// const arr1 = [1, 2, "a", "1a"];
// console.log(arr1.toString());
// const arr2 = [2,9,9]
// console.log(arr2.indexOf(9));
// console.log(arr2.lastIndexOf(9));
// console.log(arr2.indexOf(4));

// const harfler = ["a", "b", "c"],
//   rakamlar = [1, 2, 3];
// const birleştir = harfler.concat(rakamlar, 4, [5, 6]);
// console.log(birleştir);

// const rakamlar = [-5,15,22,-4,45,78,-25]
// let toplam = 0;
// for(let i = 0; i<rakamlar.length; i++){
//     toplam += rakamlar[i]
// }

// console.log(toplam);

// const arr1 = [-5, 15, 22, -4, 45, 78];

// const topla = (arr1) => {
//   let negatifler = [];
//   let pozitifler = [];
//   for (let i = 0; i < arr1.length; i++)
//     if (arr1[i] < 0) {
//       negatifler.push(arr1[i]);
//     } else {
//       pozitifler.push(arr1[i]);
//     }
//   console.log("negatifler", negatifler);
//   console.log("pozitifler", pozitifler);
// };
// topla(arr1);

// const arr1 = [-5, 15, 22, -4, 45, 78];
// let sum = 0;
// for(let i in arr1){
//   sum += arr1[i]
// }
// console.log(sum);

// const arr1 = [-5, 15, 22, -4, 45, 78];
// let sum = 0;
// for(let item of arr1){
//   sum += item
//   // console.log(item);
// }
// console.log(sum);

// let cars = ["BMW", "VOLVO", "MERCEDES"];

// let str = "";
// for (let item of cars) {
//   str += item + " ";
//   console.log(item);
// }
// console.log(str);

// let students = ["John", "Ali", "Katty"];
// students.forEach(write)
// function write (v){
//   console.log(v);
// }
// students.forEach((k) => console.log(k));

// const arr1 = [65, 44, 12, 4, -20, 19];

// let sum = 0;
// arr1.forEach(hesapla);

// function hesapla(s) {
//   sum += s;
// }

// console.log(sum);
// const arr1 = [65,44,12,4,-20,19]
// let sum = 0
// arr1.forEach((s)=>sum += s)

// document.querySelector("#sum").innerHTML = sum

// const arr1 = [-5, 25, -14, 7];
// const newArr = [];
// arr1.forEach(square);

// function square(value, index, arr1) {
//   newArr[index] = value * 5;
// }

// // console.log(arr1);
// console.log(newArr);

// arr1.forEach((s,i)=>newArr[i]=s*5)
// console.log(newArr);

// const numbers = [3, 7, 17, 8, 9, 3];
// const multiple = numbers.map((x) => x * 5);
// console.log(multiple);

// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "Canan"];

// names = names.map((x) => x.toLocaleUpperCase());
// console.log(names);

// const euro = 38;
// const dolar = 37;
// const prices = [100, 150, 100, 50, 80];

// let euroPrices = prices.map((x) => (x / euro).toFixed(2)+"£");
// let dolarPrices = prices.map((x) => (x / dolar).toFixed(2)+"$");

// console.log(euroPrices);
// console.log(dolarPrices);

// const costs = prices.map(function (d, i) {
//   if (d > 100) {
//     return `${i + 1}.Ürün Fiyatı:${(d * 1.1).toFixed(2)}`;
//   } else {
//     return `${i + 1}.ürün Fiyatı:${(d * 1.15).toFixed(2)}`;
//   }
// });
// console.log(costs);
// const coord = [-100, 150, -32, 43, -20];
// negativesCoord = coord.filter((x) => x < 0);
// console.log(negativesCoord);

// coord.filter((x)=>x<0).map((t)=>t*-1).forEach((y)=> console.log(y))

// console.log(coord.sort((a,b)=> a-b));

// const names = ["Ali", "veli", "Ahmet","Samet", "Selim","Osman", "Sena"]

// const sameOnes = names.filter((x)=>x.includes("S"))
// console.log(sameOnes);

// const coords = [-100, 150, -32, 43, -20];
// const sum = coords.reduce((x, y) => x + y);
// console.log(sum);
// const coords = [-100, 150, -32, 43, -20];
// const average = coords.reduce((x, y) => (x + y / coords.length));
// console.log(average.toFixed(2));
// const salaries = [3000, 2891, 3500, 4200, 7000, 2500];
// newSalaries = salaries.filter((x)=>x<3000).map((x)=>x*1.1).reduce((x,y)=> console.log(x+y))

// const salaries = [3000, 2891, 3500, 4200, 7000, 2500];
// newSalaries = salaries
//   .filter((x) => x < 3000)
//   .map((y) => y * 1.1)
//   .reduce((a, b) => a + b);
// console.log(newSalaries);
// var x = ["9","25","111","John","James","Aaron"];
// console.log (x.sort());

// let colors = ["Red", "Yellow", "Green"];
// colors.push("Red");
// console.log(colors);
// colors.shift();
// console.log(colors);