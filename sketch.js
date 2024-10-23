const title = document.createElement("h1");
title.textContent = "etch-a-sketch";
title.style.cssText = `
text-align: center`;
document.body.appendChild(title);

const container = document.createElement("div");
container.classList.add("grid-container");
document.body.appendChild(container);

function creategrid(size){
for(let i = 0; i < size; i++){

    const shell = document.createElement("div");
}
}