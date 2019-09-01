var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton =  document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    //Generate all new colors
    colors = generateRandomColors(6);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to to mach picked Color
    colorDisplay.textContent = pickedColor;
    //Change colors os squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323"
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //Add initial colors to squares
    squares[i].style.background = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        var clickedColor = this.style.background;
        //Compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.background = clickedColor
        }else{
         this.style.background = "#232323";
         messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color){
    //Loop throug all squares
    for (var i = 0; i < squares.length; i++){
    //Change each color to mach given color
    squares[i].style.background = color;
    }    
}

function pickColor(){
   var random =  Math.floor(Math.random() * colors.length)
   return colors[random];
}


function generateRandomColors(num){
    //make an array
    var arr = []
    //Repeat num time
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
        //get random color and push into array
    }    
    //return that array
    return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}