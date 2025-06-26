# JavaScript Class 15 – Introduction to ES6, let/const/var, IIFE, Template Literals & String Methods

---

## Topics Covered

1. Introduction to ES6 (ECMAScript 2015)
2. let vs const vs var
3. IIFE (Immediately Invoked Function Expression)
4. Template Literals
5. New String Methods:

   * startsWith()
   * endsWith()
   * includes()
   * repeat()

---

### Part 1: let vs const vs var

| Keyword | Scope    | Reassignable | Hoisted | Use Case                    |
| ------- | -------- | ------------ | ------- | --------------------------- |
| var     | function | ✅ Yes        | ✅ Yes   | Older JS, avoid if possible |
| let     | block    | ✅ Yes        | ❌ No    | Reassignable variables      |
| const   | block    | ❌ No         | ❌ No    | Constants, fixed references |

Example:

```js
var name = "Muaz";
let age = 25;
const job = "Teacher";
```

🔁 var is function-scoped:

```js
function demoVar() {
  if (true) {
    var message = "Hello";
  }
  console.log(message); // ✅ Hello (var is function-scoped)
}
```

🧱 let is block-scoped:

```js
function demoLet() {
  if (true) {
    let message = "Hello";
  }
  console.log(message); // ❌ ReferenceError
}
```

🛑 const cannot be reassigned:

```js
const pi = 3.1416;
pi = 3.15; // ❌ Error
```

—

⚙️ Part 2: IIFE – Immediately Invoked Function Expression

IIFE is a function that runs as soon as it is defined.

✅ Syntax:

```js
(function() {
  console.log("I am an IIFE");
})();
```

Use case: Hide variables from global scope.

—

### Part 3: Template Literals

ES6 introduced backticks (` `) and \${} for embedding expressions in strings.

❌ ES5 Style:

```js
var name = 'Muaz';
var age = 25;
console.log('My name is ' + name + ' and I am ' + age + ' years old.');
```

### ES6 Template Literals:

```js
let name = 'Muaz';
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
```

Benefits:

* Multiline strings
* Easy variable embedding
* Clean syntax

—

### Part 4: New String Methods

✅ startsWith():

Checks if a string starts with a given value.

```js
let str = "JavaScript is awesome";
console.log(str.startsWith("Java"));  // true
```

✅ endsWith():

Checks if a string ends with a given value.

```js
console.log(str.endsWith("awesome")); // true
```

✅ includes():

Checks if a string contains a substring.

```js
console.log(str.includes("is"));      // true
```

✅ repeat():

Repeats a string a given number of times.

```js
let text = "Repeat ";
console.log(text.repeat(3)); // Repeat Repeat Repeat 
```



## Practice Tasks

1. Use var, let, and const to declare variables and test scoping.
2. Create an IIFE that logs your name.
3. Use template literals to create a formatted sentence.
4. Try startsWith(), endsWith(), includes(), and repeat() on sample strings.

—

## Summary

| Feature           | Purpose                                    |
| ----------------- | ------------------------------------------ |
| let / const       | Block-scoped modern variable declarations  |
| var               | Function-scoped, outdated                  |
| IIFE              | Run code immediately in isolated scope     |
| Template Literals | Embedded expressions and multiline strings |
| String Methods    | ES6 string utilities for search and repeat |

____

### Instructor: Muaz Muhammad
### Course: Full Stack Web Development
### Date: 2025-05-26

