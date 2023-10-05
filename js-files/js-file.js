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

const columns = [...document.querySelectorAll(".column")];

columns.forEach((column) => {
    column.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "blue"
    })
})