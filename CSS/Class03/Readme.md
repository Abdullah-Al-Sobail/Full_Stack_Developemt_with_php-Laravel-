# Full Stack Web Development - CSS Class 03: Borders, Margins, and Padding

## Topics Covered:
- CSS Borders
- CSS Margins
- CSS Padding

---

## 1. CSS Borders
Borders are used to define the outline of an element and can be styled with various properties like width, color, and style.

### Border Properties:
- `border-style`: Specifies the style of the border (e.g., solid, dashed, dotted).
- `border-width`: Defines the thickness of the border.
- `border-color`: Sets the color of the border.
- `border-radius`: Rounds the corners of the border (useful for circles or rounded shapes).

### Example:
```css
#border {
    height: 500px;
    width: 500px;
    border-style: solid;
    border-width: 5px;
    border-color: black;
}

.p {
    height: 200px;
    width: 200px;
    border: 2px solid;
    border-radius: 50%;
    margin: 20px;
}
```

---

## 2. CSS Margins
Margins create space outside of an element's border, essentially controlling the distance between elements.

### Margin Syntax:
- `margin-top`, `margin-right`, `margin-bottom`, `margin-left`: Controls individual sides.
- `margin`: Shorthand property where you can specify values for all sides in the order: `top right bottom left`.

### Example:
```css
.margin1 {
    border: 2px solid red;
    margin: 20px 30px 50px 70px;
}

.margin2 {
    border: 2px dotted black;
    margin-right: 30px;
}
```

---

## 3. CSS Padding
Padding creates space inside an element, between the content and the border. It increases the clickable area of elements without affecting other elements around them.

### Padding Syntax:
- `padding-top`, `padding-right`, `padding-bottom`, `padding-left`: Controls individual sides.
- `padding`: Shorthand property to set padding on all sides.

### Example:
```css
.padding {
    border: 5px solid;
    padding: 50px 30px 50px 30px;
}
```

---

## Example Code from Class 03

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box model and Spacing</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
     <h1>Border</h1>
     <div id="border">
        <p class="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, laborum.</p>
     </div>

     <h1>Margin</h1>
     <div class="margin1">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid alias similique vero modi deleniti quasi ab corporis velit saepe quia!</p>
     </div>
     <div class="margin2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid alias similique vero modi deleniti quasi ab corporis velit saepe quia!</p>
     </div>

     <h1>Padding</h1>
     <div class="padding">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid alias similique vero modi deleniti quasi ab corporis velit saepe quia!</p>
     </div>
</body>
</html>
```

---

## Practice:
- Create a box with a solid border, adjusting the `border-width`, `border-color`, and `border-radius` to experiment with different styles.
- Add margin properties to create space around two div elements and observe how `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` work.
- Add padding inside an element and observe the effect on the size and spacing of the content within.

**Instructor**: Muaz Muhammad 
**Course**: Full Stack Web Development  
**Date**: 7th November, 2024