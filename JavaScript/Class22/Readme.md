

# JavaScript Class 22: Portfolio Website Project

**Topic:** Building a Portfolio Website (Final Project)

🔗 **Live Demo:** [Demo Portfolio Website](https://muaz64.github.io/Demo-portfolio/)

---

##  Topics Covered

1. Setting up the **HTML Structure** (Navbar, Hero, About, Projects, Contact, Footer).
2. Applying **Custom CSS** + Bootstrap for styling.
3. Adding **JavaScript Interactivity**:

   * Theme Toggle (Light/Dark Mode)
   * Active Navigation Links (ScrollSpy)
   * Reveal Animations on Scroll
   * Project Filters (All, Web, UI, Tools)
   * Modal for Project Previews
   * Contact Form Validation + Mailto Fallback
   * Footer Year Auto-update

---

##  Detailed Explanation

### 1. **HTML Structure**

* The website is divided into **Navbar, Sections (Home, About, Projects, Contact), and Footer**.
* Used **Bootstrap components** (Navbar, Grid, Modal, Toast).
* Each section has a unique `id` to support navigation & JavaScript tracking.

---

### 2. **CSS (style.css)**

* Created **themes** with `--variables` for easy **light/dark mode switching**.
* Designed:

  * Glassmorphic Navbar
  * Gradient Hero Title
  * Project Cards with hover effects
  * Tags, Badges, Checklists
  * Reveal animations for scrolling

---

### 3. **JavaScript (script.js)**

#### ✅ Theme Toggle

* Uses `localStorage` to remember the chosen theme.
* Detects system preference on first load.

#### ✅ Active Nav Links (ScrollSpy)

* Highlights the **current section** link while scrolling using `IntersectionObserver`.

#### ✅ Reveal Animations

* Elements with `.reveal` class animate when visible.

#### ✅ Project Filters

* Filter chips toggle project visibility by category.

#### ✅ Contact Form

* Validates:

  * Name (min 2 chars)
  * Email (valid format)
  * Message (min 10 chars)
* Creates a **mailto link** for fallback.
* Shows a **Toast notification** after sending.

#### ✅ Modal (Project Preview)

* Displays project details dynamically when clicking Preview.

#### ✅ Footer Update

* Inserts the **current year** automatically with JavaScript.

---

## 💻 Example Code (Simplified Demo)

```html
<!-- Navbar -->
<nav class="navbar glass-nav sticky-top">
  <a class="navbar-brand" href="#">MyPortfolio</a>
  <button id="theme-toggle">🌙</button>
</nav>

<!-- Hero Section -->
<section id="home" class="hero">
  <h1 class="gradient">Hello, I’m Muaz!</h1>
  <p>Frontend Developer | UI/UX Designer</p>
  <a href="https://muaz64.github.io/Demo-portfolio/" target="_blank" class="btn btn-primary">🔗 View Live Demo</a>
</section>
```

```css
/* CSS Example */
:root {
  --brand: #0d6efd;
  --bg: #f8f9fa;
}
[data-theme="dark"] {
  --bg: #121212;
  --brand: #0dcaf0;
}
body {
  background: var(--bg);
}
.gradient {
  background: linear-gradient(90deg, var(--brand), purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

```js
// JS Example
const qs = sel => document.querySelector(sel);

// Theme Toggle
const btn = qs("#theme-toggle");
btn.addEventListener("click", () => {
  document.body.toggleAttribute("data-theme", "dark");
});

// Footer Year
qs("#year").textContent = new Date().getFullYear();
```

---

## 🏋️ Practice Section

### Task 1: Navbar & Sections

* Create a **sticky navbar** with links to Home, About, Projects, Contact.

### Task 2: Theme Toggle

* Implement light/dark mode toggle with `localStorage`.

### Task 3: Scroll Animations

* Apply `.reveal` animations when sections enter viewport.

### Task 4: Project Filters

* Add 3+ project cards and filter them by category.

### Task 5: Contact Form

* Validate inputs & show alert/toast on submission.

### Task 6: Footer

* Display **current year** dynamically.

---



### Instructor: Muaz Muhammad
### Course: Full Stack Web Development 
### Date: 30August 2025

