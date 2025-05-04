
# JavaScript Class 01 – Introduction to JavaScript

## Topics Covered

1. JavaScript Introduction
2. JS Where To Place
3. JS Output Methods
4. JS Syntax
5. JS Statements
6. JS Comments

---

## 1. JavaScript Introduction

JavaScript (JS) is a powerful programming language used to make web pages interactive. It runs in the browser and enhances user experience.
Example uses: image sliders, pop-ups, validation, dynamic content, etc.

---

## 2. JavaScript Where To

JavaScript can be placed in 3 ways:

* Inline (inside HTML tag)
* Internal (inside script tag HTML )
* External (linked with .js file)

✅ Best practice: use External JS for better organization.

---

## 3. JavaScript Output

JavaScript outputs content using:

* alert("message") – Shows a pop-up alert box
* document.write() – Writes directly into the HTML document
* console.log() – Outputs to browser’s developer console
* innerHTML – Changes HTML content dynamically

### Example:

HTML:

```html
<button onclick="alert('Hello, I am not Java or Lava')">Click Me</button>
<button onclick="document.write(5 + 6)">Sum Up</button>
<!-- <p id="demo"></p> -->
```

script.js:

```js
// Using console
console.log(5 + 6);

// Using document.write
document.write(5 + 6);

// Using innerHTML
// document.getElementById("demo").innerHTML = "I'm JavaScript";
```

---

## 4. JavaScript Syntax

JS is case-sensitive and uses semicolons ; to end statements. Variables can be declared using let, const, or var.

Example:

```js
let a, b, c;
a = 5;
b = 10;
c = a * b;
document.write(c); // Output: 50
```

---

## 5. JavaScript Statements

Statements are instructions that the browser executes line-by-line.

Example:

```js
let name = "Muaz";
console.log(name);
```

---

## 6. JavaScript Comments

Used to explain code or prevent execution:

* Single-line: // This is a comment
* Multi-line:

```js
/* This is a
multi-line comment */
```

---

## Practice Section

1. Create three buttons to show alert, write sum, and console log a message.
2. Create an external JavaScript file and link it properly.
3. Use document.getElementById() to change text content dynamically.
4. Write both single and multi-line comments in your JS code.

---

### Instructor: Muaz Muhammad

### Course: Full Stack Web Development

### Date: \[04-05-2025]


