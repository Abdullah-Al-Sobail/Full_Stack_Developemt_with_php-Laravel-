# JavaScript Class 11: Dates and methods

---

📚 Topics Covered:

1. JS Date Object Basics
2. JS Date Formats
3. JS Date Get Methods
4. JS Date Set Methods

---

🔰 What is the Date Object?

In JavaScript, the Date object is used to work with dates and times. You can create new date instances, read parts of a date (like year or day), and even change them.

You create a Date object using:

```js
const now = new Date();    // Current date & time
```

You can also create a specific date:

```js
const someDate = new Date(2000, 1, 30); // Feb 30, 2000 → auto-adjusted
const fromMillis = new Date(0);         // Epoch time (Jan 1, 1970)
```

---

🧪 Code Demonstration Breakdown

index.html:

```html
<h1>JS Date</h1>
<button onclick="showDate()">Show Current Date</button>
<br><br>
<button onclick="showBirhthday()">Set My Birthday</button>
<div class="output" id="result"></div>
```

script.js:

🟢 Show Current Date

```js
function showDate(){
    const now = new Date();  // get current time
    const formatted = `${now.getDate()}/ ${now.getMonth()+1}/${now.getFullYear()} -${now.getHours()}:${now.getMinutes()}`;
    document.getElementById("result").innerHTML = `Current: ${formatted}`;
}
```

💡 Notes:

* getDate(): Day of month (1–31)
* getMonth(): 0-based (Jan = 0, so +1 added)
* getFullYear(): 4-digit year
* getHours(), getMinutes(): Time

🟣 Set a Birthday

```js
function showBirhthday(){
    const birthday = new Date();
    birthday.setFullYear(1999);  // YYYY
    birthday.setMonth(3);        // April (0-indexed)
    birthday.setDate(15);        // 15th day
    document.getElementById("result").innerHTML = `Birthday set to: ${birthday.toDateString()}`;
}
```

🎯 Output: "Birthday set to: Thu Apr 15 1999"

---

📦 JS Date Formats

JavaScript understands multiple formats:

Examples:

* new Date("2024-04-15")  → ISO Format
* new Date("Apr 15, 2024")
* new Date(2024, 3, 15) → April 15, 2024 (month is 0-indexed)

---

🧰 JS Date Get Methods

Used to retrieve date parts.

| Method        | Description              |
| ------------- | ------------------------ |
| getFullYear() | 4-digit year             |
| getMonth()    | 0-based month (0–11)     |
| getDate()     | Day of month (1–31)      |
| getDay()      | Day of week (0–6; Sun=0) |
| getHours()    | Hour (0–23)              |
| getMinutes()  | Minutes (0–59)           |
| getSeconds()  | Seconds (0–59)           |

Example:

```js
let now = new Date();
console.log(now.getDate());     // 24
console.log(now.getMonth());    // 4 (May)
```

---

🛠️ JS Date Set Methods

Used to change specific parts of a date object.

| Method        | Usage Example          |
| ------------- | ---------------------- |
| setFullYear() | date.setFullYear(2000) |
| setMonth()    | date.setMonth(11)      |
| setDate()     | date.setDate(25)       |
| setHours()    | date.setHours(12)      |
| setMinutes()  | date.setMinutes(30)    |

Note: JavaScript auto-fixes invalid dates.

Example:

```js
let d = new Date();
d.setMonth(15);  // 15 → overflow → adds 1 year + 3 months
console.log(d);
```

---

🎯 Quick Summary

✅ Use new Date() to get the current date
✅ Format your date using get methods
✅ You can set custom birthdays or events using set methods
✅ JavaScript handles month overflow and fixes invalid dates

---

🧪 Practice Ideas

1. Show your birthday in dd-mm-yyyy format
2. Show current time in HH\:MM AM/PM format
3. Create a countdown to a future event
4. Get the weekday name of today
5. Check if today is weekend or weekday

—

## Instructor: Muaz Muhammad
## Course: Full Stack Web Development 
## Date: 2025-05-27

