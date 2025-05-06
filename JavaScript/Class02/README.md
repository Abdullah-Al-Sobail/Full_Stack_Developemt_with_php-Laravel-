
# JavaScript Class 02 – Variables, let, const, and Data Types

## Topics Covered

1. JS Variables
2. JS let
3. JS const
4. JS Data Types

---

## 1. JavaScript Variables

Variables are containers used to store data values. In JavaScript, you can declare a variable using:

* var (old way, function-scoped)
* let (modern, block-scoped)
* const (block-scoped and immutable)

💡 A variable name can contain letters, digits, underscores, and dollar signs. It must begin with a letter, \$ or \_.

### Syntax:

```js
var name = "Muaz";
let age = 30;
const country = "Bangladesh";
```

---

## 2. JS var

🔹 Declares a variable with function scope
🔹 Can be re-declared and updated
🔹 Mostly avoided in modern JS

### Example:

```js
var x = "Tashfiya";
x = "Aiman";
var x = "Saima"; // allowed
console.log(x); // Saima
```

---

## 3. JS let

🔸 Introduced in ES6
🔸 Block scope (only available inside the { ... } block where it is defined)
🔸 Cannot be re-declared in the same scope

### Example:

```js
let myName = "Muaz";
myName = "Rahat"; // allowed
{
  let myName = "Block Scoped";
  console.log(myName); // Block Scoped
}
console.log(myName); // Rahat
```

---

## 4. JS const

🔹 Also introduced in ES6
🔹 Block scoped
🔹 Must be initialized when declared
🔹 Cannot be re-assigned

⚠️ Though the reference is constant, contents of objects or arrays can be changed.

### Example:

```js
const PI = 3.1416;
// PI = 3.14; ❌ Error

{
  const PI = 3.14159; // ✅ Allowed (new block)
  console.log(PI); // 3.14159
}
console.log(PI); // 3.1416
```

---

## 5. JavaScript Data Types

JavaScript data types are categorized into:

### Primitive Data Types:

| Type      | Example                 |
| --------- | ----------------------- |
| String    | "Hello", 'World'        |
| Number    | 123, 3.14               |
| Boolean   | true, false             |
| Null      | null                    |
| Undefined | let a; (a is undefined) |
| Symbol    | Symbol("id")            |

### Non-Primitive Data Types:

| Type     | Description                            |
| -------- | -------------------------------------- |
| Object   | Key-value pairs, e.g., {name: "Muaz"}  |
| Array    | Collection of values, e.g., \[1, 2, 3] |
| Function | Block of code to perform a task        |

---

## Example Code from Class

script.js:

```js
// Variable declarations
var num = 10;
var text = "I'm JavaScript";
var text1 = 'I love JS';

// String concatenation
var me = text + text1; // "I'm JavaScriptI love JS"
var M = 'Hello' + " I'm not Java!";
console.log(M); // Hello I'm not java!

// let
let myName = 'Muaz';
myName = 'Muhammad';
console.log(myName); // Muhammad

// const
const PI = 3.1416;
// PI = 3.14; ❌ Not allowed
```

---

## Practice Section

1. Create variables using var, let, and const.
2. Try updating variables to see which ones allow reassignment.
3. Create and log different primitive data types.
4. Declare an object and an array, and try modifying them even if declared with const.
5. Use typeof operator to log the data type of each variable.

---

### Instructor: Muaz Muhammad

### Course: Full Stack Web Development

### Date: 06-05-2025
