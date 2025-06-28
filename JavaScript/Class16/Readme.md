# JavaScript Class 16 – Arrow Functions, Lexical this, ES6 Array Methods

---

## Topics Covered

1. ES6 Arrow Functions
2. Lexical this in Arrow Functions
3. ES6 Array Methods & Syntax Enhancements

---

### Part 1: Arrow Functions

ES6 introduced a shorter way to write functions using => (fat arrow). They’re often used for inline callbacks or replacing anonymous functions.

✅ Traditional Function (ES5):

```js
var greet = function(name) {
  return "Hello " + name;
};
```

✅ Arrow Function (ES6):

```js
const greet = name => `Hello ${name}`;
```

 Syntax Variants:

| Syntax              | Description                            |
| ------------------- | -------------------------------------- |
| () => expression    | No params, returns expression          |
| param => expression | Single param                           |
| (a, b) => a + b     | Multiple params                        |
| () => { ... }       | With block body (needs return keyword) |

Example: Convert birth years to ages

```js
const dob = [1996, 2010, 1999];
const ages = dob.map(year => 2025 - year);
```

—

### Part 2: Lexical this in Arrow Functions

Arrow functions do not bind their own this. Instead, they inherit this from the parent scope where they are defined.

❌ With regular function (this is dynamic):

```js
const obj = {
  log: function() {
    console.log(this); // points to obj
    return function() {
      console.log(this); // points to window or undefined in strict mode
    };
  }
};
```

✅ With arrow function (this is lexical):

```js
const obj = {
  log: function() {
    console.log(this); // obj
    return () => console.log(this); // still obj
  }
};
```

—

### Part 3: ES6 Array Features

✅ Array.from()

Convert NodeList or array-like objects to real arrays:

```js
const nodeList = document.querySelectorAll('.box-content');
const arr = Array.from(nodeList); // Now usable with map, filter, etc.
```

✅ Array.map()

Return a new array based on transformation logic:

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]
```

✅ Array.findIndex()

Find index of the first match:

```js
const nums = [10, 20, 30, 65];
const index = nums.findIndex(n => n === 65); // Output: 3
```

✅ for…of Loop

Loop over iterable values:

```js
for (const num of numbers) {
  if (num === 5) break;
  console.log(num);
}
```

—

### Practice Tasks

1. Write an arrow function that returns the square of a number.
2. Use .map() with arrow function to calculate ages from birth years.
3. Convert a NodeList to an array using Array.from().
4. Test lexical this with both regular and arrow functions in an object.
5. Use findIndex() to find the index of a number in an array.

—

### Summary Table

| Feature         | Description                                 |
| --------------- | ------------------------------------------- |
| Arrow Functions | Short, cleaner syntax with lexical this     |
| Lexical this    | Inherits from parent, useful inside objects |
| Array.from()    | Converts array-like/NodeList to real array  |
| map()           | Transforms array values                     |
| findIndex()     | Finds index of first matching value         |
| for…of          | Simplified loop for iterables               |
---

### Instructor: Muaz Muhammad
### Course: Full Stack Web Development – JavaScript
### Date: 2025-05-28


