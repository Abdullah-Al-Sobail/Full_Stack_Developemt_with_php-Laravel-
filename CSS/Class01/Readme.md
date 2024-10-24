# Full Stack Web Development - Class 01: CSS Introduction, Syntax, Selectors, How To, and Cascading Order

## Topics Covered:
- CSS Introduction
- CSS Syntax
- CSS Selectors
- CSS "How To" (Different ways to apply CSS)
- CSS Cascading Order

---

## 1. CSS Introduction
CSS (Cascading Style Sheets) is a language used to style the HTML content on a web page. It allows developers to control the layout, colors, fonts, and other visual aspects of a website.

---

## 2. CSS Syntax
CSS rules are made up of selectors and declaration blocks. A declaration block contains properties and their corresponding values.

### Example:
```css
selector {
    property: value;
}
```

---

## 3. CSS Selectors
CSS selectors define the elements to which a set of CSS rules apply. Common types of selectors include:
- Universal Selector (`*`)
- Type Selector (`element`)
- Class Selector (`.classname`)
- ID Selector (`#id`)
- Grouping Selector (`element1, element2`)

### Example:
```css
/* Universal Selector */
* {
    margin: 0;
    padding: 0;
}

/* Class Selector */
.box {
    background-color: blue;
    color: white;
}

/* ID Selector */
#special {
    font-weight: bold;
    color: red;
}
```

---

## 4. CSS How To
CSS can be added to HTML in three ways:
1. **Inline CSS**: Directly inside HTML tags using the `style` attribute.
2. **Internal CSS**: Inside the `<style>` tag within the `<head>` section of an HTML document.
3. **External CSS**: By linking an external `.css` file.

### Example:
```html
<!-- External CSS file link -->
<link rel="stylesheet" href="styles.css">
```

---

## 5. CSS Cascading Order
CSS follows a specific order of priority known as the **cascading order**. The order of precedence is:
1. Inline styles
2. Internal styles (within the `<style>` tag)
3. External styles (linked CSS files)
4. Browser defaults

When multiple styles apply to the same element, the most specific rule takes precedence.

---

## Example Code from Class 01:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class01</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>This is Heading1</h1>
   <div class="frist common">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam doloremque distinctio consectetur, eligendi blanditiis cumque eum deleniti provident est aperiam repudiandae accusamus assumenda facere, a adipisci odit voluptate autem. Repellendus.</p>
    <p id="middle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda quibusdam deleniti non esse commodi perferendis beatae magnam amet voluptates aliquid, repudiandae, voluptatem pariatur aliquam labore. Sit reprehenderit soluta modi!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident assumenda quibusdam deleniti non esse commodi perferendis beatae magnam amet voluptates aliquid, repudiandae, voluptatem pariatur aliquam labore. Sit reprehenderit soluta modi!</p>
   </div>

   <div class="div2 common">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus cupiditate asperiores nulla quam esse quaerat delectus! Recusandae accusantium esse laboriosam placeat saepe ab, molestiae provident numquam harum, nihil atque!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad iure maiores autem odit ipsam. Adipisci alias commodi recusandae iste eum nesciunt, error obcaecati natus, ducimus ipsum quibusdam dicta vitae reiciendis.</p>
   </div>
</body>
</html>
```

```css
/* style.css */
* {
    background-color: cadetblue;
}

h1 {
    color: red;
}

.frist p {
    color: brown;
}

#middle {
    color: blue;
}

.common {
    background-color: mediumaquamarine;
}
```

---

## Practice:

### 1. Basic CSS Syntax
Write a CSS rule to make all `<h2>` elements have green text and underline them.

```html
<h2>This is a heading</h2>
```

### 2. Universal Selector
Use the universal selector to apply a lightgray background color to all elements on the page.

```html
<p>This is a paragraph.</p>
```

### 3. Class Selector
Create a class `blue-box` that gives a blue background and white text to any `<div>` element.

```html
<div class="blue-box">
    This is a blue box with white text.
</div>
```

### 4. ID Selector
Write a CSS rule using an ID selector to make the text inside the element with ID `special` bold and red.

```html
<p id="special">This paragraph is special.</p>
```

### 5. External CSS
Create an external CSS file named `styles.css` that:
- Sets the background color to `lightgreen`.
- Changes all `<h1>` elements to have a `darkblue` text color.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 25th October, 2024  