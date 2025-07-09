# JavaScript Class 18 – ES6 Map, Class, Inheritance & Recap

---

##  Topics Covered:

1. ES6 Map
2. ES6 Class & Inheritance
3. ES6 Recap (Key Features Summary)

---

###  1. ES6 Map

* Map is a new key-value data structure introduced in ES6.
* Unlike Objects, keys can be of any type (even objects or functions).

✅ Basic Map Methods:

```js
const person = new Map();

person.set('Name', 'Muaz Muhammad');
person.set('Age', 25);
person.set('Job', 'Teacher');

console.log(person.get('Name'));     // Output: Muaz Muhammad
console.log(person.has('Job'));      // true

person.delete('Age');
person.forEach((value, key) => console.log(`${key}: ${value}`));

person.clear(); // Clears all
```

📌 Key Points:

| Method          | Purpose            |
| --------------- | ------------------ |
| set(key, value) | Add new entry      |
| get(key)        | Retrieve value     |
| has(key)        | Check existence    |
| delete(key)     | Remove entry       |
| clear()         | Remove all entries |
| forEach()       | Loop through Map   |

---

###  2. ES6 Class & Inheritance

✅ ES5 Style Constructor Function:

```js
function Person(name, dob) {
  this.name = name;
  this.dob = dob;
}

Person.prototype.currentAge = function() {
  console.log(`${this.name} is ${2025 - this.dob} years old`);
};

const akash = new Person('Md Akash', 2000);
akash.currentAge();
```

✅ ES6 Class Equivalent:

```js
class Person {
  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }

  currentAge() {
    console.log(`${this.name} is ${2025 - this.dob} years old`);
  }
}

const batsh = new Person('Md Batsh', 2005);
batsh.currentAge();
```

✅ Inheritance with extends & super:

```js
class PersonClass {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  dob() {
    console.log(`${this.name} is born in ${2025 - this.age}`);
  }
}

class TeacherClass extends PersonClass {
  constructor(name, age, job, subject) {
    super(name, age, job);
    this.subject = subject;
  }
}

const sobail = new TeacherClass('Abd Al Sobail', 25, 'Instructor', 'Full Stack');
sobail.dob();
```

✅ Static Methods:

* Static methods belong to the class itself, not instances.

```js
class Utility {
  static greet() {
    console.log('I am special');
  }
}

Utility.greet(); // Works

const inst = new Utility();
// inst.greet(); // ❌ Error: Not accessible via instance
```

---

###  3. ES6 Recap Quick Table:

| Feature             | Use Case                                        |
| ------------------- | ----------------------------------------------- |
| let, const          | Safer variable declaration                      |
| Arrow Functions     | Short syntax, lexical this                      |
| Template Literals   | Multi-line & dynamic strings                    |
| String Methods      | Validation, searching: startsWith(), includes() |
| Spread Operator     | Merging arrays/objects                          |
| Rest Parameter      | Gather multiple arguments                       |
| Destructuring       | Easier variable extraction                      |
| Default Params      | Set default function arguments                  |
| Map                 | Key-value data structure                        |
| Class & Inheritance | Better structure, OOP                           |
| Static Methods      | Class-level methods                             |

---

###  Summary of ES6 Class & Inheritance

✅ Class ➡️ Blueprint for creating objects
✅ Constructor ➡️ Initialization logic
✅ Methods ➡️ Functions inside class
✅ extends ➡️ Inherit from parent
✅ super ➡️ Call parent constructor
✅ static ➡️ Class method (not instance method)

---

###  Practice Suggestions:

1. Create a Map of countries and capitals.
2. Build a simple ES6 class for a Vehicle with inherited classes Car and Bike.
3. Try using static methods to create utility functions.

---

### Instructor: Muaz Muhammad
###  Course: Full Stack Web Development – JavaScript
###  Date: 2025-07-09 


