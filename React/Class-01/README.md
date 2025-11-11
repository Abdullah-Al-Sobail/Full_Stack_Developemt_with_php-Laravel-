# React Class 01 — React setup & React Introduction

## Topics Covered

1. React introduction — what & why
2. Core React concepts (Components, JSX, Props, State, Virtual DOM, Unidirectional Data Flow)
3. React project setup (recommended: **Vite**) — step-by-step
4. Quick learning setup (CDN) for tiny examples
5. Adding **Bootstrap** & **FontAwesome** to a React app (example)
6. Starter code + folder structure


---

# 1) What is React? (short & clear)

React is a **JavaScript library** for building user interfaces (mainly single-page UIs).

* It focuses on building reusable **components** and updating the UI efficiently via the **Virtual DOM**.
* React is *declarative* — you describe what the UI should look like for a given state and React updates the real DOM for you.

**Why React?**

* Component reusability → smaller, testable pieces
* Fast updates via Virtual DOM diffing
* Huge ecosystem (routing, state managers, UI libraries)
* Works well with modern build tools (Vite, Webpack)

---

# 2) Core Concepts (high level)

### Components

* Building blocks of a React app.
* Two common types:

  * **Functional components** (modern, prefer Hooks)
  * **Class components** (legacy, still works but less used)

### JSX

* A syntax that looks like HTML inside JavaScript: `const el = <div>Hello</div>`
* Under the hood JSX compiles to `React.createElement(...)`.

### Props

* Read-only inputs to a component. Like function arguments.

```jsx
<MyButton label="Click me" />
```

### State

* Local data inside components that can change over time and re-render the component:

```jsx
const [count, setCount] = useState(0);
```

### Hooks (quick note)

* `useState`, `useEffect`, `useRef`, etc. Hooks are the modern way to add state and lifecycle logic in functional components.

### Virtual DOM & Reconciliation

* React keeps an in-memory representation of the DOM and only applies the minimal changes to the real DOM for performance.

### Unidirectional Data Flow

* Parent → child via props. State is owned by components and passed down. This simplifies reasoning about UI updates.

---

# 3) Recommended setup (Vite) — step-by-step (fast, modern dev experience)

> **Why Vite?** fast dev server + lightning hot module replacement (HMR). Great for React.

### Steps

1. **Create project (interactive)**

   ```bash
   npm create vite@latest my-react-app -- --template react
   ```

   or (yarn)

   ```bash
   yarn create vite my-react-app --template react
   ```

2. **Install dependencies**

   ```bash
   cd my-react-app
   npm install
   ```

3. **Run dev server**

   ```bash
   npm run dev
   ```

   Open the printed local URL (e.g. `http://localhost:5173`).

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production locally**

   ```bash
   npm run preview
   ```

### Minimal package.json scripts (Vite)

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

# 4) Quick Learning Setup (CDN) — for tiny examples (no build tool)

If you just want to try React quickly in a single HTML file (good for learning JSX via Babel):

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>React Quick Demo</title>
    <!-- Bootstrap + FontAwesome (CDN) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <!-- Babel for in-browser JSX transpile (learning only) -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function App() {
        return (
          <div className="container mt-5">
            <h1><i className="fas fa-rocket"></i> React Quick Demo</h1>
            <button className="btn btn-primary">Bootstrap Button</button>
          </div>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

> **Note:** CDN + Babel is for learning only. For real apps use a build tool (Vite).

---

# 5) Starter project structure (Vite + React)

```
my-react-app/
├─ index.html
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ App.css
└─ public/   (static assets)
```

### Example files

**index.html**

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My React App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**src/main.jsx**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

createRoot(document.getElementById('root')).render(<App />);
```

**src/App.jsx**

```jsx
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container py-5">
      <h1><i className="fa-solid fa-code"></i> React + Vite Starter</h1>
      <p>Count: {count}</p>
      <button className="btn btn-primary me-2" onClick={() => setCount(c => c + 1)}>
        <i className="fa-solid fa-plus"></i> Increment
      </button>
      <button className="btn btn-outline-secondary" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
```

**src/App.css**

```css
body { font-family: system-ui, sans-serif; }
.container h1 i { margin-right: 8px; color: #7b61ff; }
```

> The example shows **Bootstrap** classes and **FontAwesome** icons via CDN links in `index.html`. In React, remember to use `className` (not `class`) for classes.

---

# 6) Using Bootstrap & FontAwesome in React

* **Bootstrap**: include CSS link in `index.html`, use Bootstrap classes in JSX: `<button className="btn btn-primary">`.
* **FontAwesome**: easiest quick way —— CDN link in `index.html` and use `<i className="fas fa-heart"></i>`.
  (For production you may prefer `@fortawesome/react-fontawesome` package for tree-shaking and React-friendly API.)

---

# 7) Step-by-step checklist to complete your first React app

1. Create project: `npm create vite@latest my-react-app -- --template react`
2. `cd my-react-app` → `npm install`
3. Add Bootstrap & FontAwesome links to `index.html` (optional)
4. Open `src/App.jsx` and edit the component; use `useState` to add some interactivity
5. `npm run dev` → open browser to dev URL
6. When ready: `npm run build`, deploy `dist/` to GitHub Pages / Netlify / Vercel / GitHub Pages demo link (your live link is a perfect example: **[https://muaz64.github.io/Demo-portfolio/](https://muaz64.github.io/Demo-portfolio/)**)

---

# 8) Example: Add a simple counter component (step-by-step)

1. In `src/App.jsx` paste:

```jsx
import { useState } from 'react';
export default function Counter(){
  const [n, setN] = useState(0);
  return (
    <div>
      <h2>Counter: {n}</h2>
      <button onClick={() => setN(n+1)}>+1</button>
      <button onClick={() => setN(n-1)}>-1</button>
    </div>
  );
}
```

2. Import it in `src/main.jsx` or `App.jsx` and render: `<Counter />`.
3. Save — Vite HMR updates the browser instantly.

---

--





**Instructor:** Muaz Muhammad

**Course:** Full Stack Web Development — React Class 01

**Date:** 11th November, 2025

---

