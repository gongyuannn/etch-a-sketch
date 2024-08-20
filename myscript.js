//TO-DO: mobile interface
//TO-DO: Optional colorful
//TO-DO: Optional gradient

const container = document.querySelector(".grid");
const newButton = document.querySelector("#generateGrid");
const resetButton = document.querySelector("#resetGrid");

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
      
        gridSquare.addEventListener("mouseover", () => gridSquare.classList.add("hover"));
    }
}

//Click newButton to prompt for user input
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

resetButton.addEventListener("click", ()=>
    generateGrid(gridSize)
)


