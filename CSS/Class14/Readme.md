# Full Stack Web Development - CSS Class 14: Transforms & Transitions

## Topics Covered:
1. **CSS 2D Transforms**  
2. **CSS 3D Transforms**  
3. **CSS Transitions**  

---

## 1. CSS 2D Transforms

CSS 2D transforms allow elements to be moved, rotated, scaled, and skewed in a two-dimensional space.

### **Translate Example**
Moves an element from its normal position.
```css
div {
    width: 80%;
    height: auto;
    background-color: aquamarine;
    transform: translate(50px, 40px);
}
```
---

### **Rotate Example**
Rotates an element by a specified angle.
```css
#rotate1 {
    transform: rotate(10deg);
}

#rotate2 {
    transform: rotate(-10deg);
}
```
---

### **Scale Example**
Scales an element by a given factor.
```css
div:hover {
    transform: scale(2, 2);
}
```
---

### **Skew Example**
Skews an element along the X and Y axes.
```css
.skew {
    width: 200px;
    height: auto;
    background-color: blue;
}

.skew:hover {
    transform: skew(-25deg, -25deg);
}
```
---

### **Matrix Example**
Combines multiple transforms into one.
```css
#matrix1 {
    transform: matrix(1, -0.5, 0, 1, 5, 5);
}

#matrix2:hover {
    transform: matrix(1, 0, 0.5, 1, 120, 120);
}
```
---

## 2. CSS 3D Transforms

CSS 3D transforms allow elements to be transformed in a three-dimensional space.

### **Rotate in 3D**
```css
#x {
    background-color: chocolate;
    transform: perspective(500px) rotateX(150deg);
}

#y {
    background-color: aqua;
    transform: rotateY(-150deg);
}

#z {
    background-color: blue;
    transform: rotateZ(50deg);
}

#xyz {
    transform: rotate3d(50, 100, 5, 10deg);
}
```
- `rotateX(deg)`, `rotateY(deg)`, and `rotateZ(deg)` apply rotation along different axes.
- `perspective(500px)` adds depth to the transformation.

---

## 3. CSS Transitions

CSS transitions allow changes in CSS properties to occur smoothly over a given duration.

### **Basic Transition Example**
```css
h1 {
    width: 200px;
    height: 100px;
    font-size: 30px;
    background-color: blue;
    transition: height 2s, width 1s;
}

h1:hover {
    width: 400px;
    height: 300px;
    font-size: 20px;
}
```
- The element smoothly changes size when hovered.

---

### **Transition Timing Functions**
```css
#linear {
    background-color: aqua;
    transition-timing-function: linear;
    transition-delay: 1s;
}

#ease {
    background-color: blue;
    transition-timing-function: ease;
    transition-duration: 2s;
}

#ease-in {
    background-color: #15ff00;
    transition-timing-function: ease-in;
}

#ease-out {
    background-color: blueviolet;
    transition-timing-function: ease-out;
}

#ease-in-out {
    background-color: coral;
    transition-timing-function: ease-in-out;
}
```
- `linear`: Constant speed.  
- `ease`: Starts slow, speeds up, and slows down.  
- `ease-in`: Starts slow and speeds up.  
- `ease-out`: Starts fast and slows down.  
- `ease-in-out`: Combination of ease-in and ease-out.

---

### **Transform and Transition Combined**
```css
div {
    width: 100px;
    height: 100px;
    background-color: cadetblue;
    transition: width 3s, height 3s, transform 2s;
}

div:hover {
    width: 300px;
    height: 300px;
    transform: rotate(180deg);
}
```
- The element smoothly rotates and expands on hover.

---

## **Complete Example**

### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transforms & Transitions</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>CSS 2D Transforms</h1>
    <div id="rotate1">Rotate 10°</div>
    <div id="rotate2">Rotate -10°</div>

    <div class="skew">Hover to Skew</div>

    <div id="matrix1">Matrix Transform 1</div>
    <div id="matrix2">Hover for Matrix Transform 2</div>

    <h1>CSS 3D Transforms</h1>
    <div id="x">Rotate X</div>
    <div id="y">Rotate Y</div>
    <div id="z">Rotate Z</div>

    <h1>CSS Transitions</h1>
    <div id="ease">Ease</div>

</body>
</html>
```

---

## **Practice:**
1. **Modify Transform Properties**
   - Try changing `rotateX`, `rotateY`, `rotateZ` values.
   - Experiment with different `scale` and `skew` values.

2. **Experiment with Transitions**
   - Apply transitions to different elements.
   - Change `transition-duration` and `transition-delay`.

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 8th February 2025
