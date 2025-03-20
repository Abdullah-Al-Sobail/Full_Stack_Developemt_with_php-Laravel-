
# **Bootstrap Class 05: Navbars & Offcanvas**  

## **Topics Covered**  
1. **Bootstrap Navbars**  
2. **Bootstrap Offcanvas**  

---

## **1. Bootstrap Navbars**  

### **What is a Navbar?**  
A navbar is a responsive navigation header that is used for site navigation. Bootstrap provides a built-in `.navbar` class to style navigation bars.  

### **Basic Navbar using Bootstrap**  
The simplest way to create a navbar is using the `.navbar` and `.nav` classes.

#### **Example: Basic Bootstrap Navbar**  
```html
<ul class="nav">
    <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
    </li>
</ul>
```

---

### **Responsive Navbar with Expand Feature**  
A fully responsive navbar can be created using `.navbar-expand-lg`. It collapses into a hamburger menu on small screens.

#### **Example: Responsive Bootstrap Navbar**  
```html
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Brand Name</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <form class="d-flex me-auto">
                <input class="form-control me-2" type="search" placeholder="Search">
                <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul> 
        </div>
    </div>
</nav>
```

---

### **Styling Navbar with CSS**  
Custom CSS can be used to style a navbar.

#### **Example: Navbar using CSS**  
```css
.navbar {
    background-color: #333;
    overflow: hidden;
}
.navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
}
.navbar a:hover {
    background-color: #ddd;
    color: black;
}
@media screen and (max-width: 600px) {
    .navbar a {
        float: none;
        display: block;
        text-align: left;
    }
}
```

---

## **2. Bootstrap Offcanvas**  

### **What is Offcanvas?**  
Offcanvas is a hidden sidebar that slides in from the left, right, top, or bottom when triggered. It is used for navigation menus, sidebars, and more.

### **Basic Offcanvas Example**  
An offcanvas sidebar can be triggered using a button.

#### **Example: Left Sidebar Offcanvas**  
```html
<button class="btn btn-danger" data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas">
    Open Sidebar
</button>

<div class="offcanvas offcanvas-start" id="myOffcanvas">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title">Sidebar Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <h1>My Offcanvas</h1>
        <p>Some text inside the sidebar.</p>
    </div>
</div>
```

---

### **Right Sidebar Offcanvas**  
The `.offcanvas-end` class makes the sidebar appear from the right.

#### **Example: Right Sidebar Offcanvas**  
```html
<button class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
    Open Right Sidebar
</button>

<div class="offcanvas offcanvas-end" id="offcanvasRight">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title">Right Sidebar</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
        <p>Content for right sidebar.</p>
    </div>
</div>
```

---

## **Practice Section**  

### **1. Bootstrap Navbar**  
- Create a navbar with four menu items and a search bar.  
- Make the navbar collapse on small screens.  

### **2. Bootstrap Offcanvas**  
- Create a sidebar that opens from the left with a button.  
- Design an offcanvas that opens from the right with a title and some text.  

---

### **Instructor:** Muaz Muhammad  
### **Course:** Full Stack Web Development  
### **Date:** 20-03-2025  

---

