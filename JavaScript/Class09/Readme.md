# JavaScript Class 09 – Review & Mini Project: Student Profile Manager

---

##  Topics Covered

* Review of JS Fundamentals (variables, arrays, objects, functions)
* Hands-on Mini Project with HTML, CSS & JavaScript
* Working with Input Fields, Event Handling
* DOM Manipulation to Dynamically Add Table Rows
* Conditional Styling using JavaScript & CSS

---

## 💡 Project Overview: Student Profile Manager

This simple project helps us apply core JavaScript skills by:

* Taking input for name, ID, and GPA of a student
* Storing each student as an object inside an array
* Displaying all student records in a table
* Highlighting “Pass” or “Fail” students using colors

---

## 👣 Step-by-Step Process

### Step 1: Setup HTML Structure (index.html)

We need:

* Input fields to receive student data
* Buttons to trigger actions (Add & Show)
* A table to display the student list

```html
<h2>Student Profile Manager</h2>

<input type="text" id="name" placeholder="Student Name">
<input type="text" id="id" placeholder="Student Id">
<input type="number" id="gpa" placeholder="GPA">

<button onclick="addStudent()">Add Student</button>
<button onclick="showStudents()">Show All</button>

<table id="studentTable">
    <tr>
        <th>Name</th>
        <th>Id</th>
        <th>GPA</th>
        <th>Status</th>
    </tr>
</table>
```

#### When the user clicks Add Student, we’ll store the data in an array. When Show All is clicked, we’ll loop through the array and display students in the table.

---

### Step 2: Style the App with CSS (style.css)

Add simple styles to make the form and table look clean and readable:

```css
body {
  font-family: sans-serif;
  padding: 30px;
  background-color: #f9f9f9;
}
input, button {
  padding: 10px;
  margin: 5px;
}
table {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 2px solid #ccc;
  padding: 10px;
  text-align: left;
}
.pass {
  background-color: #d4edda; /* greenish */
}
.fail {
  background-color: #f8d7da; /* reddish */
}
```

---

### Step 3: JavaScript Logic (script.js)

Now we write the core logic using JavaScript.

✅ Step 3.1: Define an empty array to store student data:

```js
let students = [];
```

✅ Step 3.2: Add student to the array (called when “Add Student” button is clicked):

```js
function addStudent() {
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const gpa = parseFloat(document.getElementById('gpa').value);

  // Validation
  if (name === '' || id === '' || isNaN(gpa)) {
    alert("Please fill all fields correctly!");
    return;
  }

  const student = {
    name: name,
    id: id,
    gpa: gpa,
    status: gpa >= 2.5 ? 'Pass' : 'Fail'
  };

  students.push(student);

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('id').value = '';
  document.getElementById('gpa').value = '';
}
```

###  Explanation:

* We get input values using getElementById.
* We create a student object with name, id, gpa, and status.
* status is calculated using a ternary condition: gpa >= 2.5 is Pass.
* Then we push this object into the students array.

✅ Step 3.3: Show all students (called when “Show All” is clicked):

```js
function showStudents() {
  const table = document.getElementById('studentTable');

  // Reset the table headers
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Id</th>
      <th>GPA</th>
      <th>Status</th>
    </tr>
  `;

  // Loop through students and display each one
  students.forEach(function(student) {
    let row = table.insertRow();
    row.className = student.status === 'Pass' ? 'pass' : 'fail';

    row.insertCell(0).innerText = student.name;
    row.insertCell(1).innerText = student.id;
    row.insertCell(2).innerText = student.gpa;
    row.insertCell(3).innerText = student.status;
  });
}
```

###  Explanation:

* First, we reset the table and include headers.
* Then, we loop through each student using forEach.
* For each student, we create a new row in the table.
* We apply a CSS class (pass or fail) depending on GPA.

---

## ✅ Final Output (How It Works)

1. Type Student Name, ID, and GPA into the fields.
2. Click “Add Student” → student gets stored.
3. Click “Show All” → all students appear in the table.
4. Green row = Pass (GPA ≥ 2.5), Red row = Fail.

---

## 💡 Bonus Ideas for Practice

1. 🔄 Add a "Clear All Students" button to reset the array and table.
2. 📊 Show total number of students and how many passed/failed.
3. 🔍 Add GPA filtering (e.g., show only students with GPA > 3).
4. 🎓 Add a dropdown for selecting department or year.
5. ✏️ Make table editable or deletable row-by-row.

---

## Instructor: Muaz Muhammad
## Course: Full Stack Web Development
## Date: 2025-05-19
