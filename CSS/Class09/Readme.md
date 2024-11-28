# Full Stack Web Development - CSS Class 09: CSS Combinators, Pseudo-classes, and Pseudo-elements

## Topics Covered:
1. CSS Combinators  
2. CSS Pseudo-classes  
3. CSS Pseudo-elements  

---

## 1. CSS Combinators

CSS combinators are selectors used to define the relationship between elements. These include descendant, child, adjacent sibling, and general sibling combinators.

### Types of Combinators:
1. **Descendant Selector (`A B`)**: Matches all `B` elements inside `A`.
   ```css
   div p {
       color: blue;
       font-style: italic;
   }
   ```
2. **Child Selector (`A > B`)**: Matches all `B` elements that are direct children of `A`.
   ```css
   div > p {
       color: brown;
       font-size: large;
       border: 2px solid red;
   }
   ```
3. **Adjacent Sibling Selector (`A + B`)**: Matches the `B` element that is immediately preceded by `A`.
   ```css
   div + h1 {
       color: chartreuse;
   }
   ```
4. **General Sibling Selector (`A ~ B`)**: Matches all `B` elements that are siblings of `A`.
   ```css
   div ~ p {
       color: red;
   }
   ```

---

## 2. CSS Pseudo-classes

Pseudo-classes define the special state of an element, like hover, focus, or the first child.

### Examples of Pseudo-classes:
- **`:link`**: Styles an unvisited link.
   ```css
   a:link {
       color: aqua;
   }
   ```
- **`:visited`**: Styles a visited link.
   ```css
   a:visited {
       color: brown;
   }
   ```
- **`:hover`**: Styles an element when hovered.
   ```css
   a:hover {
       background-color: blue;
   }
   ```
- **`:active`**: Styles an element when it is active.
   ```css
   a:active {
       color: chartreuse;
   }
   ```
- **`:first-child`**: Styles the first child of a parent element.
   ```css
   .ahmed p:first-child span {
       background-color: aqua;
   }
   ```
- **`:hover` with class selector**:
   ```css
   p.pp:hover {
       background-color: blueviolet;
   }
   ```

---

## 3. CSS Pseudo-elements

Pseudo-elements style specific parts of elements, such as the first line or the first letter.

### Examples of Pseudo-elements:
- **`::first-line`**: Styles the first line of a paragraph.
   ```css
   p::first-line {
       color: darkgreen;
   }
   ```
   Example for a specific class:
   ```css
   p.second::first-line {
       color: blueviolet;
       font-weight: bold;
       font-size: 300%;
   }
   ```
- **`::first-letter`**: Styles the first letter of an element.
   ```css
   p::first-letter {
       color: blue;
       font-weight: bold;
       font-size: 300%;
   }
   ```
- **`::after`**: Inserts content after an element.
   ```css
   h3::after {
       content: url(car.jpeg);
   }
   ```

---

## Example Code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>CSS Combinators, Pseudo-classes, and Pseudo-elements</title>
</head>
<body>
    <h1>CSS Combinators</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <div>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <section>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
        </section>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div>
        <p>lorrem10</p>
    </div>
    <h1>CSS Pseudo-classes</h1>
    <a href="">Pseudo-class Example</a>
    <p class="pp">Hover over this paragraph.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, voluptatibus!</p>
    <div class="ahmed">
        <p>home <span>2</span></p>
        <p>mobile</p>
        <p>card</p>
        <p>remote</p>
    </div>
    <h1>CSS Pseudo-elements</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum, quod harum incidunt pariatur ullam cupiditate nobis quibusdam est non nihil maiores facere inventore dignissimos autem voluptates aliquid quaerat qui ducimus. Cum odit ab distinctio velit officia. Voluptate labore delectus corrupti recusandae laborum dolores possimus quaerat est. Deserunt, at repellendus.</p>
    <p class="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquid.</p>
    <h3>This is a sports car. Color is red.</h3>
</body>
</html>
```

---

## Practice:

1. **CSS Combinators**:
   - Use a child combinator (`>`) to style the direct children of a `section`.
   - Experiment with adjacent sibling (`+`) and general sibling (`~`) selectors.

2. **CSS Pseudo-classes**:
   - Create a navigation bar and use `:hover` to style menu items when hovered.
   - Use `:first-child` and `:last-child` to style specific elements in a list.

3. **CSS Pseudo-elements**:
   - Add `::first-letter` styling to the first paragraph of your webpage.
   - Insert an image using the `::after` pseudo-element.

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 18th November 2024