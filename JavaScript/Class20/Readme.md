#  JavaScript Class 20: DOM Manipulation & Selecting Elements

## Topics Covered

* JS DOM Manipulation (create / insert / remove / replace)
* JS Selecting Elements (`getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, `querySelectorAll`)
* Traversing the DOM (parent/children/siblings/closest)
* `classList`, attributes & `dataset`
* Live collections (`HTMLCollection`) vs static lists (`NodeList`)


---

## 1. Quick DOM (Document Object Model) Recap

The DOM is the browser's in-memory representation of the HTML page. Every HTML element becomes a node. With JavaScript we can **select**, **read**, **change**, **create**, and **remove** nodes.

Important things you do with the DOM:

* **Select** nodes (find element(s))
* **Traverse** (move around: parent, children, siblings)
* **Manipulate** (change text, attributes, classes, styles)
* **Create / insert / remove** nodes dynamically
* **Listen** for events on nodes

---

## 2. Selecting Elements — Methods & Differences

| Method                                  |                  Returns | Notes                                |
| --------------------------------------- | -----------------------: | ------------------------------------ |
| `document.getElementById(id)`           |         single `Element` | Fast, returns `null` if not found    |
| `document.getElementsByClassName(name)` |  `HTMLCollection` (live) | Updates automatically if DOM changes |
| `document.getElementsByTagName(tag)`    |  `HTMLCollection` (live) | Live collection                      |
| `document.querySelector(selector)`      | first matching `Element` | CSS selector syntax                  |
| `document.querySelectorAll(selector)`   |      `NodeList` (static) | Use `.forEach()` to iterate          |

**Live vs Static**

* `HTMLCollection` (live) reflects the document as it changes.
* `NodeList` from `querySelectorAll` is static (won’t auto-update unless you re-run the query).

---

## 3. Creating / Inserting / Removing Nodes (Common APIs)

* `document.createElement(tag)` → create element
* `element.textContent = '...'` → text (safe)
* `element.innerHTML = '<b>...</b>'` → HTML (unsafe for user input)
* `parent.appendChild(child)` → add node at the end
* `parent.prepend(child)` → insert node at start
* `parent.insertBefore(newNode, referenceNode)` → insert before a node
* `element.remove()` → remove element
* `parent.replaceChild(newNode, oldNode)` → replace node
* `element.classList.add('c')`, `.remove()`, `.toggle()`
* `element.setAttribute('name', 'value')`, `element.getAttribute('name')`
* `element.dataset.foo = 'bar'` → `data-foo` attribute

---

## 4. Traversing: common properties

* `element.parentElement`
* `element.children` (only element children)
* `element.childNodes` (includes text nodes)
* `element.firstElementChild`, `element.lastElementChild`
* `element.previousElementSibling`, `element.nextElementSibling`
* `element.closest(selector)` — find nearest ancestor matching selector

---

## 5. Event delegation (brief)

Instead of attaching listeners to many child nodes, attach a single listener to a parent and detect which child triggered the event. Useful for dynamically created elements.

---

## Example Code from Class (HTML + CSS + JS)

> This includes the code you showed in class and expands the `script.js` with step-by-step examples and comments.

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>DOM: Selecting & Manipulation (Class 20)</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div id="dom">
        <h1>Dom</h1>
        <p>
            Lorem ipsum dolor, sit amet , <em>hello</em> adipisicing elit.
            <strong>Quibusdam et nemo aut</strong> sint provident delectus?
        </p>
    </div>

    <div id="box1" class="box"></div>
    <div id="box2" class="box"></div>
    <div id="box3" class="box">
        <p>Lorem ipsum dolor, sit amet , <em>hello</em> adipisicing elit.
            <strong>Quibusdam et nemo aut</strong> sint provident delectus?</p>
    </div>
    <div id="box4" class="box"></div>

    <ul id="myList">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>

    <script src="script.js"></script>
</body>
</html>
```

### `style.css`

```css
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
.box {
  height: 60px;
  width: 90%;
  max-width: 700px;
  margin: 10px 0;
  border: 1px solid #ccc;
  background: #f7f7f7;
  padding: 8px;
}
.new-div {
  border: 2px dashed #2a9d8f;
  padding: 8px;
  margin-top: 8px;
  background: #e8f6f2;
}
.info {
  color: #116466;
  font-weight: bold;
}
#myList li {
  padding: 6px;
  margin: 4px 0;
  background: #fff;
  border-left: 4px solid #66bb6a;
}
```

### `script.js` (step-by-step, annotated)

```js
// -----------------------------
// Section A: Selection examples
// -----------------------------
console.log('DOM ready:', document.readyState);

// 1. By ID (single element)
const box1 = document.getElementById('box1');
console.log('getElementById ->', box1);

// 2. By class name (HTMLCollection - live)
const boxesCollection = document.getElementsByClassName('box');
console.log('getElementsByClassName (live HTMLCollection):', boxesCollection, 'length:', boxesCollection.length);

// 3. By tag name (HTMLCollection - live)
const allDivs = document.getElementsByTagName('div');
console.log('getElementsByTagName (live):', allDivs.length);

// 4. querySelector (first match)
const firstBox = document.querySelector('.box');
console.log('querySelector ->', firstBox);

// 5. querySelectorAll (NodeList - static)
const boxesNodeList = document.querySelectorAll('.box');
console.log('querySelectorAll (static NodeList) -> length:', boxesNodeList.length);

// demonstrate difference live vs static:
console.log('Before adding new .box -> collection length:', boxesCollection.length, ', nodeList length:', boxesNodeList.length);

// create a new .box and append to body
const dynamicBox = document.createElement('div');
dynamicBox.className = 'box';
dynamicBox.id = 'box-dynamic';
dynamicBox.textContent = 'I am dynamic box';
document.body.appendChild(dynamicBox);

console.log('After append -> collection length (live):', boxesCollection.length, ', nodeList length (static, unchanged):', boxesNodeList.length);

// If you want updated static list, re-run querySelectorAll:
const updatedNodeList = document.querySelectorAll('.box');
console.log('Updated nodeList length (after re-query):', updatedNodeList.length);

// -----------------------------
// Section B: Create & Insert elements (step-by-step)
// -----------------------------
const domContainer = document.getElementById('dom');

// Step 1: create a new paragraph
const newPara = document.createElement('p');
const text1 = "Muaz Muhammad";

// use textContent for plain text (safe)
newPara.textContent = 'His name is: ' + text1;
newPara.id = 'info';
newPara.classList.add('info');

// append to container (end)
domContainer.appendChild(newPara);

// Step 2: create another div using innerHTML (shows difference)
const newDiv = document.createElement('div');
newDiv.innerHTML = "<p>Dom is fun <strong>— dynamically added</strong></p>";
newDiv.classList.add('new-div');

// append after the paragraph
domContainer.appendChild(newDiv);

// Step 3: insert an element before another element
const newInsert = document.createElement('p');
newInsert.textContent = 'Inserted BEFORE the first paragraph in #dom';
domContainer.insertBefore(newInsert, domContainer.querySelector('p')); // put it before first <p>

// -----------------------------
// Section C: Manipulation (attributes, dataset, classes)
// -----------------------------
box1.setAttribute('data-role', 'alpha'); // same as dataset
console.log('box1 dataset role:', box1.dataset.role);

box1.classList.add('highlighted'); // add a class (we can style it in CSS)
box1.classList.toggle('highlighted'); // toggles on/off

// style some boxes for demo
const colors = ['#ffdddd', '#ddffdd', '#ddddff', '#fff3cc'];
document.querySelectorAll('.box').forEach((el, idx) => {
    el.style.backgroundColor = colors[idx % colors.length];
});

// -----------------------------
// Section D: Traversal examples
// -----------------------------
const box3 = document.getElementById('box3');
console.log('box3 parentElement ->', box3.parentElement);
console.log('box3 firstElementChild ->', box3.firstElementChild);
console.log('box3 nextElementSibling ->', box3.nextElementSibling);

// closest: find nearest ancestor (example: closest body)
console.log('box3 closest body ->', box3.closest('body'));

// -----------------------------
// Section E: Remove / Replace
// -----------------------------
const box4 = document.getElementById('box4');
// remove box4 after 3 seconds (demo)
setTimeout(() => {
    if (box4) {
        box4.remove();
        console.log('#box4 removed from DOM');
    }
}, 3000);

// Replace dynamicBox content after 4 seconds:
setTimeout(() => {
    const replacement = document.createElement('div');
    replacement.className = 'box';
    replacement.textContent = 'Replacement box (replaced dynamically)';
    dynamicBox.replaceWith(replacement); // modern replace
    console.log('dynamic box replaced');
}, 4000);

// -----------------------------
// Section F: Work with lists & events (simple delegation)
// -----------------------------
const myList = document.getElementById('myList');

// 1) Add a new list item dynamically
const liNew = document.createElement('li');
liNew.textContent = '5 (Added)';
myList.appendChild(liNew);

// 2) Use event delegation: click on the UL to detect which LI was clicked
myList.addEventListener('click', (e) => {
    // if clicked element is an LI (or inside LI) toggle a 'done' state
    const clickedLi = e.target.closest('li');
    if (!clickedLi) return;
    clickedLi.classList.toggle('done');
    // toggle a small inline style to show the change
    clickedLi.style.textDecoration = clickedLi.classList.contains('done') ? 'line-through' : 'none';
});
```

---

## Step-by-step workflow (typical pattern you will use)

1. **Select** the place where you will insert content
   `const container = document.getElementById('dom');`

2. **Create** an element node
   `const p = document.createElement('p');`

3. **Populate** it (textContent safer than innerHTML for plain text)
   `p.textContent = 'Hello world';`

4. **Set attributes/classes** as needed
   `p.classList.add('info'); p.dataset.role = 'meta';`

5. **Insert** it into DOM (`appendChild`, `prepend`, `insertBefore`)
   `container.appendChild(p);`

6. **If needed, attach listeners** to the node or a parent (delegation)
   `container.addEventListener('click', handler);`

7. **Remove/replace** nodes when done
   `p.remove()` or `parent.replaceChild(newNode, oldNode)`

---

## Practice / Exercises

1. **Add & Remove To-Do Items (small project)**

   * Create an input + button. On submit, create a new `<li>` with the to-do text and a "Delete" button.
   * Use event delegation on the parent `<ul>` to handle Delete clicks.

2. **Live vs Static Demo**

   * Use `getElementsByClassName('box')` and `querySelectorAll('.box')`. Append a new `.box` and watch the lengths update (or not) — explain why.

3. **Build an accordion**

   * Use `.closest()` and `classList.toggle()` to show/hide accordion content.

4. **Attribute & dataset practice**

   * Add `data-priority` to some items and style them differently using JS (read dataset values).

---

## Homework

* Build a small **FAQ** page: questions (headers) and answers (hidden). Clicking a question toggles visibility of the answer. Use `classList.toggle` and `closest`/delegation. Bonus: animate height smoothly with CSS transitions.
* Save and restore a simple list to `localStorage` (so items survive refresh).

---

### Instructor: Muaz Muhammad
### Course: Full Stack Web Development
### Date: 11th August 2025


