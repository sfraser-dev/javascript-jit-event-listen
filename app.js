//----------- Light on/off:
// grab the image and two buttons by their IDs
const imgLight = document.getElementById("img-bulb");
const btnBulbOn = document.getElementById("bulbOn");
const btnBulbOff = document.getElementById("bulbOff");
// button click light on
btnBulbOn.addEventListener("click", () => { 
    imgLight.src="./images/bulbon.png";
});
// button click light off
btnBulbOff.addEventListener("click", () => { 
    imgLight.src="./images/bulboff.png";
});


//---------- Paragraph change on hover:
// grab the paragraph by its ID and set some default styling values 
const parHover = document.getElementById("pHover");
const parOriginalText = parHover.innerHTML;
const parOriginalColor = "black";
const parOriginalBackgroundColor = "gray";
parHover.style.color = parOriginalColor;
parHover.style.backgroundColor = parOriginalBackgroundColor;
// change paragraph on mouse over
parHover.addEventListener("mouseover", () => {
    parHover.innerText = "May the force be with you";
    parHover.style.color = "green";
    parHover.style.backgroundColor = "yellow";
});
// change paragraph on mouse out
parHover.addEventListener("mouseout", () => {
    parHover.innerText = parOriginalText;
    parHover.style.color = parOriginalColor;
    parHover.style.backgroundColor = parOriginalBackgroundColor;
});


//---------- Window resize:
// grab the random number paragraph by its ID and initialise it
const hRand = document.getElementById("hRandom");
const pRand = document.getElementById("pRandom");
const winResizeColor = "red";
pRand.innerHTML = Math.random();
hRand.style.color = winResizeColor;
pRand.style.color = winResizeColor;
// display a new random number on window resize
window.addEventListener("resize", () => {
    pRand.innerHTML = Math.random();
    pRand.style.color = winResizeColor;
});
