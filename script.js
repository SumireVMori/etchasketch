const container = document.querySelector("#container");

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let columns = 0; columns < x; columns++) {
            let cell = document.createElement("div");
            cell.classList.add("grid");
            cell.style.color = "blue";
            cell.addEventListener("mouseover", function ( event ) {
                event.target.style.backgroundColor = "rgb(211, 114, 211)";
            });
            row.appendChild(cell);
        };
        container.appendChild(row);
    };
    
};

createGrid(16);










