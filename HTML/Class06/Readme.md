# Full Stack Web Development - Class 06: HTML Forms, Form Attributes, Form Elements, Input Types

## Topics Covered:
- HTML Forms
- HTML Form Attributes
- HTML Form Elements
- HTML Input Types

---

## 1. HTML Forms
HTML forms are used to collect user input. The form element itself wraps various input elements and can send data to a server when submitted.

### Example:
```html
<form action="submit_form.php" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>
```

---

## 2. HTML Form Attributes
Forms can have various attributes that define their behavior:
- `action`: Specifies where to send the form data.
- `method`: Specifies the HTTP method (GET or POST).
- `autocomplete`: Enables or disables autocomplete (values: `on`, `off`).
- `novalidate`: Prevents form validation when submitting.

### Example:
```html
<form action="" method="POST" autocomplete="on" novalidate>
    <!-- Form fields go here -->
</form>
```

---

## 3. HTML Form Elements
Form elements allow users to input various types of data. Common elements include:
- `<input>`: Text fields, checkboxes, radio buttons, file uploads, etc.
- `<textarea>`: Multi-line text fields.
- `<select>`: Drop-down menus.
- `<datalist>`: Provides an autocomplete feature for input fields.
- `<button>`: Adds buttons like submit, reset, etc.

### Example:
```html
<label for="fname">Full Name:</label>
<input type="text" id="fname" name="fname">

<label for="Email">Email:</label>
<input type="email" id="Email" name="email">

<label for="Password">Password:</label>
<input type="password" id="Password" name="password">
```

---

## 4. HTML Input Types
HTML supports various input types, allowing for different user inputs such as text, email, file uploads, and date pickers.

### Example of Input Types:
```html
<input type="text" placeholder="Enter text">
<input type="email" placeholder="Enter email">
<input type="password" placeholder="Enter password">
<input type="file">
<input type="color">
<input type="date">
<input type="range">
<input type="number">
<input type="radio" name="gender" value="Male"> Male
<input type="radio" name="gender" value="Female"> Female
<input type="checkbox" name="language" value="JavaScript"> JavaScript
```

---

## Example Code from Class 06:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class06</title>
</head>
<body>
    <form action="" method="POST" autocomplete="on" novalidate>
        <!-- Basic Info Section -->
        <fieldset>
            <legend align="center">Basic Info</legend>
            <label for="fname">Full Name:</label>
            <input type="text" name="fname" id="fname"> <br><br>

            <label for="Email">Email:</label>
            <input type="email" name="email" id="Email"><br><br>

            <label for="Password">Password:</label>
            <input type="password" name="password" id="Password"><br><br>

            <!-- Browsers Datalist -->
            <input list="Browsers" name="Browsers">
            <datalist id="Browsers">
                <option value="Firefox">
                <option value="Chrome">
                <option value="Edge">
                <option value="Safari">
                <option value="Opera">
                <option value="IE">
            </datalist>
        </fieldset><br>

        <!-- Gender Selection -->
        <label for="">Select Your Gender:</label><br><br>
        <input type="radio" name="gender"><label for="">Male</label>
        <input type="radio" name="gender"><label for="">Female</label>
        <input type="radio" name="gender"><label for="">Other</label><br><br>

        <!-- Language Selection -->
        <label for="">Select Your Favourite Language</label><br><br>
        <label>
            <input type="checkbox"> C
        </label><br><br>
        <label>
            <input type="checkbox"> C++
        </label><br><br>
        <label>
            <input type="checkbox"> PHP
        </label><br><br>

        <!-- Submit Button -->
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

---

## Practice:
- Create a form with different input types, such as text, email, password, and a file upload.
- Add form attributes like `autocomplete`, `novalidate`, and `required` to ensure user input is properly validated.
- Use radio buttons, checkboxes, and dropdowns to allow users to select from multiple options.

**Instructor**: Abdullah Al Sobail  
**Course**: Full Stack Web Development  
**Date**: 19th October, 2024
