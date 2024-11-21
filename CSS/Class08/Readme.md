# Full Stack Web Development - CSS Class 08: CSS Overflow, Float, and Opacity

#### **Lesson Plan**

---

**Topics:**
1. CSS Overflow
2. CSS Float
3. CSS Opacity

**Objectives:**
- Understand how to handle content overflow using `overflow` properties.
- Learn to float elements and use `clear` to manage floated content.
- Apply transparency effects using the `opacity` property and understand hover states for dynamic UI effects.

---

### **1. CSS Overflow**
The `overflow` property manages how content is handled when it overflows its container. Common values:
- `visible`: Default; content is not clipped.
- `hidden`: Content is clipped and not visible.
- `scroll`: Adds scrollbars to view hidden content.
- `auto`: Adds scrollbars only when content overflows.

```css
#x {
    width: 500px;
    height: 300px;
    border: 2px solid black;
    margin: auto;
    background-color: antiquewhite;
    overflow: auto; /* Adds scrollbars when content overflows */
}
.img0 {
    width: 600px; /* Image exceeds the container's width */
}
```

---

### **2. CSS Float**
The `float` property allows elements to be positioned to the left or right within their container. Often used for layouts.

**Common Values:**
- `left`: Floats the element to the left.
- `right`: Floats the element to the right.
- `none`: Default; no floating.
- `clear`: Removes float effects from the next element.

```css
.img1 {
    float: left; /* Floats the image to the left */
    margin-right: 20px;
}
.img2 {
    width: 300px;
    height: 100px;
    float: left; /* Floats the second image left */
}
#para1 {
    border: 2px solid black;
    overflow: auto; /* Ensures proper containment of floated elements */
}
```

---

### **3. CSS Opacity**
The `opacity` property adjusts the transparency of an element. Values range from `0` (completely transparent) to `1` (fully opaque).

```css
.box {
    background-image: url('img/download.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 500px;
    height: 300px;
}
.box h1 {
    background-color: aqua;
    padding: 10px 0px;
    text-align: center;
    opacity: 0.5; /* Semi-transparent text */
}
.box h1:hover {
    opacity: 1; /* Fully opaque text on hover */
}
.img5 {
    filter: grayscale(); /* Applies grayscale effect to the image */
}
```

---

#### **HTML Code**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>CSS Overflow, Float, and Opacity</title>
</head>
<body>
    <h1>Overflow</h1>
    <div id="x">
        <img class="img0" src="img/OIP.jpeg" alt="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, animi doloribus.
    </div>

    <h1>Float and Clear</h1>
    <img class="img1" src="img/download.jpeg" alt="">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque cum voluptatibus.</p>
    <p id="para1">
        <img class="img2" src="img/download.jpeg" alt="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque cum voluptatibus.
    </p>
    <div class="one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos maiores corporis.</div>
    <div class="two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor nihil.</div>
    <div class="three">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam molestias quibusdam.</div>

    <h1>Opacity</h1>
    <div class="box">
        <h1>What is in this box?</h1>
    </div>
    <br>
    <img class="img5" src="img/download.jpeg" alt="">
</body>
</html>
```

---

#### **Practice Section**

---

1. **CSS Overflow**
   - Modify the container (`#x`) to use `hidden` for the `overflow` property. Observe what happens to overflowing content.

2. **CSS Float**
   - Add another image next to `.img1` and ensure both are floated left with appropriate margins.

3. **CSS Opacity**
   - Change the opacity of the `box h1` to `0.2` and observe the effect.
   - Add a `hover` effect to the `.img5` element to remove the grayscale filter on hover.

---

**Instructor**: Muaz Muhammad.  
**Course**: Full Stack Web Development  
**Date**: 13th November, 2024