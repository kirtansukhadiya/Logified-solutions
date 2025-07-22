// Contact Form Handling with Backend Integration
const API_URL = 'http://localhost:3000'; // Change this to your deployed backend URL

async function handleContactForm(event) {
  event.preventDefault();
  
  const form = document.getElementById('contactForm');
  const formData = new FormData(form);
  const submitBtn = form.querySelector('.submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const messageDiv = document.getElementById('formMessage');

  // Get form data
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') || '',
    message: formData.get('message')
  };

  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline-block';
  messageDiv.innerHTML = '';

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      messageDiv.innerHTML = `<div class="success-message">${result.message}</div>`;
      form.reset();
    } else {
      throw new Error(result.message);
    }

  } catch (error) {
    console.error('Form submission error:', error);
    messageDiv.innerHTML = `<div class="error-message">${error.message || 'There was an error sending your message. Please try again later.'}</div>`;
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    btnText.style.display = 'inline-block';
    btnLoading.style.display = 'none';
    
    // Hide message after 5 seconds
    setTimeout(() => {
      const msgElement = messageDiv.querySelector('.success-message, .error-message');
      if (msgElement) {
        msgElement.style.opacity = '0';
        setTimeout(() => {
          messageDiv.innerHTML = '';
        }, 300);
      }
    }, 5000);
  }
}

// Add form submit handler if form exists
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
});

// Form validation
function validateForm(form) {
  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const message = form.querySelector('#message').value.trim();
  
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return false;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  return true;
}
