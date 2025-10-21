document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
    
    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    
    // Add aria-describedby attributes for accessibility
    nameInput.setAttribute('aria-describedby', 'name-error');
    emailInput.setAttribute('aria-describedby', 'email-error');
    subjectInput.setAttribute('aria-describedby', 'subject-error');
    messageInput.setAttribute('aria-describedby', 'message-error');
    
    // Form submission handler
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset error messages
        clearErrors();
        
        // Validate form
        let isValid = validateForm();
        
        if (isValid) {
            // Show success message
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            successMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
    
    // Input validation on blur
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    
    // Validation functions
    function validateForm() {
        let isValid = true;
        
        if (!validateName()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validateSubject()) isValid = false;
        if (!validateMessage()) isValid = false;
        
        return isValid;
    }
    
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Full name is required';
            return false;
        }
        nameError.textContent = '';
        return true;
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address (e.g., name@example.com)';
            return false;
        }
        emailError.textContent = '';
        return true;
    }
    
    function validateSubject() {
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required';
            return false;
        }
        subjectError.textContent = '';
        return true;
    }
    
    function validateMessage() {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            return false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long';
            return false;
        }
        messageError.textContent = '';
        return true;
    }
    
    function clearErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        successMessage.style.display = 'none';
    }
});