# Full Stack Web Development - CSS Class 06: Links, Lists, and Tables

## Topics Covered:
1. CSS Links
2. CSS Lists
3. CSS Tables

---

## 1. CSS Links

In CSS, link styles can be customized using pseudo-classes that target different states of a link (`:link`, `:visited`, `:hover`, and `:active`).

### Common Link Pseudo-Classes:
- **`:link`**: Styles links that haven’t been visited.
- **`:visited`**: Styles links that have been visited.
- **`:hover`**: Styles links when the user hovers over them.
- **`:active`**: Styles links when they are clicked.

### Example:
```css
a {
    margin: 50px;
    text-decoration: none;
    background-color: red;
    padding: 20px;
    border-radius: 20px;
    transition: 1s;
}

a:link {
    color: chartreuse;
}

a:visited {
    color: blue;
}

a:hover {
    background-color: aqua;
    transition: 1s;
}

a:active {
    color: gold;
}
```

---

## 2. CSS Lists

Lists can be styled using `list-style-type`, `list-style-position`, and `list-style-image`.

### List Properties:
- **`list-style-type`**: Sets the type of bullet or numbering (e.g., `disc`, `circle`, `square`, `decimal`, `lower-roman`).
- **`list-style-position`**: Defines the position of the list marker (`inside` or `outside`).
- **`list-style-image`**: Replaces the default bullet with an image.

### Example:
```css
ul {
    list-style-type: "★";
}

ol {
    list-style-type: lower-roman;
    list-style-position: inside;
}

ol li {
    border: 1px solid;
}

.img {
    list-style-image: url('../Class06/img/cls6 (1).png');
}
```

---

## 3. CSS Tables

Tables can be styled with borders, padding, alignment, and colors to make them more readable and visually appealing.

### Table Properties:
- **`border-collapse`**: Merges cell borders into a single border (e.g., `collapse`, `separate`).
- **`text-align`**: Aligns text within table cells (e.g., `center`, `left`, `justify`).
- **`vertical-align`**: Aligns content within cells vertically (e.g., `top`, `middle`, `bottom`).
- **`nth-child(even)`**: Selects even rows, allowing for alternating row colors.

### Example:
```css
table {
    width: 500px;
    border-collapse: collapse;
    empty-cells: hide;
}

th {
    border-bottom: 1px solid;
    width: 50px;
    height: 50px;
    text-align: center;
}

td {
    border-bottom: 1px solid;
    height: 50px;
    text-align: justify;
    vertical-align: middle;
    padding: 5px;
}

tr:nth-child(even) {
    background-color: aqua;
}
```

---

## Example Code from Class 06

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Links, Lists, and Tables</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Link</h1>
    <a href="https://www.youtube.com/">Youtube</a>

    <h1>List</h1>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>

    <ul class="img">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <h1>Tables</h1>
    <div style="overflow-x: auto;">
        <table>
            <caption id="c">Student Data</caption>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>Ahmed</td>
                <td>001</td>
                <td>Chokoria</td>
            </tr>
            <tr>
                <td>Mahzabin</td>
                <td>002</td>
                <td>Noakhali</td>
            </tr>
            <tr>
                <td>Saima</td>
                <td>003</td>
                <td>Rangunia</td>
            </tr>
        </table>
    </div>
</body>
</html>
```

---

## Practice

1. **Links Practice**:
   - Create several different types of links (e.g., external links, internal links, and email links).
   - Use CSS to style them with hover effects and transitions.

2. **Lists Practice**:
   - Try creating both ordered and unordered lists with different `list-style-type` options.
   - Use `list-style-image` to add custom icons to list items.

3. **Tables Practice**:
   - Create a table with headers and multiple rows.
   - Use `nth-child` to add alternating row colors.
   - Apply `padding` and `text-align` properties for readability.

**Instructor**: Muaz Muhammad.  
**Course**: Full Stack Web Development  
**Date**: 13th November, 2024