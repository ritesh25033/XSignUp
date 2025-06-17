document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show error state
    function showError() {
        emailInput.classList.add('error');
        errorMessage.style.display = 'block';
    }

    // Hide error state
    function hideError() {
        emailInput.classList.remove('error');
        errorMessage.style.display = 'none';
    }

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email || !isValidEmail(email)) {
            showError();
            return;
        }
        
        hideError();
        
        // Store email in localStorage for success page
        localStorage.setItem('userEmail', email);
        
        // Navigate to success page
        window.location.href = 'success.html';
    });

    // Real-time validation
    emailInput.addEventListener('input', function() {
        if (emailInput.classList.contains('error')) {
            const email = emailInput.value.trim();
            if (email && isValidEmail(email)) {
                hideError();
            }
        }
    });

    // Focus and blur effects
    emailInput.addEventListener('focus', function() {
        if (!emailInput.classList.contains('error')) {
            emailInput.style.borderColor = '#242742';
        }
    });

    emailInput.addEventListener('blur', function() {
        if (!emailInput.classList.contains('error')) {
            emailInput.style.borderColor = '#d6d9e6';
        }
    });
});
