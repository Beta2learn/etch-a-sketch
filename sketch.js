//Project title
const title = document.createElement("h1");
title.textContent = "Etch-a-Sketch";
title.classList.add("title");
document.body.appendChild(title);

//Container
const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

//Clear content in the container
function clearContent(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

const menuItems = document.createElement("div");
menuItems.classList.add("menuitems")

//Drop-down menu for grid shape selection
const gridShape = document.createElement("select");
gridShape.classList.add("gridshape");

//Shape options
const shapeOne = document.createElement("option");
shapeOne.value = "square";
shapeOne.textContent = "Square";

const shapeTwo = document.createElement("option");
shapeTwo.value = "circle";
shapeTwo.textContent = "Circle";

const shapeThree = document.createElement("option");
shapeThree.value = "hexagon";
shapeThree.textContent = "Hexagon";

menuItems.appendChild(gridShape);

gridShape.appendChild(shapeOne);
gridShape.appendChild(shapeTwo);
gridShape.appendChild(shapeThree);

document.body.insertBefore(menuItems, container);

//Grid default size
let currentSize = 16;

gridShape.addEventListener("change", function(){
    grid(currentSize);
});


//grid
function grid(size){
    clearContent();
    const squareSize = 400 / size;

    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.style.cssText = `
        width: ${squareSize}px;
        height: ${squareSize}px;
        box-sizing: border-box;
        border: 0.5px solid #e4e4e4;`;

        //Shape style based on selection
    if(gridShape.value === "circle"){
        square.style.borderRadius = "50%";

    } else if(gridShape.value === "hexagon"){
        square.style.width =
        `${squareSize}px`;
        square.style.height = `
         ${squareSize * 0.577};`;
        square.style.clipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
    } else {
        square.style.borderRadius = "0";
    }

    square.addEventListener("mouseover", function(){
        square.style.backgroundColor = randomColor();
    });
    container.appendChild(square);
}
}

// Generate random rgb colors
function randomColor(){
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

// Grid size option button
const gridButton = document.createElement("button");
gridButton.textContent = "Grid Size";
gridButton.classList.add("gridbutton");
menuItems.appendChild(gridButton);

gridButton.addEventListener("click", function(){
    let squarePerSide = prompt("Enter the number of squared per side for new grid");

    squarePerSide = parseInt(squarePerSide);

    if (squarePerSide && squarePerSide <= 100){
        currentSize = squarePerSide;
    //update current size
    grid(currentSize);

    }else {
        alert("Please enter a valid number between 1 and 100");
    }
});

//Reset board button
const resetBoard = document.createElement("button");
resetBoard.classList.add("resetboard");
resetBoard.textContent = "Reset Board"
menuItems.appendChild(resetBoard);

resetBoard.addEventListener("click", function(){
    clearContent();
    currentSize = 16;

    grid(currentSize);
});

// Initialize default size
grid(currentSize);