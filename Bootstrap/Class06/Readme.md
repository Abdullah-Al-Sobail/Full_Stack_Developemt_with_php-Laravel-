

# **Bootstrap Class 06 - Modals, Tooltips, Toasts & Forms**  

## **Topics Covered**  
1. **BS5 Modals** – Pop-up windows for user interactions.  
2. **BS5 Tooltips** – Small pop-up boxes providing information.  
3. **BS5 Toasts** – Lightweight notifications.  
4. **BS5 Forms & Validation** – Input fields, dropdowns, and form validation.  

---

## **Bootstrap 5 Modals**  
Bootstrap modals are pop-ups/dialogs that appear on top of the page when triggered. They are useful for user interactions such as confirmations, login forms, and alerts.  

### **Example: Bootstrap Modal**  
```html
<!-- Button to trigger modal -->
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ourmodal">
    Open Modal
</button>

<!-- Modal Structure -->
<div class="modal fade" id="ourmodal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Welcome!!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                This is our modal content.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Save</button>
            </div>
        </div>
    </div>
</div>
```  

---

## **Bootstrap 5 Tooltips**  
Tooltips are small popup messages that appear when a user hovers over an element.  

### **Example: Tooltip**  
```html
<!-- Tooltip Button -->
<button type="button" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
    Hover Me
</button>

<!-- JavaScript for Tooltips -->
<script>
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
</script>
```  

---

## **Bootstrap 5 Forms & Validation**  
Forms are essential for user input. Bootstrap provides built-in validation and styling.  

### **Example: Bootstrap Form with Validation**  
```html
<form class="mt-3 p-5">
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name" required>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3" required></textarea>
    </div>
    <select class="form-select mb-2">
        <option selected>Select your gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
    </select>
    <div class="form-check">
        <input type="radio" class="form-check-input" id="check1">
        <label for="check1" class="form-check-label">Agree</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```  

---

## **Practice Section**  

1. **Modals:** Create a modal with a login form inside it.  
2. **Tooltips:** Add tooltips to navigation menu items.  
3. **Toasts:** Display a toast message when a form is submitted.  
4. **Forms & Validation:** Implement a form with validation where the submit button is disabled until all fields are filled.  

---

### **Instructor:** Muaz Muhammad  
### **Course:** Full Stack Web Development  
### **Date:** 28-03-2025  
