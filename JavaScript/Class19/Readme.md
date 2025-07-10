# JavaScript Class 19 – Review & Project: Task Manager (Mini Project)

## Topics Covered:

✅ Project Overview: Task Manager
✅ Review of Key ES6 Concepts:

* Classes & Objects
* Event Listeners
* DOM Manipulation
* Template Literals
* Array Methods (findIndex, forEach)

✅ Hands-on: Build a Task Manager (Add & Delete Tasks)

🚀 Project Goal:

Build a simple Task Manager where users can:

* Add new tasks 📝
* View tasks in a list 📋
* Delete tasks ❌

---

## index.html

Purpose: Create the basic structure and input form.

Key Elements:

✅ <form> for entering tasks
✅ <ul> for listing tasks
✅ Connected < script> and < style> files

Code:

```html
<h1>My Task Manager</h1>

<form id="taskFrom">
  <input type="text" id="taskInput" placeholder="Enter a task" required>
  <button type="submit">Add Task</button>
</form>

<ul id="tasklist"></ul>
```

✅ Step 1: User writes task in the input.
✅ Step 2: On click of “Add Task”, the task gets added to the list.
✅ Step 3: Task can be deleted.

----

## style.css

Purpose: Style the form, list, and buttons.

Key Features:

* Centered content
* Clean list items
* Styled Add & Delete buttons

Example Styles:

```css
body { background-color: #f4f4f4; padding: 30px; max-width: 600px; margin: auto; }
h1 { text-align: center; }
form { display: flex; justify-content: center; gap: 10px; }
input[type="text"] { padding: 10px; flex: 1; border-radius: 4px; }
button { background-color: #2e7d2e; color: white; border-radius: 4px; }
li { background: #fff; padding: 15px; border-left: 5px solid #66bb6a; display: flex; justify-content: space-between; }
```

—

## script.js (Main JavaScript Logic)

### Step-by-Step Code Breakdown:

#### Step 1️⃣ Create the Task Class

* ES6 Class to represent each task

```js
class Task {
    constructor(title) {
        this.id = Date.now();                  // Unique ID based on timestamp
        this.title = title;                    // Task name
        this.createdAt = new Date();           // Creation date
    }

    getDetails() {
        return `${this.title} (Added on: ${this.createdAt.toLocaleString()})`;
    }
}
```

#### Step 2️⃣ Global Variables & DOM Selection

```js
const tasklist = [];                               // Store tasks
const taskFrom = document.getElementById('taskFrom');
const taskInput = document.getElementById('taskInput');
const tasklistUI = document.getElementById('tasklist');
```

#### Step 3️⃣ Render Tasks Function

* Display tasks dynamically using forEach & template literals.

```js
const renderTasks = () => {
    tasklistUI.innerHTML = '';                     // Clear previous list
    tasklist.forEach(({ id, title }) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${title}</span>
            <button onclick="deleteTask(${id})">Delete</button>
        `;
        tasklistUI.appendChild(li);
    });
};
```

#### Step 4️⃣ Add Task (Form Submission)

* Add new Task to tasklist array
* Clear input
* Call renderTasks()

```js
taskFrom.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask = new Task(taskInput.value);
    tasklist.push(newTask);
    taskInput.value = '';
    renderTasks();
});
```

#### Step 5️⃣ Delete Task Function

* Use findIndex to locate task by ID
* Remove from array
* Re-render updated list

```js
const deleteTask = (id) => {
    const index = tasklist.findIndex(task => task.id === id);
    if (index !== -1) {
        tasklist.splice(index, 1);
        renderTasks();
    }
};
```

---
### Final Output:
![Task Manager](./task%20manger.PNG)

#### 📌 What You Learned Recap:

| Feature           | How We Used It                                |
| ----------------- | --------------------------------------------- |
| Class             | Created reusable Task blueprint               |
| Constructor       | Set initial properties (id, title, createdAt) |
| Arrow Function    | Shorter functions (optional)                  |
| Template Literals | Display task details dynamically              |
| forEach           | Render multiple tasks                         |
| Event Listener    | Listen to form submission                     |
| Array Methods     | findIndex to delete                           |

---

### Practice Ideas:

✅ Add Edit functionality
✅ Save tasks to localStorage (so they don't disappear on refresh)
✅ Add checkbox to mark task as Done

---



### Instructor: Muaz Muhammad
### Course: Full Stack Web Development 
### Date: 2025-07-10


