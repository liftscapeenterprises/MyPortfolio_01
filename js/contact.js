document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                formMessage.textContent = 'Please fill in all required fields.';
                formMessage.className = 'error';
                formMessage.style.display = 'block';
                return;
            }
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            formMessage.textContent = 'Thank you for your message! We will contact you soon.';
            formMessage.className = 'success';
            formMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});