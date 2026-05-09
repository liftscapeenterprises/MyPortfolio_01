// Contact form is now handled by FormSubmit service
// This file can be empty or deleted
// No JavaScript needed for form submission anymore

document.addEventListener('DOMContentLoaded', function() {
    // Optional: Add a simple success message handler
    const urlParams = new URLSearchParams(window.location.search);
    const formMessage = document.getElementById('formMessage');
    
    if (urlParams.get('submitted') === 'true' && formMessage) {
        formMessage.textContent = 'Thank you for your message! We will contact you soon.';
        formMessage.className = 'success';
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
});
