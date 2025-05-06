# **Full Stack Web Development - CSS Class 17: Buttons, Pagination, and Multiple Columns**  

## **Topics Covered:**  
1. **CSS Buttons**  
2. **CSS Pagination**  
3. **CSS Multiple Columns**  

---

## **1. CSS Buttons**  
Buttons are essential elements in web design. CSS allows us to style buttons in various ways, including shape, color, hover effects, and animations.  

### **Basic Button Styling**
```css
.button {
    background-color: blue;
    border: none;
    color: antiquewhite;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
```
- `background-color`: Sets the button’s background color.  
- `border`: Removes the default button border.  
- `padding`: Controls the space inside the button.  
- `cursor: pointer;`: Changes the mouse pointer to indicate it's clickable.  

### **Advanced Button Styles**
```css
.btn3 {
    background-color: chartreuse;
    font-size: 20px;
    padding: 20px 20px;
    border-radius: 10px;
}

.btn4 {
    background-color: red;
    font-size: 20px;
    padding: 20px 20px;
    border-radius: 50%;
}

.btn5 {
    background-color: white;
    font-size: 20px;
    padding: 20px 20px;
    border: 3px solid red;
}
```
- `border-radius`: Makes buttons rounded.  
- `border`: Creates outlined buttons.  

### **Animated Button**
```css
.btn7 {
    display: inline-block;
    border-radius: 5px;
    border: none;
    background-color: blueviolet;
    text-align: center;
    font-size: 25px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 10px;
}

.btn7 span {
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.btn7 span:after {
    content: "opps!";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.btn7:hover span {
    padding-right: 55px;
}

.btn7:hover span:after {
    opacity: 1;
    right: 0;
}
```
- Adds a hover effect where extra text appears when the button is hovered.  

---

## **2. CSS Pagination**  
Pagination is used to break content into multiple pages.  

### **Example: Simple Pagination**
```css
ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
}

ul.pagination li {
    display: inline;
}

ul.pagination li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
}

ul.pagination li a.active {
    background-color: aquamarine;
    border-radius: 50%;
}
```
- `display: inline;` makes the pagination elements appear next to each other.  
- `background-color: aquamarine;` highlights the active page.  

### **Example: Pagination HTML**
```html
<ul class="pagination">
    <li><a href="#">1</a></li>
    <li><a class="active" href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">...</a></li>
</ul>
```

---

## **3. CSS Multiple Columns**  
The `column-count` and `column-rule` properties allow text to be displayed in multiple columns, similar to a newspaper layout.  

### **Example: Multi-Column Layout**
```css
.text {
    column-count: 3;
    column-gap: 30px;
    column-rule: 4px double red;
    column-width: 200px;
}

h1 {
    column-span: all;
}
```
- `column-count: 3;` splits text into 3 columns.  
- `column-gap: 30px;` controls the spacing between columns.  
- `column-rule: 4px double red;` adds a red double-line separator between columns.  
- `column-span: all;` makes the heading span across all columns.  

---

## **Complete Example**

### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Buttons, Pagination, and Columns</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>CSS Buttons</h1>
    <button class="button">Default</button>
    <button class="btn3">Rounded Button</button>
    <button class="btn4">Circle Button</button>
    <button class="btn5">Outlined Button</button>
    <button class="btn7"><span>Touch Me</span></button>

    <h1>CSS Pagination</h1>
    <ul class="pagination">
        <li><a href="#">1</a></li>
        <li><a class="active" href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">...</a></li>
    </ul>

    <h1>CSS Multiple Columns</h1>
    <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollitia quisquam animi nam numquam nulla nesciunt laudantium eius.
        Deserunt officiis suscipit eos nisi ipsa perspiciatis eius repellendus veritatis maxime vel blanditiis optio.
    </div>

</body>
</html>
```

### **CSS**
```css
/* Buttons */
.button {
    background-color: blue;
    border: none;
    color: antiquewhite;
    padding: 15px 30px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}

.btn3 {
    background-color: chartreuse;
    font-size: 20px;
    padding: 20px;
    border-radius: 10px;
}

.btn4 {
    background-color: red;
    font-size: 20px;
    padding: 20px;
    border-radius: 50%;
}

.btn5 {
    background-color: white;
    font-size: 20px;
    padding: 20px;
    border: 3px solid red;
}

.btn7 {
    display: inline-block;
    border-radius: 5px;
    background-color: blueviolet;
    text-align: center;
    font-size: 25px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
}

.btn7 span {
    position: relative;
    transition: 0.5s;
}

.btn7 span:after {
    content: "opps!";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.btn7:hover span {
    padding-right: 55px;
}

.btn7:hover span:after {
    opacity: 1;
    right: 0;
}

/* Pagination */
ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
}

ul.pagination li {
    display: inline;
}

ul.pagination li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
}

ul.pagination li a.active {
    background-color: aquamarine;
    border-radius: 50%;
}

/* Multi-Column Layout */
.text {
    column-count: 3;
    column-gap: 30px;
    column-rule: 4px double red;
    column-width: 200px;
}

h1 {
    column-span: all;
}
```

---

## **Practice Tasks**
1. **Create a button with a hover color transition.**  
2. **Modify the pagination to add "Next" and "Previous" buttons.**  
3. **Experiment with different `column-count` values.**  

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 15th FEB 2025
