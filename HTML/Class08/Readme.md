# Full Stack Web Development - Class 08: SVG (Scalable Vector Graphics)

## Topics Covered:
- Introduction to SVG
- SVG in HTML
- SVG Shapes: Rectangle, Circle, Ellipse, Line, Polygon, Polyline, Path
- SVG Text and TextPath
- Embedding Links and Images in SVG

---

## 1. Introduction to SVG
SVG (Scalable Vector Graphics) is an XML-based vector image format that allows you to create and manipulate graphics. SVG images can be scaled without losing quality, making them ideal for responsive web design.

---

## 2. SVG in HTML
SVG code can be directly embedded into HTML documents. SVG elements like `<rect>`, `<circle>`, and `<path>` are used to create shapes, lines, and more.

### Example:
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

---

## 3. SVG Shapes

### a) SVG Rectangle
The `<rect>` element is used to draw rectangles. You can adjust the position, size, and corner radii of the rectangle.

```html
<rect x="30" y="50" width="150" height="100" fill="yellow" stroke="red" stroke-width="3" rx="20" ry="30"/>
```

### b) SVG Circle
The `<circle>` element creates a circle by specifying its center coordinates (`cx`, `cy`) and radius (`r`).

```html
<circle cx="100" cy="100" r="50" stroke="green" stroke-width="4" fill="red"/>
```

### c) SVG Ellipse
The `<ellipse>` element defines an ellipse by specifying the `cx`, `cy` (center), `rx` (horizontal radius), and `ry` (vertical radius).

```html
<ellipse cx="150" cy="80" rx="100" ry="50" fill="blue" stroke="black" stroke-width="2"/>
```

### d) SVG Line
The `<line>` element is used to draw straight lines between two points.

```html
<line x1="0" y1="20" x2="50" y2="20" stroke="red" stroke-width="2"/>
<line x1="50" y1="20" x2="50" y2="60" stroke="green" stroke-width="2"/>
```

### e) SVG Polygon
A `<polygon>` element defines a shape consisting of straight lines connected by points. All the points are specified within the `points` attribute.

```html
<polygon points="200,10 250,190 160,210" stroke="purple" stroke-width="1" fill="orange"/>
```

### f) SVG Polyline
The `<polyline>` element is similar to `<polygon>`, but it does not connect the last point to the first.

```html
<polyline points="50,150 150,150 150,200 50,200" fill="none" stroke="blue" stroke-width="2"/>
```

### g) SVG Path
The `<path>` element allows for drawing more complex shapes using a series of commands for lines, curves, arcs, and more.

```html
<path d="M10 10 H 90 V 90 H 10 Z" stroke="black" fill="transparent"/>
```

---

## 4. SVG Text and TextPath
You can add text to your SVG with the `<text>` element. The `x` and `y` attributes control the position of the text.

```html
<text x="50" y="50" fill="black">Hello SVG!</text>
```

You can also align text along a path using the `<textPath>` element.

---

## 5. SVG Links and Images
SVG allows for embedding links and images within the graphic. For images, use the `<image>` element, and for links, use the `<a>` element.

```html
<image href="image.jpg" x="10" y="10" height="100" width="100"/>
<a href="https://example.com">
    <rect x="20" y="20" width="100" height="50" fill="blue"/>
</a>
```

---

## Example Code from Class 08:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class08</title>
</head>
<body>
    <svg height="250px" width="250px" style="border: 1px solid #000;">
        <line x1="0" y1="20" x2="50" y2="20" stroke="red" stroke-width="2"/>
        <line x1="50" y1="20" x2="50" y2="60" stroke="green" stroke-width="2"/>
        <line x1="50" y1="60" x2="100" y2="60" stroke="blue" stroke-width="2"/>
        <line x1="100" y1="60" x2="100" y2="100" stroke="black" stroke-width="2"/>
    </svg>
</body>
</html>
```

---

## Practice:
- Create an SVG with multiple shapes like rectangles, circles, and ellipses.
- Draw a complex shape using the `<path>` element.
- Embed text and a hyperlink inside an SVG element.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 22nd October, 2024