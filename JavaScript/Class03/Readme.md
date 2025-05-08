
# JavaScript Class 03 – Operators

## Topics Covered

1. JavaScript Operators
2. Arithmetic Operators
3. Assignment Operators
4. Comparison Operators
5. Bitwise Operators

---

## 1. JavaScript Operators – Overview

Operators in JavaScript are symbols or keywords used to perform operations on values and variables. They are essential in manipulating data and making logical decisions.

Types of Operators we’ll cover today:

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Bitwise Operators

---

## 2. Arithmetic Operators

Used to perform mathematical operations.

| Operator | Description         | Example (x = 8, y = 3) | Result |
| -------- | ------------------- | ---------------------- | ------ |
| +        | Addition            | x + y                  | 11     |
| -        | Subtraction         | x - y                  | 5      |
| \*       | Multiplication      | x \* y                 | 24     |
| /        | Division            | x / y                  | 2.67   |
| %        | Modulus (Remainder) | x % y                  | 2      |
| \*\*     | Exponentiation      | x \*\* y (8^3)         | 512    |

🧠 Use Case: Calculations, counters, measurements, etc.

---

## 3. Assignment Operators

Used to assign values to variables.

| Operator | Example | Equivalent |
| -------- | ------- | ---------- |
| =        | a = 10  | a = 10     |
| +=       | a += 5  | a = a + 5  |
| -=       | a -= 3  | a = a - 3  |
| \*=      | a \*= 2 | a = a \* 2 |
| /=       | a /= 4  | a = a / 4  |
| %=       | a %= 2  | a = a % 2  |

🔁 Chain assignments to simplify updates.

---

## 4. Comparison Operators

Used to compare two values and return a Boolean (true/false).

| Operator | Description             | Example   | Result |
| -------- | ----------------------- | --------- | ------ |
| ==       | Equal to (loose)        | 5 == "5"  | true   |
| ===      | Equal value & type      | 5 === "5" | false  |
| !=       | Not equal               | 5 != 6    | true   |
| !==      | Not equal value or type | 5 !== "5" | true   |
| >        | Greater than            | 5 > 2     | true   |
| <        | Less than               | 3 < 5     | true   |

🧠 Always use === and !== to avoid unexpected type coercion.

---

## 5. Bitwise Operators

Perform bit-level operations.

| Operator | Symbol | Example | Result Explanation                          |
| -------- | ------ | ------- | ------------------------------------------- |
| AND      | &      | 5 & 1   | 0101 & 0001 = 0001 → 1                      |
| OR       | \|     | 5 \| 1  | 0101 \| 0001 = 0101 → 5                     |
| XOR      | ^      | 5 ^ 1   | 0101 ^ 0001 = 0100 → 4                      |
| NOT      | \~     | \~5     | \~00000101 = 11111010 → -6 (2's complement) |

🧠 Useful in low-level tasks (e.g., device drivers, compression, encryption).

---

## Example Code from Class

script.js:

```javascript
function arithmetic() {
  let x = 8, y = 3;
  document.getElementById("output").innerHTML =
    `x + y = ${x + y}<br>x - y = ${x - y}<br>x * y = ${x * y}<br>x / y = ${x / y}<br>x % y = ${x % y}<br>x ** y = ${x ** y}`;
}

function assignment() {
  let a = 10;
  a += 5;
  a *= 2;
  document.getElementById("output").innerHTML = `Final value of a: ${a}`;
}

function comparison() {
  let res = `
    5 == '5' : ${5 == '5'}<br>
    5 === '5' : ${5 === '5'}<br>
    5 != 6 : ${5 != 6}<br>
    5 > 2 : ${5 > 2}
  `;
  document.getElementById("output").innerHTML = res;
}

function bitwise() {
  let a = 5, b = 1;
  let res = `
    5 & 1 = ${a & b}<br>
    5 | 1 = ${a | b}<br>
    5 ^ 1 = ${a ^ b}<br>
    ~5 = ${~a}
  `;
  document.getElementById("output").innerHTML = res;
}
```

---

## Practice Section

✅ Write arithmetic expressions using all 6 operators.

✅ Use assignment operators in chained format

✅ Compare different values using == and ===

✅ Try bitwise operations on other pairs (like 6 & 3, 10 | 4)

✅ Use typeof to verify data types before comparison

---

### Instructor: Muaz Muhammad

### Course: Full Stack Web Development

### Date: 08-05-2025

