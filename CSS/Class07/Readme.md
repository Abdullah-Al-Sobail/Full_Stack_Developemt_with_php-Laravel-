# Full Stack Web Development - CSS Class 07: Display, Position, and Z-index

## Topics Covered:
1. **CSS Display**
2. **CSS Position**
3. **CSS Z-index**

---

## 1. CSS Display

The `display` property controls how elements are displayed on the page. 

### Common Values:
- **`block`**: Makes the element a block-level element (takes up the full width available).
- **`inline`**: Makes the element an inline element (takes up only as much width as necessary).
- **`inline-block`**: Behaves like `inline`, but allows setting height and width.
- **`none`**: Hides the element (it will not occupy any space in the document flow).

### Example:
```css
.div1 {
    border: 2px solid;
    height: 50px;
    width: 40%;
    display: inline-block;
    visibility: hidden; /* Makes the element invisible but still occupies space */
}

.div2 {
    border: 2px solid red;
    height: 50px;
    width: 40%;
    display: inline-block; /* Elements are displayed in a row */
}

.div3 {
    border: 2px solid chartreuse;
    height: 50px;
    width: 15%;
    display: inline-block;
}
```

---

## 2. CSS Position

The `position` property specifies the type of positioning method used for an element.

### Common Values:
- **`static`**: Default positioning. The element is positioned according to the normal flow of the document.
- **`relative`**: Positions the element relative to its normal position.
- **`absolute`**: Positions the element relative to its nearest positioned ancestor.
- **`fixed`**: Positions the element relative to the viewport.
- **`sticky`**: Toggles between `relative` and `fixed` based on the user's scroll position.

### Example:
```css
.parent {
    border: 2px solid;
    height: 200px;
    width: 600px;
    margin: 100px;
    padding: 5px;
}

.one {
    height: 50px;
    width: 50px;
    background-color: brown;
    position: fixed; /* Stays in the same position even when scrolling */
}

.two {
    height: 50px;
    width: 50px;
    background-color: burlywood;
    position: sticky; /* Sticks to the top when scrolled */
}

.three {
    height: 50px;
    width: 50px;
    background-color: violet;
    position: relative; /* Positioned relative to its normal flow */
    left: 100px;
    top: 50px;
}
```

---

## 3. CSS Z-index

The `z-index` property specifies the stack order of elements. Elements with a higher `z-index` value appear in front of elements with a lower value.

### Notes:
- `z-index` works only on elements that have a `position` value of `relative`, `absolute`, `fixed`, or `sticky`.
- Negative values can place elements behind other elements.

### Example:
```css
img {
    position: absolute;
    left: 100px;
    top: 100px;
    z-index: -1; /* Places the image behind other elements */
}
```

---

## Example Code from Class 07

### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Visibility and Layout</title>
</head>
<body>

<h1>Display</h1>
<div class="div1">Div1</div>
<div class="div2">Div2</div>
<div class="div3">Div3</div>
<span>span1</span>
<span>span2</span>
<a href="">link here</a>

<h1>Position</h1>
<div class="parent">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">Three</div>
</div>

<p>Lorem ipsum dolor sit amet...</p>
<img src="img/cls6 (1).png" width="100" height="100">

</body>
</html>
```

### CSS:
```css
.div1 {
    border: 2px solid;
    height: 50px;
    width: 40%;
    display: inline-block;
    visibility: hidden; /* Makes the element invisible but keeps space occupied */
}

.div2 {
    border: 2px solid red;
    height: 50px;
    width: 40%;
    display: inline-block;
}

.div3 {
    border: 2px solid chartreuse;
    height: 50px;
    width: 15%;
    display: inline-block;
}

span {
    border: 2px solid;
    height: 100px;
    display: block; /* Makes spans behave like block elements */
}

.parent {
    border: 2px solid;
    height: 200px;
    width: 600px;
    margin: 100px;
    padding: 5px;
}

.one {
    height: 50px;
    width: 50px;
    background-color: brown;
    position: fixed; /* Stays fixed regardless of scrolling */
}

.two {
    height: 50px;
    width: 50px;
    background-color: burlywood;
    position: sticky; /* Sticks to its container's top */
}

.three {
    height: 50px;
    width: 50px;
    background-color: violet;
    position: relative; /* Positioned relative to its normal position */
    left: 100px;
    top: 50px;
}

img {
    position: absolute; /* Positioned relative to its container */
    left: 100px;
    top: 100px;
    z-index: -1; /* Stacked behind other elements */
}
```

---

## Practice Tasks

1. **Display Practice**:
   - Experiment with different `display` values (`inline`, `block`, `inline-block`, `none`).
   - Use the `visibility` property to hide or show elements while maintaining layout.

2. **Position Practice**:
   - Create elements with each of the `position` values (`static`, `relative`, `absolute`, `fixed`, and `sticky`).
   - Use margins and paddings to observe how they affect positioned elements.

3. **Z-index Practice**:
   - Layer multiple elements with `position` and `z-index`.
   - Use negative `z-index` values to place elements behind others.

**Instructor**: Muaz Muhammad.  
**Course**: Full Stack Web Development  
**Date**: 20th November, 2024