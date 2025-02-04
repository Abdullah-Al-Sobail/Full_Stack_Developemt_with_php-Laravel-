# Full Stack Web Development - CSS Class 12: Borders, Backgrounds, and Colors

## Topics Covered:
1. CSS Rounded Corners  
2. CSS Border Images  
3. CSS Backgrounds  
4. CSS Colors & Color Keywords  

---

## 1. CSS Rounded Corners

CSS provides the `border-radius` property to create rounded corners.

### Example:
```css
.box {
    height: 300px;
    width: 300px;
    border: 5px solid;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-image: url(./download.jpeg);
    background-repeat: no-repeat;
}
```
This applies a rounded effect to the top-left and bottom-right corners.

---

## 2. CSS Border Images

The `border-image` property allows you to use an image or a gradient as a border.

### Example:
```css
.border {
    height: 100px;
    width: 300px;
    border: 10px solid;
    border-image: linear-gradient(orange, green) 30% round;
}
```
This applies a gradient border instead of a solid color.

---

## 3. CSS Backgrounds

CSS backgrounds can be customized with images, colors, and effects.

### Example 1: Background Image with Opacity
```css
.background {
    height: 500px;
    padding: 10px;
    background-image: url(./download.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top right;
    opacity: 0.2;
}
```
This sets a background image with a transparent effect.

### Example 2: Background Origin
```css
.background1 {
    border: 10px dotted rebeccapurple;
    padding: 5px;
    background: url(./image.png) center no-repeat;
    background-origin: content-box;
}
```
This ensures the background starts from the content box.

### Example 3: Background Clip
```css
.background2 {
    border: 10px dotted rebeccapurple;
    padding: 10px;
    background: url(./image.png);
    background-repeat: no-repeat;
    background-clip: content-box;
}
```
This clips the background to fit within the content box.

---

## 4. CSS Colors & Color Keywords

CSS supports different ways to define colors:  
- **RGBA** (Red, Green, Blue, Alpha)  
- **Hexadecimal (`#RRGGBB`)**
- **HSL (Hue, Saturation, Lightness)**
- **Gradient Colors (Linear & Radial)**

### Example:
```css
#div1 {
    border: 2px solid;
    background-color: rgba(255, 0, 0, 0.1);
}

#div2 {
    border: 2px solid;
    background-color: #ff000080;
}

#div3 {
    border: 2px solid;
    background-color: hsl(0, 98%, 50%);
    opacity: 0.5;
}

#div4 {
    height: 50px;
    background: linear-gradient(to right, green, red, blue, black, brown, skyblue);
}

#div5 {
    height: 50px;
    background: linear-gradient(45deg, green 20%, red);
}

#div6 {
    height: 100px;
    background: radial-gradient(red 20%, green 80%);
}
```

---

## Complete Example:

### **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borders, Backgrounds, and Colors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Rounded Corners -->
    <h1>CSS Rounded Corners</h1>
    <div class="box"></div>

    <h1>CSS Border Images</h1>
    <div class="border">
        <p>This is a border image</p>
    </div>

    <h1>CSS Backgrounds</h1>
    <div class="background">
        <p>Background with opacity</p>
    </div>
    <br>
    <div class="background1">
        <p>Background origin example</p>
    </div>
    <br>
    <div class="background2">
        <p>Background clip example</p>
    </div>

    <h1>CSS Colors & Keywords</h1>
    <div id="div1"> ....rgba</div>
    <div id="div2">....rgba</div>
    <div id="div3">...hsl</div>
    <div id="div4"></div> <br>
    <div id="div5"></div> <br>
    <div id="div6"></div>

</body>
</html>
```

---

### **Practice:**
1. **Modify Border Radius**:  
   - Apply `border-radius: 50%` to make a circular shape.

2. **Try Different Border Images**:  
   - Use `border-image: url('border.png') 30% stretch;`

3. **Experiment with Backgrounds**:  
   - Use `background-attachment: fixed;` to create a parallax effect.

4. **Try Different Color Formats**:  
   - Use `rgb()`, `hsl()`, and `hex` to define different colors.

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 2nd February 2025