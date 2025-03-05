

const switchOn = document.querySelector(".btn-on")
const switchOff = document.querySelector(".btn-off")
const image = document.querySelector(".img")


switchOn.addEventListener("click",()=>{
    image.src="./assets/./images/switchOn.jpg";
})
switchOff.addEventListener("click",()=>{
    image.src="./assets/./images/switchOff.jpg"

})