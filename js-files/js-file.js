const canvas = document.querySelector(".canvas")

for (i = 1; i < 17; i++) {
    let row = document.createElement("div");
    row.classList.add("row")
    row.classList.add(`row${i}`);
    canvas.appendChild(row);
    for (k = 1; k < 17; k++) {
        let fetchRow = document.querySelector(`.row${i}`)
        let box = document.createElement("div");
        box.classList.add("column")
        box.classList.add(`column${k}`)
        fetchRow.appendChild(box)

    }
    
}

const columnEffect = () => {
    const columns = [...document.querySelectorAll(".column")];

    columns.forEach((column) => {
        column.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "blue"
        })
    })
}

columnEffect()

const body = document.querySelector("body");
const container = document.createElement("div");
const button = document.createElement("button");

button.classList.add("grid-generator");
container.classList.add("container");

button.textContent = "Change Grid"

body.appendChild(container);
container.appendChild(canvas);
container.insertBefore(button, canvas);

const removeGrid = () => {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
}

const gridSetter = () => {
    let whileIncrement = 0
    while (whileIncrement === 0) {
        let userInput = prompt("How many rows and columns would you like? (No greater than 100)", 16)
        if (userInput > 100) {
            continue
        } else if (userInput < 1) {
            continue
        } else {
            removeGrid()
            for (i = 0; i < userInput; i++) {
                let row = document.createElement("div");
                row.classList.add("row")
                row.classList.add(`row${i}`);
                canvas.appendChild(row);
                for (k = 0; k < userInput; k++) {
                    let fetchRow = document.querySelector(`.row${i}`)
                    let box = document.createElement("div");
                    box.classList.add("column")
                    box.classList.add(`column${k}`)
                    fetchRow.appendChild(box) 
                } 
            }
            whileIncrement += 1
        }
    }
}

button.addEventListener("click", () => {
    gridSetter()
    columnEffect()
})