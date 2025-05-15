
# JavaScript Class 07 – Arrays & Array Methods

---

## 🎯 Topics Covered

* JS Arrays
* JS Array Methods
* JS Array Search
* JS Array Sort
* JS Array Iteration
* JS Array with const

---

## 📦 1. JavaScript Arrays

Arrays hold multiple values in a single variable.

🔹 Syntax:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

🔹 Access by index:

```javascript
console.log(fruits[0]); // Apple
```

---

## 🛠️ 2. JS Array Methods

Common array methods used in class:

| Method        | Description                             |
| ------------- | --------------------------------------- |
| pop()         | Removes the last element                |
| push(item)    | Adds an item at the end                 |
| splice(index) | Removes elements starting from index    |
| concat()      | Joins two or more arrays                |
| forEach()     | Executes a function for each array item |

🔹 Example:

```javascript
const fruits = ["Mango", "Banana", "Apple"];
fruits.pop();                // Removes "Apple"
fruits.push("Jackfruit");    // Adds "Jackfruit"
```

---

## 🔍 3. JS Array Search

Use methods like indexOf(), includes() to find elements.

🔹 Example:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Banana")); // true
```

---

## 🔢 4. JS Array Sort

Sorts array alphabetically or with custom compare functions.

🔹 Example:

```javascript
let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
```

---

## 🔁 5. JS Array Iteration

Loop through arrays using:

* for loop
* forEach()
* map()
* for...of

🔹 Example:

```javascript
fruits.forEach(function(item) {
  console.log(item);
});
```

---

## 🔒 6. JS Array Const

Declaring an array with const means the reference can’t change, but elements can be modified.

🔹 Example:

```javascript
const fruits = ["Apple", "Banana"];
fruits.push("Mango");   // ✅ allowed
fruits = ["Orange"];    // ❌ error
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
  <title>Js cls 07</title>
</head>
<body>
  <h1>Js Arrays</h1>
  <button onclick="showArray()">show Fruits</button>
  <div class="box" id="output"></div>

  <script src="script.js"></script>
</body>
</html>
```

📁 script.js

```javascript
function showArray() {
  const fruits = ["Mango", "Banana", "Apple"];
  
  fruits.pop();               // removes "Apple"
  fruits.splice(2);           // removes from index 2 onward
  fruits.push("Jackfruit");   // adds new item

  let text = "<ul>";
  fruits.forEach(item => text += `<li>${item}</li>`);
  text += "</ul>";

  document.getElementById("output").innerHTML = text;
}

// Array Concatenation Example
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
```

---

## 🧪 Practice Section

1. Create an array of 5 countries and display them using forEach().
2. Try array methods: push(), pop(), splice(), sort(), concat().
3. Check if an item exists in the array using includes().
4. Merge two arrays using concat and print the result.

---

## Instructor: Muaz Muhammad
## Course: Full Stack Web Development
## Date: 2025-05-15