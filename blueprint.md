
# Blueprint: Wealth Planner

## Overview

A simple, framework-less web application designed to showcase modern web development practices. It includes a basic HTML structure, modern CSS for styling, and vanilla JavaScript for interactivity. The initial version includes a partnership inquiry form.

## Current Plan: Dark/Light Mode Theme Toggle

### Objective

Implement a user-controlled theme switcher that allows toggling between a light mode and a dark mode. The user's preference will be saved in their browser for subsequent visits.

### Steps

1.  **HTML:** Add a toggle switch element to `index.html` to serve as the theme controller.
2.  **CSS:**
    *   Refactor the stylesheet to use CSS variables for colors to facilitate easy theme switching.
    *   Define two color palettes: one for the default light theme and one for the dark theme.
    *   The dark theme will be applied when a `.dark-mode` class is added to the `<body>` element.
3.  **JavaScript:**
    *   Create a script in `main.js` to handle the logic for the theme toggle.
    *   The script will add an event listener to the toggle switch.
    *   On click, it will toggle the `.dark-mode` class on the `<body>`.
    *   It will use `localStorage` to save the user's current theme choice.
    *   On page load, the script will check `localStorage` to apply the previously selected theme.
4.  **Git:** Commit the new feature and push the changes to the remote GitHub repository.

## Design and Features

### Version 1.0

*   **Structure:** Standard HTML5 boilerplate.
*   **Styling:** Basic CSS for a clean layout and form styling.
*   **Features:**
    *   A "Partnership Inquiry" form that submits data to Formspree.
