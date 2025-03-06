

# **Bootstrap Class 03: Tables, Images, Jumbotron & Alerts**  

## **Topics Covered:**  
1. **Bootstrap 5 Tables**  
2. **Bootstrap 5 Images**  
3. **Bootstrap 5 Jumbotron**  
4. **Bootstrap 5 Alerts**  

---

## **1. Bootstrap 5 Tables**  
Bootstrap tables provide a clean and structured way to display data.  

### **Key Features:**  
- `.table` → Adds default table styling  
- `.table-striped` → Adds alternate row colors  
- `.table-hover` → Adds hover effect  
- `.table-bordered` → Adds borders around cells  
- `.table-dark` → Dark mode table  
- `.table-sm` → Compact table  

### **Example Code:**  
```html
<table class="table table-dark table-striped table-hover table-bordered text-center">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Muaz</td>
            <td>26</td>
            <td>Rawjan</td>
        </tr>
        <tr>
            <td>Ehasan</td>
            <td>24</td>
            <td>Patiya</td>
        </tr>
        <tr>
            <td>Arijit</td>
            <td>25</td>
            <td>Hathazari</td>
        </tr>
    </tbody>
</table>
```

---

## **2. Bootstrap 5 Images**  
Bootstrap provides classes for responsive and styled images.  

### **Key Classes:**  
- `.img-fluid` → Makes image responsive  
- `.rounded-circle` → Creates a circular image  
- `.img-thumbnail` → Adds a border and padding  

### **Example Code:**  
```html
<img src="lion-king.jpeg" alt="Lion King" class="img-fluid rounded-circle">
<img src="lion-king.jpeg" alt="Lion King" class="img-thumbnail rounded-circle">
```

### **CSS for Custom Styling:**  
```css
.custom-img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
}
```

---

## **3. Bootstrap 5 Jumbotron**  
A Jumbotron is a large, attention-grabbing section used to highlight content.  

### **Example Code:**  
```html
<div class="container">
    <div class="bg-primary p-3 text-white mt-2 rounded">
        <h1>Welcome to my page</h1>
    </div>
    <p>Lorem ipsum dolor sit amet.</p>
</div>
```

---

## **4. Bootstrap 5 Alerts**  
Bootstrap provides pre-styled alert messages to highlight important information.  

### **Key Classes:**  
- `.alert-primary`, `.alert-success`, `.alert-danger`, `.alert-warning` → Different alert styles  
- `.alert-dismissible` → Allows alert to be closed  
- `.fade.show` → Adds fade-in effect  
- `.btn-close` → Adds close button  

### **Example Code:**  
```html
<div class="alert alert-primary">
    This is a primary alert!
</div>
<div class="alert alert-success">
    This is a success alert!
</div>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Stop!</strong> Don't press.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
<div class="custom-alert">This is a custom alert.</div>
```

### **CSS for Custom Alert:**  
```css
.custom-alert {
    background-color: #e92f2f;
    color: rgb(53, 1, 1);
    padding: 15px;
    border-radius: 5px;
}
```

---

## **Practice Section**  
### **Task 1: Create a Bootstrap Table**  
- Create a table with 4 columns: Name, Age, City, and Occupation.  
- Use `.table-dark`, `.table-striped`, and `.table-bordered`.  

### **Task 2: Add Responsive Images**  
- Add an image and make it circular using `.rounded-circle`.  
- Add another image with `.img-thumbnail`.  

### **Task 3: Create a Jumbotron Section**  
- Create a `.container` with a `.bg-primary` heading and a paragraph below.  

### **Task 4: Use Bootstrap Alerts**  
- Create four alerts using `.alert-success`, `.alert-danger`, `.alert-info`, and `.alert-warning`.  
- Make one alert dismissible.  

---

### **Instructor:** Muaz Muhammad  
### **Course:** Full Stack Web Development  
### **Date: 07-03-2025**   

---

