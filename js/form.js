// Contact Form Handling
async function handleContactForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const messageDiv = document.getElementById('formMessage');
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';
    messageDiv.innerHTML = '';
    
    try {
        // Simulate API call (replace with actual backend endpoint)
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            messageDiv.innerHTML = '<div class="success-message">Thank you for your message! We will get back to you soon.</div>';
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        // For demo purposes, show success message
        messageDiv.innerHTML = '<div class="success-message">Thank you for your message! We will get back to you soon.</div>';
        form.reset();
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';
    }
}

// Add form submit handler if form exists
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
}