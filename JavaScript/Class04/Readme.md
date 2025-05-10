
# JavaScript Class 04 – Functions, Arrow Functions, & this Keyword

---

##  Topics Covered

* JavaScript Functions
* Arrow Functions (ES6)
* this Keyword

---

##  1. JavaScript Functions

A function is a block of code that performs a specific task and runs when it is called.

🔹 Syntax:

```javascript
function functionName(parameters) {
  // code to execute
}
```

🔹 Example:

```javascript
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Muaz")); // Output: Hello, Muaz
```

🔹 Function Expression:

```javascript
var funcName = function () {
  console.log("Hello, I am from function");
};
funcName();
```

🔹 Function with Parameters & Return:

```javascript
function sumMachine(num1, num2) {
  return num1 + num2;
}
console.log(sumMachine(4, 6)); // Output: 10
```

---

##  2. Arrow Functions

Arrow functions offer a shorter syntax for writing functions and don’t have their own this.

🔹 Syntax:

```javascript
const functionName = (parameters) => expression;
```

🔹 Example:

```javascript
const greetArrow = name => "Hi, " + name;
console.log(greetArrow("Muaz")); // Output: Hi, Muaz
```

🔹 Key Features:

* No separate this binding
* More concise syntax
* Best for non-method functions

---

##  3. The this Keyword

this refers to the object from which a function is called.

🔹 In regular functions:

```javascript
const person = {
  name: "Muaz",
  greet: function () {
    console.log("Regular: " + this.name); // Output: Muaz
  }
};
person.greet();
```

🔹 In arrow functions:

```javascript
const person = {
  name: "Muaz",
  greetArrow: () => {
    console.log("Arrow: " + this.name); // Output: undefined
  }
};
person.greetArrow();
```

Why? Because arrow functions inherit this from their lexical (outer) scope and don’t bind their own this.

---

##  Code Demonstration Used in Class

📁 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Class 04</title>
</head>
<body>
  <h2>JavaScript Function Examples</h2>
  <button onclick="showGreet()">Regular Function</button><br><br>
  <button onclick="showArrow()">Arrow Function</button><br><br>
  <button onclick="showThis()">this Keyword</button><br><br>
  <div id="output"></div>

  <script src="script.js"></script>
</body>
</html>
```

📁 script.js

```javascript
function greet(name) {
  return "Hello, " + name;
}

const greetArrow = name => "Hi, " + name;

const person = {
  name: "Muaz",
  greet: function () {
    document.getElementById("output").innerText = "Regular: " + this.name;
  },
  greetArrow: () => {
    document.getElementById("output").innerText = "Arrow: " + this.name;
  }
};

function showGreet() {
  document.getElementById("output").innerText = greet("Muaz");
}

function showArrow() {
  document.getElementById("output").innerText = greetArrow("Muaz");
}

function showThis() {
  person.greet();       // "Regular: Muaz"
  person.greetArrow();  // "Arrow: undefined"
}
```

---

## 🛠️ Practice Section

1. Write a function that multiplies two numbers and returns the result.
2. Convert the same function to an arrow function.
3. Create an object with a method using both regular and arrow functions. Use console.log(this) in each to see the difference.

---

### Instructor: Muaz Muhammad
### Course: Full Stack Web Development
### Date: 10-05-2025

