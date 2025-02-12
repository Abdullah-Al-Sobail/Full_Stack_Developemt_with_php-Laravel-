# Full Stack Web Development - CSS Class 16: Image Styling, Object Fit, and Masking  

## Topics Covered:  
1. **CSS Style Images**  
2. **CSS Image Reflection**  
3. **CSS `object-fit`**  
4. **CSS `object-position`**  
5. **CSS Masking**  

---

## **1. CSS Style Images**  

CSS allows us to enhance images with borders, shadows, and hover effects.

### **Example: Adding Borders & Hover Effects**
```css
img {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
}

img:hover {
    box-shadow: 0 0 4px 1px rgba(50, 140, 186, 0.5);
}
```
- `border`: Adds a border around the image.  
- `border-radius`: Rounds the corners of the image.  
- `box-shadow`: Adds a shadow effect on hover.  

---

## **2. CSS Image Reflection**  

Image reflection can be achieved using `filter` or `clip-path`.  

### **Example: Adding a Reflection Effect**
```css
img {
    display: block;
    margin: auto;
    width: 50%;
    filter: drop-shadow(5px 5px 10px gray);
}
```
- `drop-shadow()`: Creates a shadow effect similar to reflection.  

---

## **3. CSS `object-fit`**  

The `object-fit` property defines how an image fits within a container.  

### **Example: Different `object-fit` Values**
```css
img {
    width: 300px;
    height: 300px;
    object-fit: cover; /* Change to fill, contain, or scale-down */
}
```
- `cover`: Scales the image to cover the container.  
- `contain`: Fits the image inside the container without cropping.  
- `fill`: Stretches the image to fill the container.  
- `scale-down`: Uses the smallest possible size between `none` and `contain`.  

---

## **4. CSS `object-position`**  

The `object-position` property controls the placement of an image inside a container.

### **Example: Adjusting Image Position**
```css
img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: 50% 50%;
}
```
- Adjusts the position of the image inside the box.  
- The values `50% 50%` center the image.  

---

## **5. CSS Masking**  

Masking allows hiding parts of an image using a shape or another image.  

### **Example: Applying an Image Mask**
```css
.mask1 {
    -webkit-mask-image: url(image.png);
    mask-image: url(image.png);
    mask-repeat: no-repeat;
}
```
- `mask-image`: Defines the masking image.  
- `mask-repeat`: Ensures the mask does not repeat.  

---

## **Complete Example**

### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Image Styling</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>CSS Styled Images</h1>
    <img src="image.png" alt="Styled Image" width="500px" height="300px">

    <h1>CSS Object Fit & Position</h1>
    <img src="image.png" alt="Object Fit" class="fit-image">

    <h1>CSS Masking</h1>
    <div class="mask1">
        <img src="lion.jpeg" alt="Masked Image" width="500px" height="300px">
    </div>

</body>
</html>
```

### **CSS**
```css
/* Image Styling */
img {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;
    max-width: 100%;
    height: auto;
}

img:hover {
    box-shadow: 0 0 4px 1px rgba(50, 140, 186, 0.5);
}

/* Object Fit & Position */
.fit-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: center;
}

/* Masking */
.mask1 {
    -webkit-mask-image: url(image.png);
    mask-image: url(image.png);
    mask-repeat: no-repeat;
}
```

---

## **Practice Tasks:**
1. **Apply different `object-fit` values** and observe the changes.  
2. **Create a hover effect for images** using `opacity` and `transform`.  
3. **Experiment with `mask-image`** using different masking shapes.  

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 12th Feb 2025  