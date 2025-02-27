
# **Bootstrap Class 02: Grid, Flexbox, Typography & Colors**  

## **Topics Covered:**  
1. **Bootstrap 5 Grid Basics**  
2. **Bootstrap 5 Flexbox**  
3. **Bootstrap 5 Typography**  
4. **Bootstrap 5 Colors**  

---

## **1. Bootstrap 5 Grid Basics**  
Bootstrap’s **grid system** is based on **12 columns** and helps create responsive layouts easily.  

### **Basic Grid Structure:**  
- **`.container`** – Wraps the grid structure.  
- **`.row`** – Defines a horizontal row.  
- **`.col`** – Creates a column that automatically adjusts size.  
- **`.col-*`** – Specifies column width (e.g., `.col-4` means 4 out of 12 columns).  
- **Responsive column classes**:
  - `.col-sm-*` (≥576px)
  - `.col-md-*` (≥768px)
  - `.col-lg-*` (≥992px)
  - `.col-xl-*` (≥1200px)

### **Example Code:**
```html
<div class="container">
    <div class="row">
        <div class="col-sm border">Column 1</div>
        <div class="col border">Column 2</div>
        <div class="col border">Column 3</div>
        <div class="col border">Column 4</div>
        <div class="col border">Column 5</div>
        <div class="col border">Column 6</div>
        <div class="col border">Column 7</div>
        <div class="col border">Column 8</div>
        <div class="col border">Column 9</div>
        <div class="col border">Column 10</div>
        <div class="col border">Column 11</div>
        <div class="col border">Column 12</div>
    </div>
</div>
```

---

## **2. Bootstrap 5 Flexbox**  
Bootstrap provides **Flexbox utilities** to align and distribute content.  

### **Key Flexbox Classes:**  
- **`.d-flex`** – Enables Flexbox.  
- **`.flex-row` / `.flex-column`** – Defines the direction.  
- **`.justify-content-*`** – Controls horizontal alignment.  
  - `start`, `center`, `end`, `between`, `around`, `evenly`.  
- **`.align-items-*`** – Controls vertical alignment.  
  - `start`, `center`, `end`, `baseline`, `stretch`.  

### **Example Code:**
```html
<div class="d-flex flex-column justify-content-end align-items-center">
    <div class="p-2 border">Item 1</div>
    <div class="p-2 border">Item 2</div>
    <div class="p-2 border">Item 3</div>
    <div class="p-2 border">Item 4</div>
</div>
```

---

## **3. Bootstrap 5 Typography**  
Bootstrap includes **predefined typography classes** for headings, paragraphs, and text styling.

### **Typography Classes:**  
- **Headings:**  
  - `.h1` → `.h6` (Standard heading sizes)  
  - `.display-1` → `.display-6` (Larger, styled headings)  
- **Text Alignment:**  
  - `.text-start` (Left aligned)  
  - `.text-center` (Center aligned)  
  - `.text-end` (Right aligned)  
- **Text Styling:**  
  - `.fw-bold` (Bold)  
  - `.fst-italic` (Italic)  
  - `.text-muted` (Light gray text)  
  - `.lead` (Larger paragraph text)  

### **Example Code:**
```html
<h1 class="display-1">Bootstrap Typography</h1>
<p class="h3 text-end">This is a heading</p>
<p class="display-2 text-center">This is a large heading</p>
<p class="lead fst-italic">This is an emphasized paragraph with lead styling.</p>
<p class="text-muted fw-bold">This is a bold and muted text.</p>
```

---

## **4. Bootstrap 5 Colors**  
Bootstrap provides **color utilities** for backgrounds and text.  

### **Background & Text Color Classes:**  
- **Text Colors:**  
  - `.text-primary` (Blue)  
  - `.text-secondary` (Gray)  
  - `.text-success` (Green)  
  - `.text-danger` (Red)  
  - `.text-warning` (Yellow)  
  - `.text-info` (Cyan)  
  - `.text-light` (White)  
  - `.text-dark` (Black)  

- **Background Colors:**  
  - `.bg-primary` (Blue)  
  - `.bg-secondary` (Gray)  
  - `.bg-success` (Green)  
  - `.bg-danger` (Red)  
  - `.bg-warning` (Yellow)  
  - `.bg-info` (Cyan)  
  - `.bg-light` (White)  
  - `.bg-dark` (Black)  

### **Example Code:**
```html
<h1 class="text-primary text-center bg-info">Primary Text with Info Background</h1>
<p class="h2 bg-warning text-info text-center">Warning Background with Info Text</p>
<p class="h2 bg-danger text-success text-center">Danger Background with Success Text</p>
<p class="h2 bg-success text-danger text-center">Success Background with Danger Text</p>
<p class="h2 bg-secondary text-dark text-center">Secondary Background with Dark Text</p>
<p class="h2 bg-dark text-white text-center">Dark Background with White Text</p>
```

---

## **Full Example Code**  

### **HTML:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Class 02</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>

    <h1 class="text-center my-4">Bootstrap Grid, Flexbox, Typography & Colors</h1>

    <!-- Grid -->
    <h1>Grid System</h1>
    <div class="container">
        <div class="row">
            <div class="col border">Col 1</div>
            <div class="col border">Col 2</div>
            <div class="col border">Col 3</div>
        </div>
    </div>

    <!-- Flexbox -->
    <h1>Flexbox</h1>
    <div class="d-flex flex-column justify-content-end align-items-center">
        <div class="p-2 border">Item 1</div>
        <div class="p-2 border">Item 2</div>
        <div class="p-2 border">Item 3</div>
    </div>

    <!-- Typography -->
    <h1 class="display-1">Typography</h1>
    <p class="lead fst-italic">This is a lead paragraph with italic styling.</p>
    <p class="text-muted fw-bold">Muted and bold text example.</p>

    <!-- Colors -->
    <h1 class="text-primary text-center bg-info">Primary Text with Info Background</h1>
    <p class="h2 bg-warning text-info text-center">Warning Background with Info Text</p>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

---

## **Practice Section**  
### **Task 1: Bootstrap Grid**
- Create a **3-column layout** using Bootstrap’s grid system.  
- Try different column sizes like **`.col-4`**, **`.col-6`**, etc.  

### **Task 2: Bootstrap Flexbox**
- Create a **horizontal flex container** with `.d-flex` and justify content center.  

### **Task 3: Typography & Colors**
- Use **`.display-3`** for a heading and apply a **`.bg-dark text-white`** style.  

---

### **Instructor: Muaz Muhammad**  
### **Course: Full Stack Web Development**  
### **Date: 2025-02-27**  

