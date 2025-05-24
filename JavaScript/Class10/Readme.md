

# JavaScript Class 10 – Numbers, Math & Randomness

---

## 🎯 Topics Covered

* JavaScript Numbers
* Number Methods
* Number Properties
* Math Object & Methods
* Random Number Generation
* Bonus: Estimate Reading Time of Text using word count

---

## 📌 JavaScript Numbers

JavaScript has only one type for numbers: both integers & floats.

Examples:

```js
let x = 10;        // Integer
let y = 3.14;      // Float
console.log(typeof x);  // number
console.log(typeof y);  // number
```

Scientific notation:

```js
let a = 123e5;   // 123 × 10⁵ = 12300000
let b = 123e-5;  // 123 ÷ 10⁵ = 0.00123
console.log(a);  // 12300000
console.log(b);  // 0.00123
```

Big numbers:

```js
let c = 999999999999999;    // 15 digits
let d = 9999999999999999;   // 16 digits → Rounded
console.log(c);  // 999999999999999
console.log(d);  // 10000000000000000
```

📌 JavaScript cannot handle more than 15 digits accurately.

---

## 🧠 Type Coercion in Arithmetic

When numbers and strings are mixed, JavaScript converts types automatically:

```js
let a = 10;
let b = 20;
let d = "20";
let c = a + b + d;  // '3020' → because of string "20"
console.log(c);
```

Division with strings (auto-converted to number):

```js
let x = "100";
let y = "10";
let z = x / y;  // 100 / 10 → 10
console.log(z);
```

---

## 📚 JavaScript Math Object

JavaScript’s Math object gives you access to many mathematical operations:

Examples:

```js
console.log(Math.pow(10, 4));      // 10^4 = 10000
console.log(Math.floor(10.99));    // Rounds down → 10
console.log(Math.round(10.49));    // Nearest integer → 10
console.log(Math.round(10.51));    // → 11
console.log(Math.max(1, 2, 3, 9)); // 9
console.log(Math.min(1, 2, 3, 9)); // 1
```

With arrays:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(Math.min(...numbers));  // 0
```

---

## 🎲 Math.random()

Used to generate random numbers (between 0 and 1):

```js
console.log(Math.random());             // e.g. 0.83421
console.log(Math.random() * 100);       // e.g. 83.421
console.log(Math.floor(Math.random() * 100)); // 0 to 99
console.log(Math.round(Math.random() * 100)); // 0 to 100 (rounded)
```

Useful for:

* Games
* Color pickers
* Random ID/OTP generation

---

## 🧮 Bonus: Reading Time Estimator

We use a word count to estimate reading time:

Assume: average reading speed = 200 words per minute.

JavaScript logic:

```js
const text = "Long article lorem ipsum..."; // your text here
const readingTime = Math.ceil(text.split(/\s/g).length / 200);
console.log(`${readingTime} Min Read`);
```

Step-by-step:

1. Split the text by whitespace using .split(/\s/g)
2. Count total words (array length)
3. Divide by 200 words/minute
4. Use Math.ceil to round up

Example output:

🕒 2 Min Read

---

## 🧪 Quick Practice Exercises

Try these:

1. Generate a random number between 1–6 (like a dice).
2. Create a BMI calculator using Math.pow().
3. Build a GPA generator for students using random and Math.round.
4. Count how many numbers in an array are above 50.
5. Simulate a coin toss using Math.random() > 0.5.

---

## Instructor: Muaz Muhammad
## Course: Full Stack Web Development
## Date: 2025-05-24
