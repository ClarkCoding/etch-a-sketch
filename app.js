// Create boxes
const container = document.querySelector("#container");

// Creates boxes
function createBoxes(numBox) {
  container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
  for (let i = 0; i < numBox * numBox; i++) {
    const square = document.createElement("div");
    square.classList.add("box");
    container.appendChild(square);
  }
  // Makes divs grey on mouse over
  const children = container.children;
  for (let m = 0; m < children.length; m++) {
    children[m].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "grey";
    });
  }
}

// Resets grid and ask for the users input once again
function resetGrid() {
  container.innerHTML = "";
  let newNumBox = prompt("Enter a number:");
  return createBoxes(newNumBox);
}

// Listens for click on reset button and executes the resetGrid function
document.getElementById("resetButton").addEventListener("click", resetGrid);

// Initiates game
let numBox = prompt('Enter a number:');
createBoxes(numBox);
