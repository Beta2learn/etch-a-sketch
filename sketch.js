//Project title
const title = document.createElement("h1");
title.textContent = "Etch-a-Sketch";
title.classList.add("title");
document.body.appendChild(title);

//Container
const container = document.createElement("div");
container.id("container");
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
shapeOne.classList.add("shapeone");

const shapeTwo = document.createElement("option");
shapeTwo.classList.add("shapetwo");

const shapeThree = document.createElement("option");
shapeThree.classList.add("shapethree");

menuItems.appendChild(gridShape);

gridShape.appendChild(shapeOne);
gridShape.appendChild(shapeTwo);
gridShape.appendChild(shapeThree);

document.body.insertBefore(menuItems, container);
