# Full Stack Web Development - Class 04: Iframes, JavaScript, File Paths, Head, Layout, Responsive, Computer Code, Semantics

## Topics Covered
- HTML Iframes
- HTML JavaScript
- HTML File Paths
- HTML Head
- HTML Layout
- HTML Responsive
- HTML Computer Code
- HTML Semantics

---

## 1. HTML Iframes
The `<iframe>` tag embeds another HTML page within the current page. It can be used to include content from another source, such as a webpage, video, or document.

### Example:
```html
<iframe src="https://www.example.com" frameborder="1" width="300" height="300" title="Example Iframe"></iframe>
```

## 2. HTML JavaScript
HTML allows embedding JavaScript inside HTML pages for dynamic behavior.

### Example:
```html
<script>
    document.write('Hello, this is JavaScript!');
</script>
```

## 3. HTML File Paths
HTML file paths indicate the location of a file, such as an image or other resources, relative to the current HTML file.

### Example:
```html
<img src="../Images/device.jpg" alt="Device" style="max-width: 100%;">
```

## 4. HTML Head 
The `<head>` section contains meta information about the HTML document, such as character set, title, and links to external resources (CSS, JS). The `<base>` tag is used to set a base URL for all relative links within the page.

### Example:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="HTML, CSS, JS">
    <meta name="description" content="HTML Course">
    <meta name="author" content="John">
    <title>Class 04</title>
    <base href="../Class01/" target="_blank">
</head>
```

## 5. HTML Layout
HTML layout can be structured using `<header>`, `<nav>`, `<section>`, `<article>`, and `<footer>` tags. These tags provide a semantic meaning to the layout.

### Example:
```html
<header>
    <h1>Welcome to My Website</h1>
</header>
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## 6. HTML Responsive
Responsive web design ensures that a webpage adjusts correctly to different screen sizes. This is often achieved using the viewport meta tag and CSS media queries.

### Example:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 7. HTML Computer Code
HTML provides tags like `<pre>`, `<code>`, `<kbd>`, `<samp>`, and `<var>` to display and format computer code.

### Example:
```html
<pre><code>x + y = z</code></pre>
<p>The variable is <var>x</var></p>
```

## 8. HTML Semantics
Semantic HTML uses tags that describe their meaning. Tags like `<article>`, `<section>`, `<aside>`, and `<footer>` help in organizing content meaningfully.

### Example:
```html
<article>
    <h2>This is Article 1</h2>
    <p>Lorem ipsum dolor sit amet...</p>
</article>
```

---

### Summary Example :
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="HTML, CSS, JS">
    <meta name="description" content="HTML Course">
    <meta name="author" content="Jhon">
    <!-- <meta http-equiv="refresh" content="5"> -->
    <title>Class04</title>
    <base href="../Class01/" target="_blank">
</head>
<body>
    <!-- <header></header>
    <nav>
        <ul>
            <li><a href="#">item1</a></li>
            <li><a href="#">item2</a></li>
            <li><a href="#">item3</a></li>
            <li><a href="#">item4</a></li>
            <li><a href="#">item5</a></li>
        </ul>
    </nav> -->
    <!-- <details>
        <summary>London</summary>
        London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.
        Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.
    </details> -->
    <!-- <a href="index.html">link</a> -->
    <!-- <h3>This is Class04</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in quis repellat ad doloremque laborum, ducimus labore, aut dicta molestiae amet perspiciatis voluptatibus nostrum cumque corporis provident quam obcaecati? Dolores!</p>
    <iframe src="../Class03/index.html" frameborder="1" name="link" width="300" height="300" title="This is Iframe"></iframe>
    <p><a href="https://getbootstrap.com/" target="link">Click me</a></p> -->
    <!-- <script>document.write('Hello I am js');</script> -->
    <!-- <noscript>Your browser does not support js</noscript> -->
    <!-- <iframe src="../../class2/class3/hello.html" frameborder="1" name="link" width="300" height="300" title="This is Iframe"></iframe> -->
    <!-- <img src="../Class02/Images/device.jpg" alt="" style="max-width: 100%;">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat sapiente aperiam vero, tempora neque ipsum tenetur suscipit facilis enim assumenda laborum adipisci id obcaecati? Iste incidunt possimus qui aperiam.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptas dolore facere praesentium at voluptate tempore quod ratione et, velit temporibus ducimus qui hic similique omnis neque nam odit placeat.</p> -->
    <!-- <p>Save the document using shortcut given below:</p>
    <kbd>Ctrl+s</kbd>
    <p><samp>File not found</samp></p>
    <pre><code>x + y = z
x = 5;
y = 3;</code></pre>
    <p>The variable is <var>x</var></p> -->
    <article>
        <h3>This is Article 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum autem illo incidunt enim dolorem eaque sed omnis perspiciatis earum, nam qui consectetur aut tenetur ab harum provident velit. Architecto, atque. <a href="">Read more...</a></p>
    </article>
</body>
</html>
```

---

## Homework/Practice:
- Create an HTML page that includes an iframe and an embedded JavaScript function.
- Use semantic HTML to structure your layout.
- Display a sample of computer code using the appropriate tags.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 25th September, 2024
