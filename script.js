// set var colors and buttons
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add event on button
btn.addEventListener("click", function(){
    let hexColor = "#";
    for(i=0; i<6; i++){
        // print color
        hexColor += hex[randomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomNumber(){
    // create random color
    return Math.floor(Math.random() * hex.length);
}