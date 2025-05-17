# JavaScript Class 08 – JS Objects & Constructors


## 🎯 Topics Covered

* JavaScript Objects
* Object Properties
* Object Methods
* Object Display
* Object Constructors

---

## 🧱 1. JavaScript Objects

An object is a collection of key-value pairs.

🔹 Basic Syntax:

```javascript
let person = {
  name: "Muaz",
  age: 25,
};
```

---

## 🔑 2. Object Properties

Properties are values associated with a JavaScript object.

🔹 Accessing Properties:

```javascript
console.log(person.name);     // Muaz
console.log(person["age"]);   // 25
```

---

## 🔁 3. Object Methods

Functions stored in object properties are called methods.

🔹 Example:

```javascript
let person = {
  name: "Muaz",
  greet: function() {
    return "Hello, I am " + this.name;
  }
};

console.log(person.greet());  // Hello, I am Muaz
```

---

## 👓 4. Object Display

Ways to display object content:

* document.getElementById().innerHTML
* Object.values()
* Object.entries()
* JSON.stringify()

🔹 Example:

```javascript
console.log(Object.entries(person));
console.log(JSON.stringify(person));
```

---

## 🏗️ 5. Object Constructors

Constructor functions are blueprints for creating multiple objects.

🔹 Syntax:

```javascript
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.info = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
}

let s1 = new Student("Ayaan", 25);
let s2 = new Student("Sobail", 22);
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
  <title>js cls08</title>
</head>
<body>
  <h1>js objects</h1>
  <button onclick="showPerson()">Show Person</button>
  <button onclick="showCons()">Show Constructor</button>

  <div class="output" id="output"></div>

  <script src="script.js"></script>
</body>
</html>
```

📁 script.js

```javascript
let person = {
  name: 'Muaz',
  age: 25,
  greet: function() {
    return "Hello, I am " + this.name;
  }
};

function showPerson() {
  let result = `
    Name: ${person.name} <br>
    Age: ${person.age} <br>
    Greet: ${person.greet()}
  `;
  document.getElementById('output').innerHTML = result;
}

function showCons() {
  function Student(name, age) {
    this.name = name;
    this.age = age;
    this.info = function() {
      return `Name: ${this.name}, Age: ${this.age}`;
    };
  }

  let s2 = new Student('Sobail', 22);
  document.getElementById('output').innerHTML = s2.info();
}
```

---

## 🧪 Practice Section

1. Create an object called car with properties brand, model, and year.
2. Add a method to the object that displays all details.
3. Use Object.entries() to show all key-value pairs.
4. Create multiple student objects using a constructor.
5. Convert an object into a JSON string using JSON.stringify().

---

## Instructor: Muaz Muhammad
## Course: Full Stack Web Development
## Date: 2025-05-17

