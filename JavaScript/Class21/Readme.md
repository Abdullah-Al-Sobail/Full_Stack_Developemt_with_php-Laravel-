# **JavaScript Class 21: Playing with Elements & Events**

## **Topics Covered**

- **JS: Playing with Elements**
  Creating, inserting, reordering, cloning, styling and attributing elements
- **JS Events**
  Event types, event object, bubbling/capturing, `preventDefault`, `stopPropagation`
- **JS: Playing with Events**
  Inline vs `addEventListener`, multiple handlers, delegation, form & input events

---

## **1. Playing with Elements – What & Why**

The DOM is dynamic—you can **create**, **insert**, **reorder**, **clone**, **style**, and **delete** elements as the user interacts with a page. Mastering these operations is essential for building interactive UIs.

### Core Operations:

- **Create**: `document.createElement('div')`
- **Text/HTML**: `el.textContent = '...'` vs `el.innerHTML = '<b>..</b>'`
  _(Prefer `textContent` for safety)_
- **Insert / Move**:

  - `parent.appendChild(child)` – appends to the end (moves if exists)
  - `parent.prepend(child)` – inserts at beginning
  - `parent.insertBefore(newNode, refNode)` – insert before reference
  - `el.insertAdjacentElement(position, node)` – flexible (`'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'`)

- **Replace / Remove**:

  - `old.replaceWith(newNode)` (modern) / `parent.replaceChild(newNode, oldNode)`
  - `el.remove()`

- **Style & Attributes**:

  - `el.style.color = 'red'`
  - `el.classList.add/remove/toggle('className')`
  - `el.setAttribute('data-key','value')` / `el.dataset.key = 'value'`

> ⚠️ **Important:**
> Appending an element that already exists in the DOM **moves** it. If you need a **copy**, use `el.cloneNode(true)`.

---

## **2. JS Events – Essentials**

Every user action triggers an **event** (click, input, submit, keydown, change, load, error, etc.). You can handle events in two ways:

### Ways to attach handlers

1. **Inline** (not recommended for larger apps):

```html
<button onclick="show()">Click</button>
```

2. **Property**:

```js
element.onclick = function(e) { ... }
```

3. **`addEventListener`** (recommended):

```js
element.addEventListener("click", handler);
```

### Event Object & Flow

- `event.target` – origin element of the event
- `event.currentTarget` – the element currently handling the event
- `event.preventDefault()` – prevent default action (e.g., link navigation, form submit)
- `event.stopPropagation()` – stop event from bubbling up

### Event Delegation

Attach one handler on a **parent** to handle events from **children**. Efficient for dynamic content:

```js
parent.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    // handle li click
  }
});
```

---

## **3. Example – Class Demo Code (Elements & Events)**

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="wrapper">
      <div class="boxes">
        <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove">
          <h4>Box 1</h4>
        </div>
        <div id="box2" class="box" data-atr="box2">
          <h4>Box 2</h4>
        </div>
        <div id="box3" class="box" data-atr="box3">
          <h4>Box 3</h4>
          Lorem ipsum <strong>dolor sit</strong>
          <p class="box3-paragraph">
            amet, <em>consectetur</em> adipisicing elit,
            <strong>sed do eiusmod</strong> tempor incididunt ut labore et
            dolore magna aliqua
          </p>
        </div>
        <div id="box4" class="box" data-atr="box4">
          <h4>Box 4</h4>
          <ul>
            <li>About this document</li>
            <li><a href="#">JavaScript DOM Manipulation</a></li>
            <li><a href="#">Learn.</a></li>
          </ul>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

### `style.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "consolas", monospace;
  background-color: #e3e3e3;
}

.wrapper {
  display: flex;
  margin: 0 auto;
  width: 460px;
  align-items: center;
  min-height: 100vh;
}

.boxes {
  width: 100%;
}

.box {
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  margin: 15px 0;
  padding: 25px;
  width: 100%;
  text-align: center;
  box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25);
}

.box h4 {
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 28px;
}

.box ul {
  list-style: none;
}
.box ul li {
  margin: 5px 0;
}
.box ul li a {
  display: inline-block;
  text-decoration: none;
  background-color: #fff;
  color: #333;
  padding: 2px 5px;
  border-radius: 4px;
}

#box1 {
  background-color: #f44336;
}
#box2 {
  background-color: #9c27b0;
}
#box3 {
  background-color: #3f51b5;
}
#box4 {
  background-color: #4caf50;
}

.black-bg {
  background-color: #000;
}
```

### `script.js`

```js
// ===== Create elements =====
var selecABox = document.getElementById("box1");

var newParagraph = document.createElement("p");
var newDiv = document.createElement("div");
var myName = "Muaz Muhammad";

newParagraph.textContent = "My name is : " + myName;
newDiv.innerHTML = "<p> I am in Dom </p>";

// classes & attributes
newDiv.classList.add("new-div");
newDiv.classList.remove("new-div"); // removed again
newDiv.setAttribute("data-attr", "something");

// inline styles
newDiv.style.backgroundColor = "#000";
newDiv.style.color = "#fff";

// ===== Insert in multiple places (Watch out: it MOVES the same node) =====
var box1 = document.getElementById("box1");
box1.insertAdjacentElement("afterbegin", newDiv);
box1.insertAdjacentElement("beforeend", newParagraph);

var box2 = document.getElementById("box2");

// This MOVES the existing newDiv to before box2
box2.insertAdjacentElement("beforebegin", newDiv);
// This MOVES newParagraph after box2
box2.insertAdjacentElement("afterend", newParagraph);

// Appending box2 inside box1 (moves box2)
box1.appendChild(box2);

// Insert box2 before box1's <h4>
var box1h4 = document.querySelector("#box1>h4");
box1.insertBefore(box2, box1h4);

// Remove previousSibling (could be a text node!)
newParagraph.previousSibling.remove();

// TIP: If you need a copy of an existing node, use:
// const copiedDiv = newDiv.cloneNode(true); // deep clone
```

---

## **4. Mini Project – Events & DOM Together**

### `project.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project</title>
    <link rel="stylesheet" href="project.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="boxes">
        <div id="box1" class="box" data-atr="box1" data-extra="attrToRemove">
          <h4>Box 1</h4>
          <button id="btn-click-me" type="button" name="click">Click Me</button>
        </div>
        <div id="box2" class="box" data-atr="box2">
          <h4>Box 2</h4>
          <div class="images">
            <img src="https://via.placeholder.com/150x150" alt="valid-img" />
            <img
              src="https://audkjskjghkfgdbgfbgjdfg.fhgfkdbgjdb/fbdsfjhbf.png"
              alt="invalid-img"
            />
          </div>
        </div>
        <div id="box3" class="box" data-atr="box3">
          <h4>Box 3</h4>
          Lorem ipsum <strong>dolor sit</strong>
          <p class="box3-paragraph">
            amet, <em>consectetur</em> adipisicing elit,
            <strong>sed do eiusmod</strong> tempor incididunt ut labore et
            dolore magna aliqua
          </p>
        </div>
        <div id="box4" class="box" data-atr="box4">
          <h4>Box 4</h4>
          <ul>
            <li onclick="show()">About this document</li>
            <li id="link">
              <a href="https://www.w3schools.com/"
                >JavaScript DOM Manipulation</a
              >
            </li>
            <li><a href="https://www.w3schools.com/">Learn Dom </a></li>
          </ul>
        </div>
        <div id="box5" class="box">
          <h4>Input</h4>
          <form>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="text" name="email" placeholder="Your Email" />
            <button type="submit" name="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <script src="project.js" charset="utf-8"></script>
  </body>
</html>
```

### `project.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "consolas", monospace;
  background-color: #e3e3e3;
}

button {
  background-color: #fff;
  border: none;
  text-transform: uppercase;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 900;
  margin-top: 10px;
}

input {
  border: none;
  display: block;
  margin: 10px auto;
  width: 100%;
  padding: 8px 15px;
  border-radius: 4px;
}

.wrapper {
  display: flex;
  margin: 0 auto;
  width: 460px;
  align-items: center;
  min-height: 100vh;
}
.boxes {
  width: 100%;
}

.box {
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  margin: 15px 0;
  padding: 25px;
  width: 100%;
  text-align: center;
  box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25);
}
.box h4 {
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 28px;
}
.box ul {
  list-style: none;
}
.box ul li {
  margin: 5px 0;
}
.box ul li a {
  display: inline-block;
  text-decoration: none;
  background-color: #fff;
  color: #333;
  padding: 2px 5px;
  border-radius: 4px;
}

#box1 {
  background-color: #f44336;
}
#box2 {
  background-color: #9c27b0;
}
#box3 {
  background-color: #3f51b5;
}
#box4 {
  background-color: #4caf50;
}

.images {
  margin-top: 10px;
}
.images img {
  display: block;
  margin: 0 auto;
  padding: 10px 0;
}

.black-bg {
  background-color: #000;
}
```

### `project.js`

```js
function show() {
  alert("this dom is created for me");
}

// Inline property-based handler
const clickMeBtn = document.getElementById("box1");
clickMeBtn.onclick = function (event) {
  event.stopPropagation();
  console.log("button Clicckd");
};

// addEventListener supports multiple handlers & better control
const box1 = document.getElementById("box1");
box1.addEventListener("click", function () {
  console.log("Click on box1");
  console.log("Click on box1 again");
});

// Prevent default on link (example)
// const link = document.getElementById('link');
// link.addEventListener('click', function(event){
//   event.preventDefault();
// })

// Event Delegation on UL in #box4
var box4 = document.getElementById("box4");
box4.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("clickd on the list item");
  }
});

// Form & Input Events
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button[type=submit]");

inputs[0].addEventListener("change", function (event) {
  console.log(event.target.value);
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (inputs[0].value === "" || inputs[1].value === "") {
    alert("Please fill the input field");
  } else {
    var input0Data = inputs[0].value;
    var input1Data = inputs[1].value;
    console.log("Your Name: ", input0Data, "and Your Email: ", input1Data);
  }
});

// BONUS: Handle image load/error (robust UI)
document.querySelectorAll(".images img").forEach((img) => {
  img.addEventListener("error", () => {
    img.alt = "Image failed to load.";
    img.style.border = "2px solid #f44336";
  });
  img.addEventListener("load", () => {
    img.style.border = "2px solid #4CAF50";
  });
});
```

---

## **5. Step-by-Step Process (How the Class Code Works)**

### A. Playing with Elements

1. **Create elements** using `createElement('div')`, `createElement('p')`.
2. **Fill content** with `textContent` (safe) or `innerHTML` (accepts HTML).
3. **Style & attributes** with `.style`, `.classList`, `.setAttribute`, `.dataset`.
4. **Insert them** into the DOM using:

   - `insertAdjacentElement('afterbegin'|'beforeend'|...)`
   - `appendChild()` / `insertBefore()`

5. Understand that **inserting the same element twice moves it**. Use `cloneNode(true)` if you need multiple copies.

### B. Event Handling

1. Attach a listener with `addEventListener('click', handler)`.
2. Use the **event object**: `event.target`, `event.currentTarget`.
3. Use `preventDefault()` for links & forms to avoid navigation/submission.
4. Use `stopPropagation()` to avoid bubbling to parent listeners.
5. Use **delegation** (listen on parent, handle child clicks efficiently).

### C. Forms & Validation

1. Read input values: `input.value`.
2. Validate before submit.
3. `preventDefault()` to stop real submission (for SPA/JS handling).
4. Provide feedback (alerts, UI highlights).

---

## **6. Common Pitfalls & Pro Tips**

- **Reusing nodes**: Appending an existing DOM node **moves** it. Use `cloneNode(true)` to copy.
- **`previousSibling` vs `previousElementSibling`**:
  `previousSibling` can be a text node (like whitespace). Prefer `previousElementSibling` when you mean elements.
- **Inline `onclick`** is okay for quick demos; prefer `addEventListener` for real apps.
- **Multiple listeners**: `addEventListener` allows more than one handler. `.onclick` does not.
- **Remove listeners**: Keep a named function reference to remove:
  `el.removeEventListener('click', handlerRef)`.
- **Delegation**: Excellent for lists or dynamic elements.

---

## **7. Practice Tasks**

1. **Clone & Insert**

   - Create a `<div>` with text and class. Clone it 3 times and insert clones into `#box2`, `#box3`, `#box4`.

2. **Delegated List Actions**

   - Add a "Delete" button next to each `<li>` inside `#box4`. Use **event delegation** on the `<ul>` to remove clicked items.

3. **Prevent Navigation**

   - Prevent default on all `<a>` links in `#box4`. Show an alert: “Links are disabled for demo.”

4. **Keyboard Interaction**

   - Add an input in `#box5` that listens to `keyup`. When user presses Enter, append the input value as a new `<li>` in `#box4 ul`.

5. **Toggle Theme**

   - Add a button to toggle a `.black-bg` class on `#box3`. Use `classList.toggle()`.

---

### Instructor: Muaz Muhammad

### Course: Full Stack Web Development

### Date: 13th August, 2025
