// store i array
let array = [];
let number = 1;

for (let i = 0; i < 4; i++) {
  let rowArray = [];
  for (let j = 0; j < 4; j++) {
    rowArray.push("");
  }
  array.push(rowArray);
}
console.log(array);

// Random number
function random() {
  let a = Math.floor(Math.random() * 4);
  let b = Math.floor(Math.random() * 4);
  if (array[a][b] === "") {
    array[a][b] = "2";
  } else {
    random();
  }
  console.log(a, b);
}
random();
random();

// create table and data store
function table() {
  const tableBody = document.querySelector("#table tbody");
  tableBody.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      let td = document.createElement("td");
      td.textContent = array[i][j];
      row.appendChild(td);
    }
    tableBody.appendChild(row);
  }
}
table();

// All key
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    shiftUp();
  } else if (e.keyCode == "40") {
    shiftDown();
  } else if (e.keyCode == "37") {
    shiftLeft();
  } else if (e.keyCode == "39") {
    shiftRight();
  }
}
// game over condition check
function isGameOver() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (array[i][j] === "" ||(i < 3 && array[i][j] === array[i + 1][j]) || (j < 3 && array[i][j] === array[i][j + 1])) {
        return false;
      }
    }
  }
  return true;
}
// game over message
function showGameOver() {
  document.getElementById("game-over").style.display = "block";
  gameOver = true;
  document.onkeydown = null;
}

// press left side key to move and sum logic
function shiftLeft() {
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (array[i][j] !== "") {
        if (j > 0 && (array[i][j - 1] === "" || array[i][j - 1] === array[i][j])) {
          if (array[i][j - 1] === array[i][j]) {
            array[i][j - 1] *= 2;
            array[i][j] = "";
          } else if (array[i][j - 1] === "") {
            array[i][j - 1] = array[i][j];
            array[i][j] = "";
          }
          j--;
        }
      }
    }
  }
  random();
  table();
  if (isGameOver()) showGameOver();
}

// press Right side key to move and sum logic
function shiftRight() {
  for (let i = 0; i < 4; i++) {
    for (let j = 2; j >= 0; j--) {
      if (array[i][j] !== "") {
        if (j < 3 && (array[i][j + 1] === "" || array[i][j + 1] === array[i][j])) {
          if (array[i][j + 1] === array[i][j]) {
            array[i][j + 1] *= 2;
            array[i][j] = "";
          } else if (array[i][j + 1] === "") {
            array[i][j + 1] = array[i][j];
            array[i][j] = "";
          }
          j++;
        }
      }
    }
  }
  random();
  table();
  if (isGameOver()) showGameOver();
}

// press up side key to move and sum logic
function shiftUp() {
  for (let j = 0; j < 4; j++) {
    for (let i = 1; i < 4; i++) {
      if (array[i][j] !== "") {
        if (i > 0 && (array[i - 1][j] === "" || array[i - 1][j] === array[i][j])) {
          if (array[i - 1][j] === array[i][j]) {
            array[i - 1][j] *= 2;
            array[i][j] = "";
          } else if (array[i - 1][j] === "") {
            array[i - 1][j] = array[i][j];
            array[i][j] = "";
          }
          i--;
        }
      }
    }
  }
  random();
  table();
  if (isGameOver()) showGameOver();
}

// press down side key to move and sum logic
function shiftDown() {
  for (let j = 0; j < 4; j++) {
    for (let i = 2; i >= 0; i--) {
      if (array[i][j] !== "") {
        if (i < 3 && (array[i + 1][j] === "" || array[i + 1][j] === array[i][j])) {
          if (array[i + 1][j] === array[i][j]) {
            array[i + 1][j] *= 2;
            array[i][j] = "";
          } else if (array[i + 1][j] === "") {
            array[i + 1][j] = array[i][j];
            array[i][j] = "";
          }
          i++;
        }
      }
    }
  }
  random();
  table();
  if (isGameOver()) showGameOver();
}

// New Game Button click
function refreshPage() {
  window.location.reload();
}