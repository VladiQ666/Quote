const bl1 = document.getElementById("bl1");
const bl2 = document.getElementById("bl2");
const bl3 = document.getElementById("bl3");
const bl4 = document.getElementById("bl4");

setTimeout(() => {
  bl1.textContent = "Обучайся!";
  bl1.style.backgroundColor = "orange";
  bl1.style.fontSize = "40px";
  bl1.style.width = "400px";
  bl1.style.textAlign = "center";
  bl1.style.border = "5px solid black";
  bl1.style.margin = "10px";
  bl1.style.height = "50px";
}, 1000);

setTimeout(() => {
  bl2.textContent = "Развивайся!";
  bl2.style.backgroundColor = "green";
  bl2.style.fontSize = "40px";
  bl2.style.width = "400px";
  bl2.style.textAlign = "center";
  bl2.style.border = "5px solid black";
  bl2.style.margin = "10px";
  bl2.style.height = "50px";
}, 2000);

setTimeout(() => {
  bl3.textContent = "И помни:";
  bl3.style.backgroundColor = "red";
  bl3.style.fontSize = "60px";
  bl3.style.width = "400px";
  bl3.style.textAlign = "center";
  bl3.style.border = "5px solid black";
  bl3.style.margin = "10px";
  bl3.style.height = "70px";
}, 3000);

setTimeout(() => {
  bl4.textContent = "Живи, а работай в свободное время!";
  bl4.style.backgroundColor = "pink";
  bl4.style.fontSize = "40px";
  bl4.style.width = "400px";
  bl4.style.textAlign = "center";
  bl4.style.border = "5px solid black";
  bl4.style.margin = "10px";
  bl4.style.height = "100px";
}, 5000);

bl1.onclick = () => {
  if (bl1.style.backgroundColor === "orange") {
    bl1.style.backgroundColor = "#000";
  } else {
    bl1.style.backgroundColor = "orange";
  }
};

bl2.onclick = () => {
  if (bl2.style.backgroundColor === "green") {
    bl2.style.backgroundColor = "#000";
  } else {
    bl2.style.backgroundColor = "green";
  }
};

bl3.onclick = () => {
  if (bl3.style.backgroundColor === "red") {
    bl3.style.backgroundColor = "#000";
  } else {
    bl3.style.backgroundColor = "red";
  }
};

bl4.addEventListener('dblclick', () => {
  if (bl4.style.backgroundColor === "pink") {
    bl4.style.backgroundColor = "#000";
  } else {
    bl4.style.backgroundColor = "pink";
  }
});
