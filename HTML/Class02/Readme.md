```markdown
# Full Stack Web Development - Class 02: HTML Quotations, Comments, Colors, Links, and Images

## Topics Covered
- HTML Quotations
- HTML Comments
- HTML Colors
- HTML CSS
- HTML Links
- HTML Images
- Image Map
- The Picture Element

---

## 1. HTML Quotations
HTML provides different tags to define quotations, such as:
- `<blockquote>` for block-level quotes.
- `<q>` for inline quotes.
- `<cite>` for referencing titles of works.

### Example:
```html
<blockquote cite="https://www.loremipsum.com">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus distinctio cupiditate provident.
</blockquote>

<cite>University Cantten</cite> is a popular book.
```

---

## 2. HTML Comments
HTML comments are written using `<!-- comment here -->`. Comments are not displayed in the browser but are helpful for adding notes within the code.

### Example:
```html
<!-- This is a comment -->
<p>This is a paragraph.</p>
```

---

## 3. HTML Colors
HTML supports color customization through attributes like:
- Hexadecimal (`#5489BD`)
- RGB (`rgb(150, 173, 17)`)
- RGBA with transparency (`rgba(150, 173, 17, 0.9)`)
- HSL (`hsl(50, 100%, 40%)`)

### Example:
```html
<p style="color: #5489BD;">This text is colored using Hex code.</p>
<p style="color: rgba(150, 173, 17, 0.9);">This text uses RGBA color with transparency.</p>
<p style="color: hsla(50, 100%, 40%, 0.8);">This text uses HSLA color with transparency.</p>
```

---

## 4. HTML CSS
You can apply inline CSS directly within HTML tags using the `style` attribute. This controls various aspects like color, font, and layout.

### Example:
```html
<p style="color: blueviolet; font-size: 18px;">This paragraph uses inline CSS.</p>
```

---

## 5. HTML Links
HTML links are created using the `<a>` tag, allowing users to navigate between pages or open external URLs.

### Example:
```html
<a href="https://www.google.com" target="_top" title="Google search...">Google</a>
<a href="../Class01/index.html" target="_blank">Class01</a>
<a href="mailto:example@gmail.com">Email</a>
```

---

## 6. HTML Images
Images are embedded using the `<img>` tag, and attributes like `src`, `alt`, `width`, and `height` define the image's source and appearance.

### Example:
```html
<img src="./Images/images.jpg" alt="Description" width="200px" height="200px">
```

---

## 7. Image Map
An image map allows you to define clickable areas within an image using the `<map>` and `<area>` tags.

### Example:
```html
<img src="./Images/device.jpg" usemap="#device">

<map name="device">
    <area target="" alt="" title="" href="https://www.example.com" coords="138,68,191,172" shape="rect">
</map>
```

---

## 8. The Picture Element
The `<picture>` element allows you to serve different images based on screen size or media conditions using `<source>` tags.

### Example:
```html
<picture>
    <source media="(max-width:500px)" srcset="./Images/device.jpg">
    <source media="(max-width:600px)" srcset="./Images/images.jpg">
    <img src="./Images/MainAfter.webp" alt="Responsive Image">
</picture>
```

---

## Summary Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class02 HTML</title>
    <link rel="shortcut icon" href="./Images/images.jpg" type="image/x-icon">
</head>
<body>
    <p style="color:#5489BD;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vel placeat rerum atque dolor corporis magnam quaerat commodi reiciendis sapiente amet molestiae eum modi molestias incidunt, vero quidem iste quisquam!</p>

    <blockquote cite="https://www.loremipsum.com">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore necessitatibus distinctio cupiditate provident, eos nam tempore sit similique architecto ea delectus obcaecati quos magni fugiat dicta sapiente. Dignissimos, earum ipsa.
    </blockquote>

   <p style="color: rgba(150, 173, 17,0.9);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem soluta earum quam. Hic aspernatur cum in dolore, <!--<q>sequi omnis voluptatem blanditiis</q>--> eum doloremque amet ut temporibus suscipit! Unde, exercitationem necessitatibus?
    <abbr title="Hyper Text Markup Language">HTML</abbr>
   </p>

   <!-- This is address -->
   <address><!--This is opening tag-->
    Written By Someone. <br>
    <!--This is inside tag-->
    Visit us at: <br>
    Example.com
   </address>

   <p><cite style="color: blueviolet;">University Cantten</cite> is an popular book</p>
   
   <bdo dir="ltr" style="color: hsla(50, 100%, 40%,0.8);">Lorem ipsum dolor sit amet consectetur </bdo>

   <a href="https://www.google.com" target="_top" title="Google search...">Google</a>
   <a href="../Class01/index.html" target="_blank">Class01</a>
   <a href="mailto:example@gmail.com">Email</a>

</body>
</html>
```

---

## Homework/Practice:
- Create a simple HTML page using the concepts covered in this class.
- Experiment with quotations, colors, and links.
- Add an image map to an image on your page.
- Use the `<picture>` element to add responsive images.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 24th September, 2024
```

This markdown file includes the Class 02 topics, examples, and a summary. Let me know if you need further adjustments!