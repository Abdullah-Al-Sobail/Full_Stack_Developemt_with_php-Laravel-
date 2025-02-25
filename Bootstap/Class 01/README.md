# **Bootstrap Class 01: Introduction to Bootstrap**  

## **Topics Covered:**  
1. **Bootstrap Introduction**  
2. **Bootstrap Setup**  
3. **Bootstrap Containers**  

---

## **1. Bootstrap Introduction**  
Bootstrap is a popular **CSS framework** used for building responsive and modern websites quickly.  

### **Key Features of Bootstrap:**  
- **Prebuilt Components**: Buttons, Forms, Cards, Modals, etc.  
- **Grid System**: A 12-column flexible grid layout.  
- **Responsive Design**: Works on all screen sizes.  
- **Utility Classes**: Predefined CSS classes for styling.  
- **Customizable**: Can be modified using CSS variables and SCSS.  

---

## **2. Bootstrap Setup**  
To use Bootstrap, you need to include the Bootstrap **CSS and JavaScript** files in your HTML document.  

### **CDN (Recommended Method)**  
This method loads Bootstrap directly from a content delivery network (CDN).  

#### **Include Bootstrap CSS in the `<head>` section:**  
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

#### **Include Bootstrap JavaScript before the closing `<body>` tag:**  
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

### **Alternative: Download and Use Bootstrap Locally**  
1. Download Bootstrap from [getbootstrap.com](https://getbootstrap.com/).  
2. Extract the files and include them in your project.  
3. Link to the **CSS** and **JS** files locally:  
```html
<link rel="stylesheet" href="css/bootstrap.min.css">
<script src="js/bootstrap.bundle.min.js"></script>
```

---

## **3. Bootstrap Containers**  
Bootstrap provides **container classes** to control content width based on screen size.  

### **Types of Containers:**  
1. **`.container`** – A responsive, fixed-width container.  
2. **`.container-fluid`** – A full-width container that spans the entire viewport.  
3. **Responsive Containers** (adjust width at different breakpoints):  
   - `.container-sm` (Small screens, `≥576px`)  
   - `.container-md` (Medium screens, `≥768px`)  
   - `.container-lg` (Large screens, `≥992px`)  
   - `.container-xl` (Extra large screens, `≥1200px`)  
   - `.container-xxl` (Extra extra large screens, `≥1400px`)  

### **Example Code:**
```html
<div class="container bg-primary text-white p-3">
    <h1>My first Bootstrap container</h1>
    <p>This container has a fixed width and adjusts responsively.</p>
</div>

<div class="container-sm border mt-3">container-sm (Small devices and larger)</div>
<div class="container-md border mt-3">container-md (Medium devices and larger)</div>
<div class="container-lg border mt-3">container-lg (Large devices and larger)</div>
<div class="container-xl border mt-3">container-xl (Extra-large devices and larger)</div>
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
    <title>Bootstrap Introduction</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>

    <h1 class="text-center my-4">Hello, Bootstrap!</h1>

    <div class="container pt-3 bg-primary text-white">
        <h1>My First Bootstrap Example</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ratione culpa officiis eius earum.</p>
    </div>

    <div class="container-sm border mt-3">container-sm</div>
    <div class="container-md border mt-3">container-md</div>
    <div class="container-lg border mt-3">container-lg</div>
    <div class="container-xl border mt-3">container-xl</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

  </body>
</html>
```

---

## **Practice Section**  
### **Task 1: Bootstrap Setup**
- Create a new HTML file and link Bootstrap using **CDN**.  
- Add a `<h1>` heading and style it using Bootstrap classes (`text-primary`, `text-center`, etc.).  

### **Task 2: Bootstrap Containers**
- Create a **`.container-fluid`** and place some text inside it.  
- Experiment with different **container sizes** and observe their behavior.  

---

### **Instructor: Muaz Muhammad**  
### **Course: Full Stack Web Development**  
### **Date: 2025-02-25**  

