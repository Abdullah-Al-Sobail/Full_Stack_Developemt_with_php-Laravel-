# Full Stack Web Development - CSS Class 04: Outline, Height & Width, and Box Model

## Topics Covered:
- CSS Outline
- CSS Height, Width, and Max-width
- CSS Box Model and Sizing

---

## 1. CSS Outline
The CSS `outline` property is used to create an outline around an element. It is different from the border as it doesn’t take up space within the box model. Outlines are used primarily for accessibility and design focus.

### Outline Properties:
- `outline-style`: Defines the style of the outline (e.g., solid, dashed).
- `outline-width`: Specifies the thickness of the outline.
- `outline-color`: Sets the color of the outline.
- `outline-offset`: Adds space between the outline and the element’s border.

### Example:
```css
#outline {
    margin: 50px;
    border: 2px solid red;
    outline: 20px solid blue;
    outline-offset: 15px;
}
```

---

## 2. CSS Height, Width, and Max-width
CSS properties like `height`, `width`, and `max-width` help define the size of elements.

### Height & Width:
- `height` and `width`: Set the height and width of an element.
- `min-height` and `min-width`: Ensure an element has at least a minimum size.
- `max-height` and `max-width`: Restrict an element’s maximum size.

### Example:
```css
.heigth {
    background-color: aqua;
    width: 500px;
    height: 100px;
    min-height: 500px;
}
```

---

## 3. CSS Box Model and Sizing
The CSS Box Model is the foundation of web layout, comprising margins, borders, padding, and content. The `box-sizing` property allows you to control how width and height are applied.

### Box Sizing:
- `box-sizing: content-box` (default): Width and height apply only to the content area.
- `box-sizing: border-box`: Width and height include padding and borders, which is often more intuitive.

### Example:
```css
.box {
    border: 5px solid green;
    padding: 5px;
    margin: 5px;
}

.div1 {
    width: 300px;
    height: 100px;
    border: 5px solid blue;
    padding: 20px;
    box-sizing: border-box;
}
.div2 {
    width: 300px;
    height: 100px;
    padding: 20px;
    border: 5px solid green;
}
```

---

## Example Code from Class 04:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>#Outline</h1>
    <div id="outline">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quam dignissimos nulla necessitatibus, explicabo amet neque vel accusantium atque deleniti!</p>
    </div>

    <h1>#Height & Width</h1>
    <div>
        <p class="heigth">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quisquam impedit rem saepe molestiae odit veniam. Mollitia ea quas laboriosam nobis, aliquid porro molestias voluptate at esse culpa? Aspernatur, laboriosam?
        </p>
    </div> 

    <h1 class="box">#Box Model</h1>
    <div>
        <p id="para1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, minima?</p>
        <p id="para2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, itaque accusantium? Dolore vel facilis ut, sapiente eligendi neque itaque facere.</p>
    </div>
    <div class="div1">
        Lorem ipsum dolor sit amet consectetur
    </div>
    <br><br>
    <div class="div2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nulla optio, laudantium ipsum ea eos. Explicabo iste ducimus amet libero.
    </div>
</body>
</html>
```

---

## Practice:
- Create an element with a solid outline and set an `outline-offset` value to see the separation between the outline and border.
- Define different values for `min-width` and `max-width` on a box and observe how it behaves when resized.
- Apply `box-sizing: border-box` to a div with padding and border, then compare its size to another div with `box-sizing: content-box` to understand the difference.

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 8th November, 2024