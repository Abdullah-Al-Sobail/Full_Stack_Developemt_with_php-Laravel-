# Full Stack Web Development - Class 03: HTML Tables, Lists, Block & Inline, Div, Classes, Id

## Topics Covered
- HTML Tables
- HTML Lists
- HTML Block & Inline Elements
- HTML Div
- HTML Classes
- HTML Id

---

## 1. HTML Tables
Tables in HTML are used to display data in a tabular form. The `<table>` tag defines the table, and it can be divided into rows (`<tr>`) and columns (`<td>` for data and `<th>` for headers). Additional elements like `<thead>`, `<tbody>`, and `<tfoot>` help in structuring the table.

### Example:
```html
<table border="2" cellspacing="0" cellpadding="10">
    <thead>
        <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>01</td>
            <td>Rahim</td>
            <td>rahim@gmail.com</td>
            <td>Chittagong</td>
        </tr>
        <tr>
            <td>02</td>
            <td>Karim</td>
            <td>karim@gmail.com</td>
            <td>Chittagong</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td colspan="3" align="center">02</td>
        </tr>
    </tfoot>
</table>
```

## 2. HTML Lists
HTML provides two types of lists:
- **Ordered List** (`<ol>`) – For numbered lists.
- **Unordered List** (`<ul>`) – For bulleted lists.

### Example of Ordered List:
```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

### Example of Unordered List:
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

### Nested List:
```html
<ol>
    <li>Item 1
        <ul>
            <li>Sub-item 1.1</li>
            <li>Sub-item 1.2</li>
        </ul>
    </li>
    <li>Item 2</li>
</ol>
```

### Definition List:
```html
<dl>
    <dt>Coffee</dt>
    <dd>- Black Hot Drink</dd>
    <dt>Milk</dt>
    <dd>- White Cold Drink</dd>
</dl>
```

## 3. Block & Inline Elements
HTML elements are either **block** or **inline**. Block elements take up the full width, while inline elements only take up as much width as necessary.

### Example of Block Element:
```html
<p style="background-color: aqua;">This is a block element (Paragraph).</p>
```

### Example of Inline Element:
```html
<a href="#">This is an inline element (Link).</a>
```

## 4. HTML Div
The `<div>` tag is used as a container for grouping and styling elements.

### Example:
```html
<div class="div1 color1">
    <h3>This is H3 inside a div</h3>
    <p>Some text inside a div.</p>
</div>
```

## 5. HTML Classes
Classes allow you to define styles for multiple elements. Multiple classes can be applied to a single element.

### Example:
```html
<div class="div1 color1">
    <p>This div uses two classes: div1 and color1.</p>
</div>
```

## 6. HTML Id
The `id` attribute provides a unique identifier for an element, and it can be used to style or link to that specific element.

### Example:
```html
<h3 id="heading1">This is a heading with an id.</h3>
<a href="#heading1">Go to Heading</a>
```

---

### Summary Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class03</title>
    <style>
        .div1{
            color: blue;
        }
        .color1{
            background-color: antiquewhite;
        }
        .color2{
            background-color: aquamarine;
        }
        #heading1{
            color: red;
        }
    </style>
</head>
<body>
    <a href="#lastDiv">Go to Last Div</a>
    <div class="div1 color1">
        <h3>This is H3 inside Div 1</h3>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="div1 color2">
        <h3 id="heading1">This is H3 inside Div 2</h3>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="div1 color2" id="lastDiv">
        <h3>This is the Last Div</h3>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</body>
</html>
```

---

## Homework/Practice:

- Create an HTML page with at least one table and one list.
- Use both block and inline elements.
- Style elements using classes and ids.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 24th September, 2024  

