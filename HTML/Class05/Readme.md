# Full Stack Web Development - Class 05: HTML Semantics, Style Guide, Entities, Symbols, Emojis, Charsets, URL Encode, HTML vs. XHTML

## Topics Covered:
- HTML Semantics
- HTML Style Guide
- HTML Entities
- HTML Symbols
- HTML Emojis
- HTML Charsets
- HTML URL Encode
- HTML vs. XHTML

---

## 1. HTML Semantics
Semantic HTML tags clearly describe the purpose of the content in a web page. Common semantic tags include:
- `<article>`
- `<section>`
- `<nav>`
- `<header>`
- `<footer>`
- `<figure>`, `<figcaption>`

These tags help with accessibility and SEO as they provide meaning to the structure of the document.

### Example:
```html
<nav>
    <a href="#">Item1</a>
    <a href="#">Item2</a>
    <a href="#">Item3</a>
    <a href="#">Item4</a>
    <a href="#">Item5</a>
</nav>
```

---

## 2. HTML Style Guide
The HTML style guide includes best practices for writing clean and readable HTML. Key principles include:
- Use lowercase for HTML elements.
- Use double quotes for attribute values.
- Properly indent your code.
- Close all tags appropriately, especially self-closing tags.

Example:
```html
<img src="image.jpg" alt="Image description" />
```

---

## 3. HTML Entities
HTML entities are special characters used to display reserved characters like `<`, `>`, `&`, or characters not available on a standard keyboard. Entities start with `&` and end with `;`.

### Example:
- `&lt;` for `<`
- `&copy;` for ©
- `&nbsp;` for a non-breaking space (used to ensure spaces are preserved).

### Example in HTML:
```html
<p>
    10&nbsp; km &copy;
    &#65;
</p>
```

In this case:
- `&nbsp;` adds a non-breaking space between "10" and "km".
- `&copy;` is the copyright symbol (©).
- `&#65;` is the Unicode for "A".

---

## 4. HTML Symbols
HTML symbols are often used to display various signs such as mathematical symbols, currency symbols, or general icons.

### Example:
```html
&lt; (Less than)
&reg; (Registered Trademark)
&#8364; (Euro currency symbol)
```

---

## 5. HTML Emojis
HTML also supports the display of emojis using Unicode characters.

### Example:
```html
&#128514; (😂 - Face with Tears of Joy)
```

### Example in HTML:
```html
<figure>
    <img src="../Class02/Images/device.jpg" alt="Device Image">
    <figcaption>Fig 01: This is Device Image &#128514;</figcaption>
</figure>
```

---

## 6. HTML Charsets
The `<meta charset="UTF-8">` tag defines the character encoding for the HTML document. UTF-8 is the most widely used character set because it supports all characters, including special symbols, emojis, and languages from around the world.

### Example:
```html
<meta charset="UTF-8">
```

---

## 7. HTML URL Encode
URL encoding is used to convert special characters into a format that can be transmitted over the internet. For example, spaces in URLs are replaced with `%20`, and other special characters are also encoded.

### Example:
- Space: `%20`
- Ampersand (`&`): `%26`
- Plus (`+`): `%2B`

---

## 8. HTML vs. XHTML
HTML (HyperText Markup Language) and XHTML (eXtensible HyperText Markup Language) are both markup languages, but XHTML is stricter in terms of syntax. XHTML requires all elements to be properly closed, and tags must be in lowercase.

- **HTML** is more forgiving with its syntax.
- **XHTML** is XML-based and more strict.

### Example:
```html
<!-- HTML Syntax -->
<img src="image.jpg" alt="Image description">

<!-- XHTML Syntax (Self-closing tags) -->
<img src="image.jpg" alt="Image description" />
```

---

## Example Code from Class 05:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class05</title>
</head>
<body>
   <nav>
    <a href="#">Item1</a>
    <a href="#">Item2</a>
    <a href="#">Item3</a>
    <a href="#">Item4</a>
    <a href="#">Item5</a>
    &lt;
</nav> 
<p>
    10&nbsp; km &copy;
    &#65;
</p>
<figure>
    <img src="../Class02/Images/device.jpg" alt="Device Image">
    <figcaption>Fig 01: This is Device Image &#128514;</figcaption>
</figure>
</body>
</html>
```

---

## Homework/Practice:
- Create an HTML document using semantic tags like `<article>`, `<section>`, and `<footer>`.
- Include HTML entities and symbols in your content.
- Add some emojis to your page using Unicode characters.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 26th September, 2024
