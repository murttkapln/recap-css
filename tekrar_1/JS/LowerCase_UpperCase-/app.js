const text = document.querySelector(".text");
const checkbox = document.querySelector(".checkbox");
text.addEventListener("keyup", () => {
  if (checkbox.checked) {
    text.value = text.value.toUpperCase();
  } else {
    text.value = text.value.toLowerCase();
  }
});
console.log(checkbox.checked);

const h1 = document.createElement("h1");
const text2 = document.createTextNode("Programlama Dilleri");

h1.appendChild(text2);
document.body.appendChild(h1);
h1.style.marginTop = "5%";
h1.style.color = "red";
