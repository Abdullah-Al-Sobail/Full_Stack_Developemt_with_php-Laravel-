# JavaScript Class 05 – Conditional Statements

---

## 🎯 Topics Covered

* if Statement
* if...else Statement
* if...else if Statement
* switch Statement

---

## 🧠 1. if Statement

Used to run a block of code only if a specific condition is true.

🔹 Syntax:

```javascript
if (condition) {
  // code to execute if condition is true
}
```

🔹 Example:

```javascript
let age = 25;
if (age >= 18) {
  console.log("You are an adult");
}
```

---

## 🧠 2. if...else Statement

Executes one block if true, another if false.

🔹 Syntax:

```javascript
if (condition) {
  // if true
} else {
  // if false
}
```

🔹 Example:

```javascript
let age = 16;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
```

---

## 🧠 3. if...else if Statement

Checks multiple conditions in sequence.

🔹 Syntax:

```javascript
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // default
}
```

🔹 Example:

```javascript
let score = 45;
if (score >= 80) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}
```

---

## 🧠 4. switch Statement

Tests a value against many possible cases.

🔹 Syntax:

```javascript
switch(expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // default code
}
```

🔹 Example:

```javascript
let roll = 1;
switch (roll) {
  case 1:
    console.log("Arijit");
    break;
  case 2:
    console.log("Mahzabin");
    break;
  default:
    console.log("Others");
}
```

---

## 💻 Code Demonstration Used in Class

📁 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>class 05</title>
</head>
<body>
  <h2>Conditional Statements</h2>
  <button onclick="checkAge()">Check Age</button><br><br><br>
  <button onclick="result()">Show Grade</button><br><br><br>
  <button onclick="showDay()">Show Day</button><br><br><br>
  <div class="output" id="output">Output</div>

  <script src="script.js"></script>
</body>
</html>
```

📁 script.js

```javascript
function checkAge() {
  let age = 16;
  if (age >= 18) {
    document.getElementById("output").innerHTML = "You can vote";
  } else {
    document.getElementById("output").innerHTML = "You cannot vote";
  }
}

function result() {
  let score = 45;
  if (score >= 80) {
    document.getElementById("output").innerHTML = "Grade A";
  } else if (score >= 70) {
    document.getElementById("output").innerHTML = "Grade B";
  } else if (score >= 50) {
    document.getElementById("output").innerHTML = "Grade C";
  } else {
    document.getElementById("output").innerHTML = "Grade F";
  }
}

function showDay() {
  let day = "saturday";
  let message;
  switch (day) {
    case "Monday":
      message = "Start of the week";
      break;
    case "thursday":
      message = "Almost weekend";
      break;
    case "Friday":
      message = "Weekend";
      break;
    default:
      message = "Regular day";
  }
  document.getElementById("output").innerHTML = message;
}
```

---

## 🛠️ Practice Section

1. Create a function that checks if a number is positive, negative, or zero.
2. Use switch to return the name of a month based on its number (1–12).
3. Try nesting if inside another if (nested condition).

---

### Instructor: Muaz Muhammad
### Course: Full Stack Web Development
### Date: 2025-05-12
