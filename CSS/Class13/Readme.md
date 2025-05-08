# Full Stack Web Development - CSS Class 13: Shadows, Text Effects, and Web Fonts

## Topics Covered:
1. CSS Shadows  
2. CSS Text Effects  
3. CSS Web Fonts  

---

## 1. CSS Shadows

CSS provides two types of shadows:
- **Text Shadow (`text-shadow`)**
- **Box Shadow (`box-shadow`)**

### **Text Shadow Example:**
```css
h1 {
    text-shadow: 2px 2px #000000;
}

p {
    color: white;
    text-shadow: 2px 2px black, 0 0 10px blue, 0 0 5px green;
}
```
This applies a shadow effect to text, making it stand out.

---

### **Box Shadow Example:**
```css
#shadow1 {
    box-shadow: -10px -10px bisque, 10px 10px;
}

#shadow2 {
    box-shadow: 10px 10px 5px;
}

#shadow3 {
    box-shadow: inset 10px 10px 5px;
}
```
- `box-shadow` can add multiple shadows.
- `inset` makes the shadow appear inside the element.

---

### **Card with Box Shadow**
```css
.card {
    margin: 15px;
    width: 200px;
    height: auto;
    text-align: center;
    box-shadow: 4px 4px 8px 0 #00000080, 0 6px 20px 0 #00000030;
}
.cardbody {
    background-color: aqua;
    color: white;
    padding: 5px;
    font-size: 35px;
}
.textcard {
    padding: 2px;
    background-color: blue;
}
```
- The `box-shadow` property creates a stylish card effect.

---

## 2. CSS Text Effects

### **Text Overflow and Wrapping**
```css
.texteffest1 {
    white-space: nowrap;
    width: 300px;
    height: 80px;
    border: 1px solid;
    overflow: hidden;
    text-overflow: ellipsis;
}

.texteffest1:hover {
    text-overflow: inherit;
    overflow: visible;
}
```
- `text-overflow: ellipsis;` shows "..." when text overflows.
- On hover, the full text appears.

### **Breaking Long Words**
```css
p.texteffest2 {
    width: 300px;
    height: 120px;
    border: 2px solid aqua;
    overflow-wrap: break-word;
}

p.texteffest3 {
    font-family: Arial, Helvetica, sans-serif;
    width: 300px;
    height: 100px;
    background-color: brown;
    border: 1px solid;
    word-break: break-all;
}
```
- `overflow-wrap: break-word;` wraps long words within the container.
- `word-break: break-all;` breaks words at any point.

---

## 3. CSS Web Fonts

CSS allows the use of custom fonts through `@font-face`.

### **Using Custom Fonts**
```css
@font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}

@font-face {
    font-family: myFirstFont;
    src: url(sansation_bold.woff);
    font-weight: bold;
}

* {
    font-family: myFirstFont;
}
```
- Custom fonts are loaded using `@font-face`.
- All text in the document will use the new font.

---

## Complete Example

### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Shadows, Text Effects, and Web Fonts</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>CSS Shadows</h1>
    <div id="shadow1"><p>CSS Shadows</p></div>
    <div id="shadow2"><p>CSS Shadows</p></div>
    <div id="shadow3"><p>CSS Shadows</p></div>

    <div class="card">
        <div class="cardbody"><h2> CARD</h2></div>
        <div class="textcard"><p>Text Card</p></div>
    </div>

    <h1>CSS Text Effects</h1>
    <p class="texteffest1">This is an example of text overflow with ellipsis.</p>
    <p class="texteffest2">This paragraph demonstrates word wrapping.</p>
    <p class="texteffest3">This text will break words at any point.</p>

    <h1>CSS Web Fonts</h1>
    <div>With CSS, websites can use <b>fonts other than the pre-selected "web-safe" fonts</b>.</div>

</body>
</html>
```

---

## **Practice:**
1. **Modify Shadows:**
   - Add more blur or color variations to `text-shadow` and `box-shadow`.

2. **Experiment with Text Effects:**
   - Use `letter-spacing`, `text-transform`, or `line-height` to style text.

3. **Try Different Web Fonts:**
   - Use Google Fonts by linking `@import` in CSS.

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 5th February 2025
