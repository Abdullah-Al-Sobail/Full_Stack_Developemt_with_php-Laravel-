# Full Stack Web Development - CSS Class 10: CSS Navigation Bar and Dropdown

## Topics Covered:
1. CSS Navigation Bar  
2. CSS Dropdown Menus  

---

## 1. CSS Navigation Bar

A **navigation bar** is an essential component of modern web design. It provides links to key sections of a website, enhancing usability and structure.

### Key Features of a Navigation Bar:
- Horizontally aligned links styled for clarity.
- Fixed or relative positioning for consistent placement.
- Use of `ul` and `li` elements for structure.

### Example Code:

#### HTML Structure:
```html
<nav id="nav_menu">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#blog">Blog</a>
            <ul>
                <li><a href="">Dropdown</a></li>
                <li><a href="">Dropdown</a></li>
                <li><a href="">Dropdown</a></li>
                <li><a href="">Dropdown</a></li>
            </ul>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
    </ul>
</nav>
```

#### CSS Styling:
```css
/* General Reset */
body {
    margin: 0;
}

/* Navigation Bar */
#nav_menu {
    background-color: blue;
}

#nav_menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#nav_menu li {
    display: inline-block;
    position: relative;
}

#nav_menu li a {
    display: block;
    padding: 12px 15px;
    color: antiquewhite;
    text-decoration: none;
}

#nav_menu li a:hover {
    background-color: #a1bee9;
}
```

---

## 2. CSS Dropdown Menus

A **dropdown menu** adds submenus to navigation links, often displayed on hover.

### Key Features of Dropdown Menus:
- **Parent and child elements**: Submenus are nested inside the main menu structure.
- **Hover-based visibility**: Submenus are hidden by default and shown on hover using `display: none;` and `display: block;`.
- **Positioning**: Absolute positioning ensures submenus align under their parent links.

### Example Code:

#### CSS Styling for Dropdown:
```css
/* Dropdown Styling */
#nav_menu ul ul {
    position: absolute;
    left: 0;
    top: 41px;
    background-color: #7295b6;
    width: 200px;
    display: none; /* Hidden by default */
}

#nav_menu ul ul li {
    display: block;
}

#nav_menu ul li:hover ul {
    display: block; /* Show submenu on hover */
}

#nav_menu ul li:hover a {
    background-color: #609999;
}

#nav_menu ul li:hover li a {
    background-color: #8075e0;
}

#nav_menu ul ul li a:hover {
    background-color: #799696;
}
```

---

## Complete Code Example

### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Navigation Bar and Dropdown</title>
</head>
<body>
    <nav id="nav_menu">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#blog">Blog</a>
                <ul>
                    <li><a href="">Dropdown 1</a></li>
                    <li><a href="">Dropdown 2</a></li>
                    <li><a href="">Dropdown 3</a></li>
                </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    </nav>

    <div id="home" style="margin-left: 25%; padding: 1px 16px;">
        <h2>Welcome to Home</h2>
        <p>This is the home section of the navigation.</p>
    </div>

    <div id="blog" style="margin-left: 25%; padding: 1px 16px;">
        <h2>Blog</h2>
        <p>This is the blog section of the navigation.</p>
    </div>

    <div id="about" style="margin-left: 25%; padding: 1px 16px;">
        <h2>About Us</h2>
        <p>This is the about section of the navigation.</p>
    </div>

    <div id="contact" style="margin-left: 25%; padding: 1px 16px;">
        <h2>Contact Us</h2>
        <p>This is the contact section of the navigation.</p>
    </div>
</body>
</html>
```

### CSS:
```css
body {
    margin: 0;
}

/* Navigation Bar */
#nav_menu {
    background-color: blue;
}

#nav_menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#nav_menu li {
    display: inline-block;
    position: relative;
}

#nav_menu li a {
    display: block;
    padding: 12px 15px;
    color: antiquewhite;
    text-decoration: none;
}

#nav_menu li a:hover {
    background-color: #a1bee9;
}

/* Dropdown Menu */
#nav_menu ul ul {
    position: absolute;
    left: 0;
    top: 41px;
    background-color: #7295b6;
    width: 200px;
    display: none;
}

#nav_menu ul ul li {
    display: block;
}

#nav_menu ul li:hover ul {
    display: block;
}

#nav_menu ul li:hover a {
    background-color: #609999;
}

#nav_menu ul li:hover li a {
    background-color: #8075e0;
}

#nav_menu ul ul li a:hover {
    background-color: #799696;
}
```

---

## Practice:

1. **Create a Fixed Navigation Bar**:
   - Add `position: fixed;` to your navigation bar and test scrolling behavior.

2. **Enhance the Dropdown**:
   - Add an additional level of nested dropdowns for more menu complexity.

3. **Responsive Navigation**:
   - Experiment with `@media` queries to make the navigation bar mobile-friendly.

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 4th December 2024