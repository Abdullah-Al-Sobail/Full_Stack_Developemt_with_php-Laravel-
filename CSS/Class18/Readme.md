
# **Full Stack Web Development - CSS Class 18: CSS User Interface, Variables & @property, Media Queries, and Flexbox**  

## **Topics Covered**  
1. **CSS User Interface**  
2. **CSS Variables & @property**  
3. **CSS Media Queries**  
4. **CSS Flexbox**  

---

## **1. CSS User Interface**  
CSS provides various user interface properties to enhance the look and functionality of elements. These properties help improve usability and accessibility.  

### **Key UI Properties**  
- **`resize`**: Allows users to resize elements like `<div>`.  
- **`outline-offset`**: Adds space between the border and the outline.  
- **`box-sizing`**: Defines how the element’s total size is calculated.  
- **`direction`**: Controls text direction (left-to-right or right-to-left).  

### **Example Code**  
```html
<h1>CSS User Interface</h1>
<div class="resizable">Resize Me</div> 
<div id="outline">Outline Offset Example</div>
<div class="box1"></div>
<div class="box2"></div>
```
```css
.resizable {
    border: 2px solid blue;
    background-color: aquamarine;
    padding: 10px;
    width: 250px;
    resize: both;
    overflow: auto;
}

#outline {
    margin: 20px;
    background-color: brown;
    padding: 10px;
    width: 250px;
    border: 2px solid black;
    outline: 2px dotted blue;
    outline-offset: 10px;
}

.box1 {
    width: 250px;
    height: 80px;
    border: 2px solid red;
    box-sizing: border-box;
}

.box2 {
    width: 250px;
    height: 80px;
    padding: 15px;
    border: 2px solid blue;
    box-sizing: border-box;
}
```

---

## **2. CSS Variables & @property**  
CSS Variables allow you to store values that can be reused throughout the stylesheet, making the code more maintainable.  

### **Key Concepts**  
- **`:root`**: Defines global CSS variables.  
- **`var(--variable-name)`**: Accesses a variable.  
- **`@property`**: Defines custom properties with specific rules.  

### **Example Code**  
```html
<h1>CSS Variables & @property</h1>
<div class="content"></div>
```
```css
:root {
    --blue: #0000FF;
    --white: #ffffff;
    --black: black;
}

@property --myColor {
    syntax: "<color>";
    inherits: true;
    initial-value: gray;
}

body {
    background-color: var(--blue);
}

.content {
    background-color: var(--myColor);
    border: 2px solid var(--black);
    width: 200px;
    height: 200px;
}
```

---

## **3. CSS Media Queries**  
Media Queries allow websites to adapt their design to different screen sizes and devices.  

### **Key Features**  
- **`@media`**: Defines styles for specific screen sizes.  
- **Common Breakpoints**:  
  - `max-width: 650px` → Small screens  
  - `max-width: 480px` → Mobile devices  

### **Example Code**  
```html
<h1>CSS Media Queries</h1>
<div class="nav">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Content</a>
    <a href="">Contact</a>
</div>
```
```css
body {
    background-color: aliceblue;
    font-size: 20px;
}

@media screen and (max-width: 650px) {
    body {
        background-color: lightblue;
        font-size: 15px;
        text-align: right;
    }
}

@media screen and (max-width: 480px) {
    body {
        background-color: aqua;
        font-size: 10px;
        border: 2px solid;
        text-align: center;
    }
}

.nav {
    overflow: hidden;
    background-color: #333;
}

.nav a {
    float: left;
    display: block;
    color: antiquewhite;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.nav a:hover {
    background-color: bisque;
    color: #000;
}

@media screen and (max-width: 650px) {
    .nav a {
        float: none;
        width: 100%;
    }
}
```

---

## **4. CSS Flexbox**  
Flexbox provides an efficient way to layout, align, and distribute space among elements in a container.  

### **Key Properties**  
- **`display: flex`**: Activates flexbox layout.  
- **`flex-direction`**: Defines row or column order.  
- **`justify-content`**: Aligns items horizontally.  
- **`align-items`**: Aligns items vertically.  
- **`flex-wrap`**: Wraps content when necessary.  

### **Example Code**  
```html
<h1>CSS Flexbox</h1>
<div class="flex-items">
    <div class="flexbox">Flex content 1</div>
    <div class="flexbox">Flex content 2</div>
    <div class="flexbox">Flex content 3</div>
</div>
```
```css
.flex-items {
    display: flex;
    width: 400px;
    height: 200px;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    background-color: aqua;
}

.flexbox {
    background-color: chartreuse;
    width: 100px;
    height: 100px;
    margin: 10px;
    text-align: center;
}
```

---

## **Practice Section**  
### **Task 1: Create UI Elements**
- Add a resizable `<div>` and customize the `resize` property.  
- Use `outline-offset` to create different border effects.  

### **Task 2: Implement CSS Variables**
- Create a theme using `:root` and `@property`.  
- Apply dynamic colors using CSS variables.  

### **Task 3: Responsive Navigation Bar**
- Use media queries to make a navbar responsive.  
- Change styles for different screen sizes.  

### **Task 4: Design a Flexible Layout**
- Create a `flexbox` container with different alignment properties.  
- Experiment with `justify-content` and `align-items`.  

---

 **Instructor: Muaz Muhammad**  
 **Course: Full Stack Web Development**  
 **Date: 19 Feb 2025**  

