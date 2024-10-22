# Full Stack Web Development - Class 07: HTML Input Attributes, Graphics, and Media Elements

## Topics Covered:
- HTML Input Attributes
- HTML Form Attributes
- HTML Graphics
  - HTML Canvas
- HTML Media
  - HTML Video
  - HTML Audio
  - HTML YouTube Embedding

---

## 1. HTML Input Attributes
HTML input attributes provide additional features to input fields. Common input attributes include:
- `readonly`: Prevents user modification of the input value.
- `autofocus`: Automatically focuses on the input when the page loads.
- `min` and `max`: Define the range for numerical inputs.
- `pattern`: Validates input against a regular expression.

### Example:
```html
<form>
    <label for="fname">First Name:</label><br>
    <input type="text" id="fname" value="John" readonly size="20"><br><br>

    <label for="lname">Last Name:</label><br>
    <input type="text" id="lname" autofocus><br><br>

    <label for="number">Number:</label><br>
    <input type="number" min="5" max="10"><br><br>

    <label for="pin">PIN:</label><br>
    <input type="text" size="5" maxlength="5"><br><br>

    <label for="password">Password:</label><br>
    <input type="text" pattern="[0-9]{3}-[A-Z]{2}-[0-9]{3}" required><br><br>

    <input type="range" min="0" max="100" step="25">
    <input type="submit">
</form>
```

---

## 2. HTML Canvas
The HTML `<canvas>` element is used to draw graphics on a web page using JavaScript. You can draw shapes, images, and other objects using various drawing methods.

### Example:
```html
<canvas id="myCanvas" width="200" height="200" style="border:1px solid #000;"></canvas>
<script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
</script>
```

---

## 3. HTML Media Elements
HTML supports embedding audio and video content into web pages.

### HTML Video:
The `<video>` element allows embedding video files. It supports attributes like `controls`, `autoplay`, and `muted`.

### Example:
```html
<video controls autoplay muted>
    <source src="./videos/mov_bbb.mp4" type="video/mp4">
</video>
```

### HTML Audio:
The `<audio>` element allows embedding audio files. Like `<video>`, it supports attributes like `controls`.

### Example:
```html
<audio controls>
    <source src="./audio/horse.ogg">
</audio>
```

### HTML YouTube Embedding:
You can embed YouTube videos using an `<iframe>` element.

### Example:
```html
<iframe width="200" height="200" 
    src="https://www.youtube.com/embed/RChukikdU0Y?autoplay=1&mute=1" 
    title="YouTube video player" 
    frameborder="2" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

---

## Example Code from Class 07:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class07</title>
</head>
<body>
    <!-- Input Attributes -->
    <h3>Input Attribute:</h3>
    <form>
        <label for="fname">First Name:</label><br>
        <input type="text" value="John" readonly size="20"><br><br>
        <label for="lname">Last Name:</label><br>
        <input type="text" autofocus><br><br>
        <label for="number">Number:</label><br>
        <input type="number" min="5" max="10"><br><br>
        <label for="pin">PIN:</label><br>
        <input type="text" size="5" maxlength="5"><br><br>
        <label for="password">Password:</label><br>
        <input type="text" pattern="[0-9]{3}-[A-Z]{2}-[0-9]{3}" required><br><br>
        <input type="range" min="0" max="100" step="25">
        <input type="submit">
    </form>
    
    <!-- Media Elements -->
    <h4>HTML Media Element:</h4>
    <video controls autoplay muted>
        <source src="./videos/mov_bbb.mp4" type="video/mp4">
    </video>
    <audio controls>
        <source src="./Audio/horse.ogg">
    </audio>
    <iframe width="200" height="200" 
        src="https://www.youtube.com/embed/RChukikdU0Y?autoplay=1&mute=1" 
        title="YouTube video player" 
        frameborder="2" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>

    <!-- Canvas Element -->
    <canvas id="myCanvas" height="200" width="200" style="border:1px solid #000;"></canvas>
    <script>
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();
    </script>
</body>
</html>
```

---

## Practice:
- Create an HTML form that uses the `readonly`, `autofocus`, and `pattern` input attributes.
- Draw a diagonal line across a `<canvas>` element.
- Embed a YouTube video into your page and experiment with `autoplay` and `mute` attributes.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 22th October, 2024

---