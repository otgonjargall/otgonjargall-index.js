let cells = document.getElementsByClassName("cell");

let count = 1;

function addXandO(index) {
  let cell = cells[index];

  if (count % 2 === 0) {
    cell.textContent = "O";

    cell.classList.remove("blue");

    cell.classList.add("yellow");
  } else {
    cell.textContent = "X";

    cell.classList.remove("yellow");

    cell.classList.add("blue");
  }

  if (
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent
  ) {
    console.log(cells[0]);

    cells[0].style.color = "green";

    if (cells[0].textContent === "X") {
      let status = document.getElementsByClassName("status")[0];

      status.textContent = "X won";
    } else {
      alert("0 won");
    }
  }

  count++;
}
