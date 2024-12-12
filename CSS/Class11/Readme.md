# Full Stack Web Development - CSS Class 11: CSS Attribute Selectors and Forms

## Topics Covered:
1. CSS Attribute Selectors  
2. CSS Forms  

---

## 1. CSS Attribute Selectors

Attribute selectors allow you to target HTML elements based on their attributes and values. This is useful for applying styles dynamically based on element characteristics.

### Types of Attribute Selectors:

1. **[attribute]**  
   Selects elements with a specified attribute.  
   Example:  
   ```css
   a[target] {
       text-decoration: none;
       color: black;
   }
   ```

2. **[attribute=value]**  
   Selects elements with a specific attribute value.  
   Example:  
   ```css
   a[target="_self"] {
       color: aqua;
   }
   ```

3. **[attribute~=value]**  
   Selects elements where the attribute value contains a specific word.  
   Example:  
   ```css
   a[title~="Origin"] {
       color: blueviolet;
   }
   ```

4. **[attribute|=value]**  
   Selects elements where the attribute value starts with a specified value.  
   Example:  
   ```css
   div[class|="child"] {
       background-color: aqua;
   }
   ```

5. **[attribute^=value]**  
   Selects elements where the attribute value begins with a specific substring.  
   Example:  
   ```css
   div[class^="child"] {
       background-color: rgb(0, 17, 255);
   }
   ```

6. **[attribute$=value]**  
   Selects elements where the attribute value ends with a specific substring.  
   Example:  
   ```css
   div[class$="child"] {
       background-color: rgb(255, 72, 0);
   }
   ```

7. **[attribute*=value]**  
   Selects elements where the attribute value contains a specific substring.  
   Example:  
   ```css
   div[class*="t"] {
       background-color: rgb(17, 204, 73);
   }
   ```

---

## 2. CSS Forms

Forms are used to collect input from users. Styling forms improves user experience and accessibility.

### Commonly Styled Form Elements:
1. **Text Inputs**:  
   Styled using `input[type="text"]` or similar attribute selectors.

2. **Textarea**:  
   Styled for multiline user input.

3. **Dropdowns**:  
   Styled using the `select` element.

4. **Submit Buttons**:  
   Styled using `input[type="submit"]`.

---

### Example Code for Forms:

#### HTML:
```html
<h1>CSS Forms</h1>
<div>
    <form action="">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name...">

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name...">

        <label for="country">District</label>
        <select name="country" id="country">
            <option value="chittagong">Chittagong</option>
            <option value="dhaka">Dhaka</option>
            <option value="cumilla">Cumilla</option>
        </select>

        <label for="about">Tell about yourself</label>
        <textarea name="about" id="about">Tell about yourself...</textarea>

        <input type="submit" value="Submit">
    </form>
</div>
```

#### CSS:
```css
/* General Styling */
div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

/* Input Fields and Select Dropdown */
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: none;
    border-bottom: 2px solid #25e60b;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=text]:focus {
    background-color: #c4f8f8;
    border: 1px solid #56f356;
}

/* Submit Button */
input[type=submit] {
    width: 100%;
    background-color: #296b20;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #25e60b;
}

/* Textarea */
textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    resize: none;
}
```

---

## Complete Example

### HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Forms and Attribute Selectors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- CSS Attribute Selectors -->
    <h1>CSS Attribute Selectors</h1>
    <div id="test">
        <a href="#" target="_blank">Open in New Tab</a>
        <a href="#" target="_self">Open in Same Tab</a>
        <a href="#" title="BlackOrigin">Title Contains 'BlackOrigin'</a>
        <div class="child-test">Child-Test</div>
        <div class="child_test">Child_Test</div>
    </div>

    <!-- CSS Forms -->
    <h1>CSS Forms</h1>
    <div>
        <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name...">

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name...">

            <label for="country">Country</label>
            <select name="country" id="country">
                <option value="chittagong">Chittagong</option>
                <option value="dhaka">Dhaka</option>
                <option value="cumilla">Cumilla</option>
            </select>

            <label for="about">Tell us about yourself</label>
            <textarea name="about" id="about">Tell about yourself...</textarea>

            <input type="submit" value="Submit">
        </form>
    </div>
</body>
</html>
```

---

## Practice:

1. **Experiment with Attribute Selectors**:  
   - Style `input` fields differently based on their `type` (e.g., `text`, `email`, `password`).

2. **Add Validation Styles**:  
   - Use pseudo-classes like `:valid` and `:invalid` to provide visual feedback.

3. **Enhance Forms**:  
   - Add radio buttons, checkboxes, and a file upload input, then style them.

---

**Instructor**: Muaz Muhammad  
**Course**: Full Stack Web Development  
**Date**: 12 December 2024