const container = document.querySelector(".grid");
const button = document.querySelector("#generateGrid");

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

//Create default 16x 16 grid
generateGrid(16);

//Click button to prompt for user input
button.addEventListener("click", () => {

    let gridSize = prompt("Enter the grid size (whole no. from 1-100):");

    gridSize = Number(gridSize);

    if(isNaN(gridSize) || !Number.isInteger(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid whole no. between 1-100");
        return; //stop function from running
    }

    //Generate grid based on user input
    generateGrid(gridSize);

});


