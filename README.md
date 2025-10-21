# HNG 13 Stage 1 Project

## Project Overview
This project extends a Profile Card application with two new responsive, accessible, and testable web pages: Contact Us and About Me. The implementation uses semantic HTML, modern CSS, and vanilla JavaScript only.

## Features

### Contact Us Page
- Fully responsive contact form with validation
- Accessibility features including proper labels and ARIA attributes
- Client-side validation with clear error messages
- Success message display on valid submission
- Test-ready with appropriate data-testid attributes

### About Me Page
- Structured sections for Bio, Goals, Low confidence areas, Note to future self, and Extra thoughts
- Semantic HTML structure with proper headings
- Responsive design for all screen sizes
- Test-ready with appropriate data-testid attributes

### Home Page
- Simple profile card display
- Navigation to other pages

## Technologies Used
- HTML5
- CSS3 (Flexbox for layouts)
- Vanilla JavaScript

## Setup Instructions
1. Clone or download this repository
2. Open any of the HTML files in a web browser:
   - index.html - Home page with profile card
   - contact.html - Contact form page
   - about.html - About Me page

## Project Structure
```
Stage 1/
├── index.html          # Home page with profile card
├── contact.html        # Contact form page
├── about.html          # About Me page with required sections
├── css/
│   └── styles.css      # Styles for all pages
├── js/
│   └── contact.js      # Form validation logic
└── image/
    └── 1.jpg           # Profile image
```

## Testing
The project includes data-testid attributes as required for automated testing:

### Contact Form
- Full name: test-contact-name
- Email: test-contact-email
- Subject: test-contact-subject
- Message: test-contact-message
- Submit button: test-contact-submit
- Error messages: test-contact-error-<field>
- Success message: test-contact-success

### About Me Page
- Page container: test-about-page
- Bio section: test-about-bio
- Goals section: test-about-goals
- Low confidence areas: test-about-confidence
- Note to future self: test-about-future-note
- Extra thoughts: test-about-extra