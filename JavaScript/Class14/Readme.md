# JavaScript Class 14 – Strict Mode, Constructor Functions, new Keyword & Inheritance

---

### Topics Covered

1. JavaScript "Strict Mode"
2. Constructor Functions & new Keyword
3. Prototypes and Inheritance

---

### Part 1: JavaScript Strict Mode

Strict mode helps you write cleaner code by throwing errors for unsafe actions. You enable it using:

```js
'use strict';
```

Benefits of Strict Mode:

* Prevents the use of undeclared variables.
* Makes debugging easier.
* Disallows duplicate property names or parameter values.

🔍 Example Without Strict Mode:

```js
name = 'Muaz';  // No error!
console.log(name);  // Output: Muaz
```

 With Strict Mode:

```js
'use strict';
name = 'Muaz';  // ❌ ReferenceError: name is not defined
```

 Strict Mode and Objects:

```js
'use strict';
let obj = { name: 'Tashfiya', job: 'Student' };
Object.preventExtensions(obj);  // Stops adding new properties
obj.age = 23;  // ❌ Fails silently or throws in strict mode
```

---

### Part 2: Constructor Functions & new Keyword

Constructor functions are used to create multiple similar objects efficiently.

✅ Syntax:

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}
```

🔨 Creating objects:

```js
var samir = new Person('Samir Sah', 25, 'Student');
var amir = new Person('Amir Khan', 29, 'Actor');
```

### What does new do?

* Creates a new empty object.
* Binds this to the new object.
* Sets the prototype.
* Returns the object.

---

### Part 3: Prototypes & Shared Methods

Avoid defining functions inside the constructor. Use prototype:

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person.prototype.dateOfBirth = function() {
  console.log(this.name + ' was born in ' + (2025 - this.age));
};

let babu = new Person('Babu', 1, 'Child');
babu.dateOfBirth(); // Output: Babu was born in 2024

// Add shared properties
Person.prototype.address = 'Bangladesh';
console.log(babu.address); // Output: Bangladesh
```

---

### Part 4: Inheritance using Constructor Functions

You can inherit properties from another constructor using call():

```js
function Teacher(name, age, job, subject) {
  Person.call(this, name, age, job);  // Inherit from Person
  this.subject = subject;
}

let muaz = new Teacher('Muaz Muhammad', 25, 'Teacher', 'JavaScript');
console.log(muaz.name); // Output: Muaz Muhammad
console.log(muaz.subject); // Output: JavaScript
```

Note: This only inherits properties, not prototype methods. For full prototype inheritance, Object.create or class syntax would be used (covered in OOP).

—

### Summary Table

| Feature               | Purpose                                       |
| --------------------- | --------------------------------------------- |
| 'use strict'          | Enables strict parsing and error checking     |
| Constructor Function  | Creates multiple similar objects              |
| new Keyword           | Instantiates new objects                      |
| call() in inheritance | Borrows constructor for inheritance           |
| prototype             | Shares properties/methods among all instances |

—

### Practice Tasks

1. Use strict mode and try assigning undeclared variables.
2. Create a constructor function Student with name and grade.
3. Add a method getGrade to Student.prototype.
4. Create a constructor Teacher that inherits from Student using call().
5. Add a new property subject in Teacher.

—

### Instructor: Muaz Muhammad
### Course: Full Stack Web Development
### Date: 2025-06-10


