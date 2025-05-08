# Full Stack Web Development - CSS Class 15: Animations & Tooltips  

## Topics Covered:  
1. **CSS Animations**  
2. **CSS Tooltips**  

---

## 1. CSS Animations  

CSS animations allow elements to transition between different states over a given time.  

### **Basic Animation Example**  
```css
div {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
    position: relative;
    animation-name: colorChange;
    animation-duration: 4s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-timing-function: ease-in;
}

@keyframes colorChange {
    from { background-color: rgb(0, 255, 21); }
    to { background-color: blue; width: 300px; }
}
```
- `animation-name`: Name of the animation.  
- `animation-duration`: Time the animation takes to complete.  
- `animation-delay`: Time before the animation starts.  
- `animation-iteration-count`: How many times it runs (`infinite` for endless).  
- `animation-direction`: Defines the direction (`reverse`, `alternate`).  
- `animation-timing-function`: Controls speed behavior (`ease-in`, `ease-out`).  

---

### **Multi-Step Animation Example**  
```css
@keyframes moveBox {
    0% { background-color: yellow; left: 0px; top: 0px; }
    25% { background-color: green; left: 200px; top: 0px; }
    50% { background-color: red; left: 200px; top: 200px; }
    75% { background-color: brown; left: 0px; top: 200px; }
    100% { background-color: black; left: 0px; top: 0px; }
}

div {
    width: 100px;
    height: 100px;
    background-color: aqua;
    position: relative;
    animation: moveBox 4s linear infinite;
}
```
- The element moves in a square pattern while changing colors.  

---

## 2. CSS Tooltips  

Tooltips are small pop-ups that appear when hovering over an element.  

### **Tooltip Example**  
```css
.tool {
    border-bottom: 1px solid;
    display: inline-block;
    position: relative;
    cursor: pointer;
}

.tool .tooltiptext {
    background-color: black;
    border-radius: 5px;
    color: white;
    padding: 5px 10px;
    position: absolute;
    text-align: center;
    visibility: hidden;
    width: 150px;
    z-index: 1;
    right: 105%;
    top: -5px;
}

.tool:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}
```
- `visibility: hidden;` hides the tooltip initially.  
- On `:hover`, it becomes visible.  

---

## **Complete Example**

### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations & Tooltips</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>CSS Animations</h1>
    <div></div>

    <h1>CSS Tooltips</h1>
    <p>Hover over the text</p>
    <div class="tool">Mouse here
        <span class="tooltiptext">Hi! I'm a tooltip.</span>
    </div>

</body>
</html>
```

---

## **Practice:**
1. **Modify Animation Properties**
   - Change `animation-duration`, `direction`, and `iteration-count`.  

2. **Create Custom Tooltips**
   - Change tooltip position (`top`, `right`, `left`, `bottom`).  

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 10th FEB 2025  
