// Create 16 x 16 grid

const container = document.querySelector(".grid");
for(let i = 0; i < 16*16; i++){
    const gridSquare = document.createElement("div");
    container.appendChild(gridSquare);
}
// incl. Borders and margins
// Set up hover effect - so grid div change colour when mouse passes
// Add button on the screen. 
    // button sends pop up to user asking for no. of squares per side (1-100)
    // it should be in the same space