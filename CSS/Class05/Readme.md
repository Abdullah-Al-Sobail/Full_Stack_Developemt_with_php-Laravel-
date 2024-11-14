# Full Stack Web Development - CSS Class 05: Text, Fonts, and Icons

## Topics Covered:
1. CSS Text
2. CSS Fonts
3. CSS Icons (FontAwesome and Bootstrap)

---

## 1. CSS Text

The `text` properties in CSS are used to style and position text within elements. They include text alignment, decoration, transformation, and spacing.

### Common Text Properties:
- **`text-align`**: Aligns text within its container (e.g., `left`, `center`, `right`).
- **`text-transform`**: Transforms text to uppercase, lowercase, or capitalize.
- **`text-shadow`**: Adds shadow effects to text.
- **`text-decoration`**: Adds decorations like underline, overline, and line-through.
- **`line-height`**: Sets the space between lines of text.
- **`letter-spacing`**: Controls the space between letters.

### Example:
```css
#p {
    color: aqua;
    text-align: justify;
    text-decoration: overline;
    text-decoration-style: dotted;
    text-decoration-color: red;
    text-indent: 0px;
    letter-spacing: 0px;
    line-height: 2;
}
```

---

## 2. CSS Fonts

CSS provides various properties to control the appearance of fonts in a webpage.

### Font Properties:
- **`font-family`**: Sets the typeface (e.g., Arial, Helvetica, sans-serif).
- **`font-style`**: Controls the style of the font (e.g., `normal`, `italic`, `oblique`).
- **`font-weight`**: Adjusts the thickness of the font (e.g., `normal`, `bold`, `lighter`).
- **`font-size`**: Sets the size of the font.
- **`font-variant`**: Used for stylistic variations, like `small-caps`.

### Example:
```css
.font1 {
    font-family: a;
    font-style: normal;
    font-weight: bold;
    font-size: medium;
}

.font2 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: lighter;
    font-size: 20px;
    font-variant: small-caps;
}
```

---

## 3. CSS Icons

Icons are small graphical representations that help in visually enhancing a webpage. Popular icon libraries include FontAwesome and Bootstrap Icons.

### FontAwesome Icons:
FontAwesome provides a large library of icons that can be added using classes. To use FontAwesome icons, add the FontAwesome stylesheet and use the appropriate classes for each icon.

### Bootstrap Icons:
Bootstrap also includes an icon library. Bootstrap icons are accessed using `glyphicon` classes.

### Example:
```html
<h1>FontAwesome Icons</h1>
<i class="fas fa-heart"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-solid fa-star"></i>

<h2>Bootstrap Icons</h2>
<i class="glyphicon glyphicon-cloud"></i>
<i class="glyphicon glyphicon-remove"></i>
<i class="glyphicon glyphicon-user"></i>
<i class="glyphicon glyphicon-envelope"></i>
<i class="glyphicon glyphicon-thumbs-up"></i>
```

### CSS for Icons:
```css
i {
    font-size: 100px;
    color: blue;
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
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>Text and Font Style</title>
</head>
<body>
    <h1 style="text-align: center; text-transform: uppercase; color: blue; text-shadow: 2px 2px #c02424;">Text</h1>
    <div class="text">
        <p id="p">Lorem ipsum, dolor sit amet consectetur <img src="img/OIP.jpeg" alt=""> adipisicing elit. Ab, repudiandae commodi cum, qui facilis soluta ducimus, corporis quia aut maxime voluptates asperiores. Dolorum officiis molestias labore asperiores incidunt ullam illo.</p>
    </div>
    <div class="unicode">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nulla.</div>

    <h1>Fonts</h1>
    <div>
        <p class="font1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa animi, illo dicta blanditiis praesentium nostrum dolorem! Eum assumenda fugit esse obcaecati natus, facilis, voluptates quaerat impedit quisquam illo beatae?</p>
        <p class="font2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa animi, illo dicta blanditiis praesentium nostrum dolorem! Eum assumenda fugit esse obcaecati natus, facilis, voluptates quaerat impedit quisquam illo beatae?</p>
    </div>

    <h1>FontAwesome Icons</h1>
    <i class="fas fa-heart"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-solid fa-star"></i>
    <br>
    <h2>Bootstrap Icons</h2>
    <i class="glyphicon glyphicon-cloud"></i>
    <i class="glyphicon glyphicon-remove"></i>
    <i class="glyphicon glyphicon-user"></i>
    <i class="glyphicon glyphicon-envelope"></i>
    <i class="glyphicon glyphicon-thumbs-up"></i>
</body>
</html>
```

---

## Practice

1. **Text Styling Practice**:
   - Create a new paragraph with different `text-decoration` styles such as `underline` and `line-through`.
   - Apply `text-transform` to see uppercase and lowercase variations.
   - Experiment with `text-shadow` to create various shadow effects.

2. **Font Styling Practice**:
   - Use different `font-family` values to compare font appearances.
   - Try using `font-variant: small-caps` on a paragraph.
   - Change `font-weight` and observe how the thickness of the font varies.

3. **Icon Practice**:
   - Add a few more FontAwesome and Bootstrap icons to your webpage.
   - Modify their color and size using CSS.

**Instructor**: Muaz Muhammad.  
**Course**: Full Stack Web Development  
**Date**: 13th November, 2024