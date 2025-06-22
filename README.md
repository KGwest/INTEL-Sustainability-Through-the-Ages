# Intel: Sustainability Through the Ages

This project is a responsive, accessible, and RTL-localized webpage that explores Intel's historical timeline and sustainability efforts. Originally built as a timeline page, this version has been extended to support right-to-left (RTL) languages, improved accessibility, and includes new Bootstrap components for a polished, professional experience.

---

##  Features Implemented

###  Language Localization & RTL Support
- Detects when the browser language changes (e.g., via Google Translate).
- Automatically switches layout to RTL for Arabic, Hebrew, Farsi, and Urdu.
- Falls back to LTR for all other languages.
- Implemented using JavaScript’s `MutationObserver`.

### Responsive Three-Column Bootstrap Layout
- Added a new section featuring:
  - Three Bootstrap columns
  - Icons for visual clarity
  - Call-to-action "Learn More" buttons
- Columns stack gracefully on smaller screens and align horizontally on desktop.

###  Newsletter Subscription Form
- Form built using Bootstrap’s grid and input classes.
- Integrated with **Formspree** to handle real submissions.
- Live feedback on validation and success messages using JavaScript.

###  Accessibility Improvements
- Passed Lighthouse accessibility audits.
- All images use `<picture>` elements with `.webp` + fallback `.jpg`/`.png` formats.
- Clear, descriptive `alt` attributes added to all images.
- Form elements use proper labels and validation feedback for screen readers.
- Color contrast ratios verified and adjusted for readability.

###  Enhanced Interactivity
- Hover-enabled timeline flip cards using CSS animations.
- JavaScript handles:
  - Language detection & direction switching
  - Real-time form validation
  - Scroll instruction behavior for mobile vs desktop

### Footer Section
- Includes placeholder links for Terms of Use, Privacy Policy, and Contact.
- Uses semantic HTML and Bootstrap spacing.

## Testing

-  RTL layout tested manually and via Google Translate.
- Lighthouse audit for Accessibility (100% score on Desktop).
- Form validation tested with both valid and invalid inputs.
- Responsive behavior tested on Chrome, Firefox, and mobile emulator.

---

## Live Link

https://kgwest.github.io/INTEL-Sustainability-Through-the-Ages/

---

##  Credits

Developed by **Kezia West**  
Project completed as part of Web Development Curriculum — Project 3: Localization & Accessibility Challenge.
