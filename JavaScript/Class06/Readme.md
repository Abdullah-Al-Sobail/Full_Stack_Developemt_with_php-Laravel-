# JavaScript Class 06 – Loop Statements

---

## 🎯 Topics Covered

* for loop
* while loop
* do...while loop
* for...in loop
* for...of loop

---

## 🔁 1. for loop

Used to repeat a block of code a specific number of times.

🔹 Syntax:

```javascript
for (initialization; condition; increment) {
  // code to execute
}
```

🔹 Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Step: " + i);
}
```

---

## 🔁 2. while loop

Executes a block of code as long as the condition is true.

🔹 Syntax:

```javascript
while (condition) {
  // code to execute
}
```

🔹 Example:

```javascript
let i = 0;
while (i < 5) {
  console.log("Step: " + i);
  i++;
}
```

---

## 🔁 3. do...while loop

Runs the block at least once before checking the condition.

🔹 Syntax:

```javascript
do {
  // code to execute
} while (condition);
```

🔹 Example:

```javascript
let i = 0;
do {
  console.log("Step: " + i);
  i++;
} while (i < 5);
```

---

## 🗃️ 4. for...in loop

Used to loop through properties of an object.

🔹 Syntax:

```javascript
for (let key in object) {
  // code using object[key]
}
```

🔹 Example:

```javascript
const person = {name: "Muaz", age: 25};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

---

## 🍎 5. for...of loop

Used to iterate through iterable objects like arrays or strings.

🔹 Syntax:

```javascript
for (let item of iterable) {
  // code using item
}
```

🔹 Example:

```javascript
let fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}
```

---

## 💻 Class Code Demo

📁 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>js class06</title>
  <style>
    body { font-family: sans-serif; background: #f0f8ff; padding: 20px; }
    button { margin: 5px; padding: 10px; background: #673ab7; color: white; border: none; }
    #output { margin-top: 20px; padding: 15px; background: #fff3e0; border-left: 5px solid #ff9800; }
  </style>
</head>
<body>
  <h1>Loop</h1>

  <button onclick="runForLoop()">For Loop</button>
  <button onclick="runWhileLoop()">While Loop</button>
  <button onclick="runDoWhileLoop()">Do...While Loop</button>
  <button onclick="runForInLoop()">For...In</button>
  <button onclick="runForOfLoop()">For...Of</button>

  <div id="output"></div>

  <script src="script.js"></script>
</body>
</html>
```

📁 script.js

```javascript
function runForLoop() {
  let text = "";
  for (let i = 1; i <= 5; i++) {
    text += "For Loop: " + i + "<br>";
  }
  document.getElementById("output").innerHTML = text;
}

function runWhileLoop() {
  let i = 1, text = "";
  while (i <= 5) {
    text += "While Loop: " + i + "<br>";
    i++;
  }
  document.getElementById("output").innerHTML = text;
}

function runDoWhileLoop() {
  let i = 1, text = "";
  do {
    text += "Do...While Loop: " + i + "<br>";
    i++;
  } while (i <= 5);
  document.getElementById("output").innerHTML = text;
}

function runForInLoop() {
  const student = {name: "Muaz", age: 25, city: "Ctg"};
  let text = "";
  for (let key in student) {
    text += key + ": " + student[key] + "<br>";
  }
  document.getElementById("output").innerHTML = text;
}

function runForOfLoop() {
  const fruits = ["Apple", "Banana", "Orange"];
  let text = "";
  for (let fruit of fruits) {
    text += "Fruit: " + fruit + "<br>";
  }
  document.getElementById("output").innerHTML = text;
}
```

---

## 🛠️ Practice Section

1. Print numbers 1 to 10 using a while loop.
2. Print properties of a student object using for...in.
3. Loop through an array of names and display each name using for...of.
4. Use do...while to prompt user input at least once until they enter “stop”.

---

Instructor: Muaz Muhammad
Course: Full Stack Web Development – JavaScript
Date: 2025-05-14

