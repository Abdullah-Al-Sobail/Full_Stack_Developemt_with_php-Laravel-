# JavaScript Class 17 – Spread Operator, Destructuring, Rest & Default Parameters

---

## Topics Covered

1. Spread Operator (...)
2. Array & Object Destructuring
3. Rest Parameters (...args)
4. Default Parameters in Functions

---

### 1. Spread Operator (...)

The spread operator expands elements of an array (or object) into individual elements.

✅ Example:

```js
const numbers = [1, 2, 3, 4];

function calc(a, b, c, d) {
  console.log('Sum:', a + b + c + d);
}

calc(...numbers); // Spreads array into arguments
```

 Array Merge Example:

```js
const students = ['Arjit', 'Tashfiya', 'Mahzabin'];
const newStudents = ['Muaz', ...students, 'Javascript'];
console.log(newStudents);
```

---

### 2. Destructuring

 Array Destructuring

Instead of:

```js
const profile = ['Minhazul Islam', 25, 'Student'];
const name = profile[0];
```

Use:

```js
const [name, age, profession] = profile;
console.log(name, age, profession);
```

 Object Destructuring

```js
const person = {
  name: 'Muaz Muhammad',
  age: 25,
  job: 'Teacher'
};

const { name, age, job } = person;
console.log(name, age, job);
```

Nested Destructuring:

```js
const obj = {
  nested: {
    info: {
      title: 'JavaScript ES6'
    }
  }
};

const { nested: { info: { title } } } = obj;
console.log(title);
```

---

### 3. Rest Parameters (...args)

Gathers multiple arguments into an array

✅ ES5:

```js
function argsOld() {
  for (var i = 0; i < arguments.length; i++) {
    console.log('Arg:', arguments[i]);
  }
}
argsOld('BD', 'IND', 'NEP');
```

✅ ES6 (Rest):

```js
function argsNew(...items) {
  for (let item of items) {
    console.log('Arg:', item);
  }
}
argsNew('Rice', 'Milk', 'Bread');
```

Also works with arrow functions:

```js
const argsArrow = (...items) => {
  items.forEach(item => console.log('Arrow Arg:', item));
};
argsArrow('Book', 'Pen', 'Laptop');
```

---

### 4. Default Parameters

Assign default values to function parameters.

✅ ES5 Style:

```js
function intro(name, age) {
  name = name || 'Muaz';
  age = age || 25;
  console.log(`My name is ${name} and I am ${age} years old.`);
}
```

✅ ES6 Default Parameters:

```js
function intro(name = 'Muaz', age = 25) {
  console.log(`My name is ${name} and I am ${age} years old.`);
}
intro(); // Muaz, 25
intro('Kabir', 22); // Kabir, 22
```

Default Parameters in Constructor:

```js
function Person(name = 'Muaz', age = 25) {
  this.name = name;
  this.age = age;
}
const p1 = new Person();
console.log(p1.name); // Muaz
const p2 = new Person('Kabir', 22);
console.log(p2.name); // Kabir
```

---

### Quick Summary Table

| Feature            | Purpose                            | Syntax Example      |
| ------------------ | ---------------------------------- | ------------------- |
| Spread Operator    | Expand array/object into parts     | ...arr              |
| Destructuring      | Extract values from arrays/objects | const \[a, b] = arr |
| Rest Parameters    | Collect arguments into an array    | function f(...args) |
| Default Parameters | Set fallback parameter values      | function f(x = 10)  |

---

### Practice

1. Merge two arrays using spread.
2. Use destructuring to extract values from an object.
3. Create a function using rest parameters to print all arguments.
4. Create a constructor function using default parameters.

—

### Instructor: Muaz Muhammad
### Course: Full Stack Web Development 
### Date: 2025-06-30


