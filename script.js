// Part 1: Variables & Conditionals
let userName = "Roy";
let userAge = 19;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// Part 2: Functions
function greetUser(name) {
  return `Hello, ${name}! Welcome to my project.`;
}

function square(num) {
  return num * num;
}

// Part 3: Loops
function showNumbers() {
  const list = document.getElementById("numberList");
  list.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = "Number " + i;
    list.appendChild(item);
  }
}

let n = 0;
while (n < 10) {
  if (n % 2 === 0) {
    console.log("Even number:", n);
  }
  n++;
}

// Part 4: DOM Interactions
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("greeting").textContent = greetUser(userName);
});

document.getElementById("calculateBtn").addEventListener("click", function () {
  let number = prompt("Enter a number to square:");
  if (number) {
    alert("The square of " + number + " is " + square(Number(number)));
  }
});

document.getElementById("loopBtn").addEventListener("click", showNumbers);
