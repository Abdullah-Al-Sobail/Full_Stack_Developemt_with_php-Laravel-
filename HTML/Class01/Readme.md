# Full Stack Web Development - Class 01: Introduction to HTML

## Topics Covered
- HTML Document Object Model (DOM) Structure
- HTML Tags and Elements
- HTML Attributes
- Formatting Tags
- Heading Tags
- Paragraph Tags (`<p>`, `<pre>`)
- Basic HTML Structure

---

## 1. HTML Structure and DOCTYPE Declaration
In HTML, the structure of a document starts with the `<!DOCTYPE html>` declaration, followed by the main HTML tags (`<html>`, `<head>`, `<body>`). These define the overall framework of the web page.

### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```
## 2. Heading Tags (`<h1>` to `<h6>`)
HTML provides six levels of headings, from `<h1>` (the most important) to `<h6>` (the least important).
### Example:
```html
<h1>This is Heading1</h1>
<h2>This is Heading2</h2>
<h3>This is Heading3</h3>
<h4>This is Heading4</h4>
<h5>This is Heading5</h5>
<h6>This is Heading6</h6>
```
## 3. Paragraph Tags (`<p>`) and Line Breaks (`<br>`)
Paragraphs are represented by the `<p>` tag. To insert a line break, the `<br>` tag is used.
```html
<p>This is a paragraph. <br> This is another line in the same paragraph.</p>
```
## 4. Horizontal Rule (`<hr>`)
The `<hr>` tag creates a horizontal line, often used for separating content.
### Example:
```html
<hr>
```
## 5. Preformatted Text (`<pre>`)
The `<pre>` tag is used for displaying preformatted text, where spaces and line breaks are preserved.

### Example:
```html
<pre>
    This text is preformatted.
    It will keep line breaks
    and spaces.
</pre>
```
## 6. Formatting Tags
HTML offers several tags to style and format text. These include:

`<b>` and `<strong>` for bold text.
`<i>` and `<em>` for italicized text.
`<mark>` for highlighted text.
`<del>` for strikethrough text.
`<ins>` for inserted text.
`<u>` for underlined text.
`<sub>` for subscript.
`<sup>` for superscript.
### Example:
```html
<p>
    <b>Bold text</b> and <strong>strong text</strong>.
    <i>Italic text</i> and <em>emphasized text</em>.
    <mark>Highlighted text</mark>.
    <del>Strikethrough text</del> and <ins>inserted text</ins>.
    <u>Underlined text</u>.
    H<sub>2</sub>O and a<sup>3</sup>.
</p>
```
## 7. Summary Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style="color:red;background-color: blue;">This is Heading1</h1>
    <h2>This is Heading2</h2>
    <h3>This is Heading3</h3>
    <h4>This is Heading4</h4>
    <h5>This is Heading5</h5>
    <h6>This is Heading6</h6>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Molestias labore tempore blanditiis voluptatum perferendis, ab voluptate nemo quia iure neque.</p>
    <hr>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias labore tempore blanditiis voluptatum perferendis, ab voluptate nemo quia iure neque.</p>
    <pre>
        Lorem ipsum dolor sit.
        Lorem ipsum dolor 
        sit    amet.
    </pre>
    <p>
       <b>Bold text</b>, <i>italic text</i>, <mark>highlighted text</mark>, <u>underlined text</u>.
       H<sub>2</sub>O and a<sup>3</sup>.
    </p>
</body>
</html>
```
## Homework/Practice:

- Create a simple HTML page using all the tags covered in this class.
- Experiment with different HTML attributes (e.g., `style`, `class`).
- Use the `<pre>` tag to format a poem or any multi-line content.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 22nd September, 2024

