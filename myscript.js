// Create 16 x 16 grid
const container = document.querySelector(".grid");
for(let i = 0; i < 16*16; i++){
    const gridSquare = document.createElement("div");
    container.appendChild(gridSquare);
    // Add the mouseover event listener to each grid square. Use 'add' instead of 'toggle' (on/off effect). 
    gridSquare.addEventListener("mouseover", () =>    gridSquare.classList.add("hover"));
}




// Add button on the screen. 
    // button sends pop up to user asking for no. of squares per side (1-100)
    // it should be in the same space