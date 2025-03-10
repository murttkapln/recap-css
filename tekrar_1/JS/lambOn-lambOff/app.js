const switchOn = document.querySelector(".btn-on");
const switchOff = document.querySelector(".btn-off");
const image = document.querySelector(".img");
const text = document.querySelector("#text");
const checkbox = document.querySelector("#checkbox");
const h1 = document.createElement("h1");
const text2 = document.createTextNode("Programlama Dilleri");
const newH1 = document.querySelector(".new-h1");

switchOn.addEventListener("click", () => {
  image.src = "./assets/./images/switchOn.jpg";
});
switchOff.addEventListener("click", () => {
  image.src = "./assets/./images/switchOff.jpg";
});

text.addEventListener("keyup", () => {
  checkbox.checked
    ? (text.value = text.value.toUpperCase())
    : (text.value = text.value.toLowerCase());
});

console.log(checkbox.checked);
console.log(text.value);

//! Yeni bir elemean ekleme
h1.appendChild(text2);
document.body.appendChild(h1);
h1.style.marginTop = "5%";
h1.style.color = "red";

// ! new-h1 ekleme
h1.appendChild(text2)
newH1.appendChild(h1);
newH1.style.marginTop = "5%";
newH1.style.color = "red";
