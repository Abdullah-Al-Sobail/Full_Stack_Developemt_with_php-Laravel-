# **Bootstrap Class 05: Dropdowns, Collapse, Navbars, & Offcanvas**  

## **Topics Covered**  
1. **Bootstrap Dropdowns**  
2. **Bootstrap Collapse**  
3. **Bootstrap Navbars**  
4. **Bootstrap Offcanvas**  

---

## **1. Bootstrap Dropdowns**  

Dropdowns are used to display a list of actions when a button is clicked. Bootstrap provides built-in classes for dropdowns, making them easy to implement.

### **Example: Basic Dropdown**  
```html
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown Button
    </button>
    <ul class="dropdown-menu">
        <li><a href="#" class="dropdown-item">Action-1</a></li>
        <li><a href="#" class="dropdown-item">Action-2</a></li>
        <li><a href="#" class="dropdown-item">Action-3</a></li>
    </ul>
</div>
```

### **Example: Right-Aligned Dropdown**  
```html
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Right Aligned Dropdown
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li><a href="#" class="dropdown-item">Action-1</a></li>
        <li><a href="#" class="dropdown-item">Action-2</a></li>
        <li><a href="#" class="dropdown-item">Action-3</a></li>
    </ul>
</div>
```

### **CSS-Only Dropdown (Without Bootstrap JavaScript)**  
```html
<div class="custom-dropdown">
    <span>Mouse over me</span>
    <div class="dropdown-content">
        <p>Hello World!</p>
    </div>
</div>
```
#### **CSS**
```css
.custom-dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
}

.custom-dropdown:hover .dropdown-content {
    display: block;
}
```

---

## **2. Bootstrap Collapse**  

The collapse component is used to hide or show content dynamically.

### **Example: Basic Collapse Using Bootstrap**  
```html
<button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#show">
    Show
</button>
<div class="collapse" id="show">
    <div class="card card-body bg-danger">
        This is our hidden content
    </div>
</div>
```

### **CSS-Only Collapse (Without Bootstrap JavaScript)**  
```html
<button onclick="document.getElementById('customCollapse').classList.toggle('show')">Toggle</button>
<div id="customCollapse" class="custom-collapse">
    <p>Hidden content appears here</p>
</div>
```
#### **CSS**
```css
.custom-collapse {
    height: 0;
    overflow: hidden;
    transition: height 0.5s ease-out;
}

.custom-collapse.show {
    height: auto;
}
```

---

## **3. Bootstrap Navbars**  

The navbar component in Bootstrap is used for navigation menus.

### **Example: Responsive Bootstrap Navbar**  
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Service</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
```

### **CSS-Only Navbar (Without Bootstrap JavaScript)**  
```html
<div class="custom-navbar">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Service</a>
    <a href="#">Contact</a>
</div>
```
#### **CSS**
```css
.custom-navbar {
    background-color: aqua;
    overflow: hidden;
}

.custom-navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
}

@media screen and (max-width: 600px) {
    .custom-navbar a {
        float: none;
        display: block;
        text-align: left;
    }
}
```

---

## **4. Bootstrap Offcanvas**  

The offcanvas component is a sidebar that slides in from the left or right.

### **Example: Bootstrap Offcanvas Sidebar**  
```html
<button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#bsoffcanvas">
    Bootstrap Sidebar
</button>

<div class="offcanvas offcanvas-end" id="bsoffcanvas">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title">Sidebar Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
    </div>
</div>
```

### **CSS-Only Offcanvas (Without Bootstrap JavaScript)**  
```html
<button onclick="document.getElementById('customOffcanvas').classList.toggle('show')">
    Sidebar
</button>
<div class="custom-offcanvas" id="customOffcanvas">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Service</a>
    <a href="#">Contact</a>
</div>
```
#### **CSS**
```css
.custom-offcanvas {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    text-decoration: none;
    transition: left 0.3s ease-in-out;
}

.custom-offcanvas.show {
    left: 0;
}
```

---

## **Practice Section**  
### **1. Bootstrap Dropdowns**
- Create a dropdown with three different links.
- Implement a dropdown where items are aligned to the right.

### **2. Bootstrap Collapse**
- Create a collapsible section using Bootstrap.
- Implement a collapse section that uses CSS only.

### **3. Bootstrap Navbars**
- Design a responsive navbar with Bootstrap.
- Create a custom navbar using only CSS.

### **4. Bootstrap Offcanvas**
- Create a Bootstrap offcanvas menu that appears from the left.
- Implement a sidebar that opens and closes using only CSS.

---

### **Instructor:** Muaz Muhammad  
### **Course:** Full Stack Web Development  
### **Date:** 22-03-2025  

