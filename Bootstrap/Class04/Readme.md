

# **Bootstrap Class 04: Buttons, Badges, Progress Bars, Spinners, Pagination, List Groups & Cards**  

## **Topics Covered**  
1. **Bootstrap Buttons & Button Groups**  
2. **Bootstrap Badges & Progress Bars**  
3. **Bootstrap Spinners & Pagination**  
4. **Bootstrap List Groups & Cards**  

---

## **1. Bootstrap Buttons & Button Groups**  

### **Bootstrap Buttons**  
Bootstrap provides various styles for buttons using the `.btn` class and contextual classes like `.btn-primary`, `.btn-success`, `.btn-danger`, etc.  

#### **Examples:**  
```html
<!-- Basic Bootstrap Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-outline-danger">Outline Danger</button>
<button class="btn btn-outline-warning">Outline Warning</button>

<!-- Button Sizes -->
<button class="btn btn-secondary btn-lg">Large Button</button>
<button class="btn btn-success btn-sm">Small Button</button>

<!-- Full-Width Button -->
<button class="btn btn-warning w-100">Full Width</button>

<!-- Disabled Button -->
<button class="btn btn-secondary btn-lg" disabled>Disabled Button</button>
```

### **Bootstrap Button Groups**  
Button groups allow multiple buttons to be grouped together.  

#### **Examples:**  
```html
<!-- Horizontal Button Group -->
<div class="btn-group p-2">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
</div>

<!-- Vertical Button Group -->
<div class="btn-group-vertical">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
</div>
```

---

## **2. Bootstrap Badges & Progress Bars**  

### **Bootstrap Badges**  
Badges are used to display notifications, counts, or labels.  

#### **Examples:**  
```html
<h1>Notifications <span class="badge bg-primary">5</span></h1>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-info">Info</span>

<!-- Badges inside Buttons -->
<button class="btn btn-primary">Messages <span class="badge bg-light text-dark">5</span></button>

<!-- Rounded Pill Badges -->
<span class="badge rounded-pill bg-success">Success</span>
```

### **Bootstrap Progress Bars**  
Progress bars are used to indicate progress or loading states.  

#### **Examples:**  
```html
<!-- Basic Progress Bar -->
<div class="progress">
    <div class="progress-bar" style="width: 50%;">50%</div>
</div>

<!-- Different Colored Progress Bars -->
<div class="progress">
    <div class="progress-bar bg-danger" style="width: 70%;">70%</div>
</div>

<!-- Striped Progress Bar -->
<div class="progress">
    <div class="progress-bar progress-bar-striped bg-info" style="width: 60%;">60%</div>
</div>

<!-- Animated Striped Progress Bar -->
<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style="width: 80%;">80%</div>
</div>
```

---

## **3. Bootstrap Spinners & Pagination**  

### **Bootstrap Spinners**  
Spinners indicate a loading or processing state.  

#### **Examples:**  
```html
<!-- Basic Spinners -->
<div class="spinner-border text-info"></div>
<div class="spinner-border text-success"></div>
<div class="spinner-grow text-danger"></div>
<div class="spinner-grow text-warning"></div>

<!-- Spinner Inside Button -->
<button class="btn btn-primary" disabled>
    Loading... <span class="spinner-border spinner-border-sm"></span>
</button>

<!-- Custom Size Spinner -->
<div class="spinner-border text-info" style="width: 50px; height: 50px;"></div>
```

### **Bootstrap Pagination**  
Pagination is used to navigate through pages.  

#### **Examples:**  
```html
<!-- Custom Pagination -->
<ul class="custom-page">
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
</ul>

<!-- Bootstrap Pagination -->
<ul class="pagination p-5">
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
</ul>
```

---

## **4. Bootstrap List Groups & Cards**  

### **Bootstrap List Groups**  
List groups are used to display lists of items with different styles.  

#### **Examples:**  
```html
<!-- Basic List Group -->
<ul class="list-group">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item">Item 3</li>
    <li class="list-group-item active">Active Item</li>
    <li class="list-group-item disabled">Disabled Item</li>
    <li class="list-group-item">Items <span class="badge bg-danger">5</span></li>
</ul>

<!-- Clickable List Group -->
<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">Clickable Item</a>
    <button class="list-group-item list-group-item-action">Button Item</button>
</div>
```

### **Bootstrap Cards**  
Cards are flexible containers used for displaying content.  

#### **Examples:**  
```html
<!-- Custom CSS Card -->
<div class="custom-card">
    <h5>CSS Card</h5>
    <p>Simple card using CSS</p>
</div>

<!-- Bootstrap Card with Image -->
<div class="card m-3" style="width: 250px;">
    <img src="./man.png" class="card-img-top" alt="Sample Image">
    <div class="card-body">
        <h5 class="card-title">Bootstrap Card</h5>
        <p class="card-text">Card style using Bootstrap</p>
    </div>
</div>

<!-- Bootstrap Card with Header & Footer -->
<div class="card m-3 " style="width: 250px;">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Bootstrap Card</h5>
        <p class="card-text">Card style using Bootstrap</p>
        <a href="#" class="btn bg-info">More</a>
    </div>
    <div class="card-footer">Footer</div>
</div>
```

---

## **Practice Section**  
### **1. Buttons & Button Groups**
- Create a button group with four buttons of different colors.
- Add a disabled button inside a button group.

### **2. Badges & Progress Bars**
- Create a notification badge inside a button.
- Design a progress bar with 80% width and animation.

### **3. Spinners & Pagination**
- Create a spinner inside a button that shows "Loading..."
- Design a pagination section with five pages.

### **4. List Groups & Cards**
- Create a list group with five items, one being active and another disabled.
- Design a card with an image, title, text, and a button.

---

### **Instructor:** Muaz Muhammad  
### **Course:** Full Stack Web Development  
### **Date:** 13-03-2025  

---

