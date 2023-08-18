//  Variables

const divContainer = document.querySelector(".grid-container");
const erase = document.querySelector(".erase-btn");
const draw = document.querySelector(".draw-btn");

// For loop to create 16x16 divs

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-square");

        // Button event listeners to change grid background color

        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.backgroundColor = "red";
        });

        draw.addEventListener("click", () => {
            gridDiv.addEventListener("mouseover", () => {
                gridDiv.style.backgroundColor = "red";
            });
        });

        erase.addEventListener("click", () => {
            gridDiv.addEventListener("mouseover", () => {
                gridDiv.style.backgroundColor = "white";
            });
            
        });
        divContainer.appendChild(gridDiv);
    }
}