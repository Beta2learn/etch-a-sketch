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

//Drop-down menu for grid shape selection
const gridShape = document.createElement("select");
gridShape.classList.add("gridshape");

//Shape options
const shapeOne = document.createElement("option");
shapeOne.value = "square";
shapeOne.textContent = "Square";
shapeOne.classList.add("shapeone");

const shapeTwo = document.createElement("option");
shapeTwo.value = "circle";
shapeTwo.textContent = "Circle";
shapeTwo.classList.add("shapetwo");

const shapeThree = document.createElement("option");
shapeThree.value = "hexagon";
shapeThree.textContent = "Hexagon";
shapeThree.classList.add("shapethree");

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

    for (let i = 0; i <= size * size; i++){
        const square = document.createElement("div");
        square.style.cssText = `
        width: ${squareSize}px;
        height: ${squareSize}px;
        border: 0.3px solid #e4e4e4;`;

        //Shape style based on selection
    if(gridShape.value === "circle"){
        square.style.borderRadius = "50%";

    } else if(gridShape.value === "hexagon"){
        squareSize * 0.577};
        square.style.clipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
    {
        square.style.borderRadius = "0";
    }
}
