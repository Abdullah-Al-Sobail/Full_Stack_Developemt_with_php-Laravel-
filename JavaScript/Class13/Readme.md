# JavaScript Class 13 – this Keyword, call(), apply(), bind()

---

## Topics Covered

1. JS this Keyword
2. call() Method
3. apply() Method
4. bind() Method

---

### Part 1: The this Keyword

this refers to the object that is executing the current function.

There are three major behaviors of this in JavaScript:

| Context                         | this Refers To                     |
| ------------------------------- | ---------------------------------- |
| Inside a method                 | The object that owns the method    |
| Alone (non-strict)              | Global object (window in browsers) |
| In event handler / call / apply | Defined dynamically                |

Example:

```js
const myCustomObj = {
  name: 'Muaz Muhammad',
  job: 'Teacher',
  anotherObj: {
    name: 'Arijit Datta',
    msg: function() {
      console.log('My name is ' + this.name);
    }
  }
};

myCustomObj.anotherObj.msg(); // Output: My name is Arijit Datta
```

Why? → Because this refers to the object that owns the method: anotherObj.

---

### Part 2: call() Method

call() invokes a function and explicitly sets this to the object passed as the first argument.

Syntax:

functionName.call(thisArg, arg1, arg2, ...)

Example:

```js
var muaz = {
  name: 'Md Muaz',
  dob: 1999,
  age: function(currentYear) {
    console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old');
  }
};

var sobail = {
  name: 'Abd Al Sobail',
  dob: 1998
};

muaz.age.call(sobail, 2020); // Output: Abd Al Sobail is 22 years old
```

Here, this inside age() refers to sobail.

---

### Part 3: apply() Method

apply() works like call(), but takes arguments as an array.

Syntax:

functionName.apply(thisArg, \[arg1, arg2, ...])

Example:

```js
muaz.age.apply(sobail, [2020, 'Hello']); 
// Output: Hello Abd Al Sobail is 22 years old
```

useful when you already have an array of arguments.

—

### Part 4: bind() Method

bind() returns a new function with a fixed this value and optional preset arguments.

Syntax:

const newFunc = functionName.bind(thisArg, arg1, arg2...)

Example:

```js
const sobailAge = muaz.age.bind(sobail, 2025);

sobailAge('Yes!');   // Yes! Abd Al Sobail is 27 years old
sobailAge('Again');  // Again Abd Al Sobail is 27 years old
```

bind does not execute the function immediately – it returns a new function that can be called later.

—

🧠 Summary Table

| Method  | Executes Immediately? | Accepts Arguments | Description                          |
| ------- | --------------------- | ----------------- | ------------------------------------ |
| this    | N/A                   | N/A               | Refers to current object             |
| call()  | ✅ Yes                 | Individually      | Calls with specified this            |
| apply() | ✅ Yes                 | As an array       | Calls with specified this            |
| bind()  | ❌ No                  | Individually      | Returns new function with this bound |

____

📝 Practice Tasks

1. Create an object person1 and use call() to borrow a function from person2.
2. Use apply() to pass an array of arguments.
3. Use bind() to delay execution and test it with setTimeout().
4. Try this inside a nested object method.

-----

### Instructor: Muaz Muhammad
### Course: Full Stack Web Development
### Date: 2025-06-03


