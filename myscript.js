// - for gradient - if it is already fully opaque, restart at 1
// - push to main branch
// fix bottom line for smaller screens (disappearing)

const container = document.querySelector(".grid");
const newButton = document.querySelector("#generateGrid");
const resetButton = document.querySelector("#resetGrid");
const colorSelection = document.querySelector("#colorScheme");
let colorScheme = "black";

//Create default 16x 16 grid
let gridSize = 16; 
generateGrid(gridSize);

// Create function to generate grid squares
function generateGrid(gridSize) {
    
    //Remove existing grid squares
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    // Create new grid
    for(let i = 0; i < gridSize*gridSize; i++){
        const gridSquare = document.createElement("div");
        gridSquare.style.width = `calc(100% /${gridSize})`;
        gridSquare.style.height = `calc(100% /${gridSize})`;
        container.appendChild(gridSquare);
      
        gridSquare.addEventListener("mouseover", () => applyColorScheme(gridSquare));
    }
}

//Create function to generate random RGB value
function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getRandomColor(){
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r},${g},${b})`;
}

function applyColorScheme(gridSquare){
    switch(colorScheme){
        case "black":
            gridSquare.style.backgroundColor = "rgb(4, 4, 4)";
            gridSquare.style.opacity = 1;
            break;
        case "gradient":
            if (gridSquare.style.backgroundColor === "rgb(4, 4, 4)" && gridSquare.style.opacity === "1"){
                let currentOpacity = 0.1;
                // Assign new opacity, up to 1
                gridSquare.style.opacity = Math.min(currentOpacity + 0.1, 1);
            } else if (gridSquare.style.opacity > 0 && gridSquare.style.opacity < 1){
                currentOpacity = parseFloat(gridSquare.style.opacity);
                gridSquare.style.opacity = Math.min(currentOpacity + 0.1, 1);
            } else {
                gridSquare.style.backgroundColor = "rgb(4, 4, 4)";
                gridSquare.style.opacity = "0.1";
            };
            break;
        case "colorful":
            gridSquare.style.backgroundColor = getRandomColor();
            gridSquare.style.opacity = 1;
            break;
    }
}

//Event listener to prompt for user input
newButton.addEventListener("click", () => {
    //Prompt until user gives valid input
    
    while (true) {
        gridSize = prompt("Enter the grid size (whole number from 1-100):");
        gridSize = Number(gridSize);

        if (!isNaN(gridSize) && Number.isInteger(gridSize) && gridSize >= 1 && gridSize <= 100) {
            break; // Valid input, exit loop
        }

        alert("Please enter a valid whole number between 1 and 100.");
    }

    //Generate grid based on user input
    generateGrid(gridSize);

});

//Event listener for dropdown change
colorSelection.addEventListener("change", (event) => {
    colorScheme = event.target.value;
});

//Event listener for reset
resetButton.addEventListener("click", ()=>
    generateGrid(gridSize)
)


