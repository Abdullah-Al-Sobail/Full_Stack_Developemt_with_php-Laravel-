# JavaScript Class 12: Events, Scope & Hoisting

—

## Topics Covered

1. JavaScript Events
2. JavaScript Scope
3. JavaScript Hoisting

—

### Part 1: JavaScript Events

Events are actions that happen in the browser – like clicking, hovering, typing, selecting – and JavaScript can "listen" and "respond" to them.

✅ Common HTML Events:

| Event       | Triggered When…                         |
| ----------- | --------------------------------------- |
| onclick     | User clicks an element                  |
| onmouseover | Mouse hovers over an element            |
| onchange    | User changes the value (e.g., dropdown) |

👨‍🏫 Example from Class:

index.html

```html
<input type="button" value="Click me!" onclick="popup()">
<div onmouseover="myfunction(event)"></div>

<select id="myFav" onchange="myCar()">
  <option value="Audi">Audi</option>
  <option value="BMW">BMW</option>
</select>

<p id="demo"></p>
```

script.js

🔹 Click Event

```js
function popup(){
    alert("I am JS");
}
```

🔹 Mouseover Event (shows X,Y coordinates)

```js
function myfunction(e){
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinate: (" + x + ","+ y + ")";
    document.getElementById("demo").innerHTML = coor;
}
```

🔹 Change Event (dropdown selection)

```js
function myCar(){
    let selected = document.getElementById("myFav").value;
    document.getElementById("demo").innerHTML = "My fav car is: " + selected;
}
```

—

### Part 2: JavaScript Scope

Scope determines where variables can be accessed in your code.

🧠 Types of Scope:

| Type   | Description                           |
| ------ | ------------------------------------- |
| Global | Accessible anywhere in the script     |
| Local  | Only accessible inside a function     |
| Block  | (let & const) - inside {} blocks only |

📌 Examples:

🔸 Local Scope

```js
function localScope(){
    var local = 'I am local scope';
    console.log(local); // ✅ Works here
}
localScope();
// console.log(local); // ❌ Error: not defined outside
```

🔸 Global Scope

```js
var globalVar = 'I am global scope';

function globalScope(){
    console.log(globalVar); // ✅ Can access globalVar
}
globalScope();

console.log(globalVar); // ✅ Accessible outside too
```

🔸 Nested Functions (Closure Example)

```js
function parentFunc(){
    var a = 6;
    function childFunc(){
        var b = 4;
        console.log('Sum: ' + (a + b)); // ✅ a & b both accessible
    }
    childFunc();
}
parentFunc();
```

—

### Part 3: JavaScript Hoisting

🧠 Hoisting = JS moves declarations to the top before executing.

📌 Only declarations are hoisted, not initializations.

✅ Works:

```js
console.log(x); // undefined
var x = 10;
```

❌ Does NOT work with let/const (they're block-scoped):

```js
console.log(y); // ❌ ReferenceError
let y = 5;
```

—

### Summary Table

| Concept  | Key Point                                                   |
| -------- | ----------------------------------------------------------- |
| Event    | Trigger a function when something happens                   |
| Scope    | Defines where variables are accessible                      |
| Hoisting | Variable/function declarations move to top before execution |

—

📝 Practice Tasks

1. Add a double-click (ondblclick) event to change text color
2. Create a function with both local & global variables
3. Try accessing var/let/const before declaration and log results
4. Create a form with input and handle onkeyup/onblur events

—

## Instructor: Muaz Muhammad
## Course: Full Stack Web Development
## Date: 2025-05-28


