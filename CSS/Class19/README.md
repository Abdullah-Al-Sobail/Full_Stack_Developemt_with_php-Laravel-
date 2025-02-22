# **Full Stack Web Development -CSS Class 19: Responsive Web Design (RWD)**  

## **Topics Covered:**  
1. **RWD Introduction**  
2. **RWD Viewport**  
3. **RWD Grid View**  
4. **RWD Media Queries**  
5. **RWD Images**  
6. **RWD Videos**  
7. **RWD Frameworks**  

---

## **1. RWD Introduction**  
Responsive Web Design (RWD) is an approach that ensures web pages look good on all devices, adjusting layouts and elements dynamically based on screen size.  

### **Key Concepts of RWD:**  
- Flexible layouts (using percentages instead of fixed widths)  
- Media queries for adapting styles  
- Responsive images and videos  

---

## **2. RWD Viewport**  
The viewport is the visible area of a webpage. To make websites responsive, we use the following **meta tag** in HTML:  

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
### **What does this tag do?**  
- `width=device-width`: Matches the screen width of the device.  
- `initial-scale=1.0`: Ensures proper zoom level.  

---

## **3. RWD Grid View**  
A **grid layout** helps structure content using columns. Here, we define a simple **12-column grid system** using CSS:  

```css
[class*="col-"] {
    float: left;
    padding: 15px;
}
.row::after {
    content: "";
    clear: both;
    display: block;
}
```

### **Column Width Definitions**  
We assign widths using percentages:  

```css
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-6 {width: 50%;}
.col-12 {width: 100%;}
```

---

## **4. RWD Media Queries**  
Media queries allow us to apply different styles based on screen size.  

```css
@media screen and (max-width: 768px) {
    [class*="col-"] {
        width: 100%;
    }
}
```
### **Explanation:**  
- If the screen width is **768px or smaller**, all columns will take **100% width** (stacking elements vertically).  

---

## **5. RWD Images**  
To make images responsive, we use:  

```css
img {
    max-width: 100%;
    height: auto;
}
```

This ensures that images:  
- Never exceed their container width (`max-width: 100%`).  
- Maintain aspect ratio (`height: auto`).  

---

## **6. RWD Videos**  
Videos should also be responsive:  

```css
video {
    width: 100%;
    height: auto;
}
```

This ensures that:  
- The video resizes according to the container width.  
- The aspect ratio is maintained.  

---

## **7. RWD Frameworks**  
**Frameworks like Bootstrap, Foundation, and Tailwind CSS** provide pre-built responsive components for faster development.  

Example: Bootstrap’s grid system:  
```html
<div class="container">
    <div class="row">
        <div class="col-md-6">Content 1</div>
        <div class="col-md-6">Content 2</div>
    </div>
</div>
```

### **Advantages of Using Frameworks:**  
- Saves development time.  
- Ensures consistency across different devices.  
- Includes built-in RWD techniques.  

---

## **Example Code:**  

### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="header">
        <h1>My Website</h1>
    </div>

    <div class="row">
        <div class="col-3 nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="col-6">
            <h1>Hi, I'm Muaz</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="col-3">
            <div class="main">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>

    <img src="lion.jpeg" alt="Lion Image">

    <video width="400" controls>
        <source src="video.mp4" type="video/mp4">
    </video>

    <div class="footer">
        <p>&copy; 2025 My Website. All rights reserved.</p>
    </div>

</body>
</html>
```

### **CSS:**
```css
* {
    box-sizing: border-box;
}
.row::after {
    content: "";
    clear: both;
    display: block;
}
[class*="col-"] {
    float: left;
    padding: 15px;
}
.header {
    border: 2px solid salmon;
    padding: 15px;
    background-color: aqua;
}
.nav ul {
    list-style-type: none;
    padding: 0;
}
.nav li {
    padding: 8px;
    background-color: blue;
    color: antiquewhite;
}
.nav li:hover {
    background-color: burlywood;
}
.main {
    background-color: bisque;
    padding: 15px;
    text-align: center;
}
img, video {
    max-width: 100%;
    height: auto;
}
.footer {
    background-color: cadetblue;
    text-align: center;
    padding: 15px;
}

/* Grid System */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-6 {width: 50%;}
.col-12 {width: 100%;}

/* Media Queries */
@media screen and (max-width: 768px) {
    [class*="col-"] {
        width: 100%;
    }
}
```

---

## **Practice Section**  
### **Task 1: Understanding Media Queries**
- Modify the background color for **mobile view (max-width: 600px)**.  
- Set the text alignment to **center** for small screens.

### **Task 2: Responsive Grid**
- Create a **3-column grid layout** that changes to **1 column on mobile**.

### **Task 3: Responsive Images & Videos**
- Add a new image and ensure it stays **responsive**.  
- Embed a YouTube video and make it **fully responsive**.

---

**Instructor: Muaz Muhammad**  
**Course: Full Stack Web Development**  
 **Date: 22 Feb 2025**  

