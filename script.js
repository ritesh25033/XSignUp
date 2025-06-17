document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-error');
    const errorMessage = document.querySelector('.error-message');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show error state
    function showError() {
        // Force remove any conflicting styles first
        emailInput.style.removeProperty('border-color');
        emailInput.style.removeProperty('color');
        emailInput.style.removeProperty('background-color');
        
        // Add error class
        emailInput.classList.add('error');
        errorMessage.classList.add('show');
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Valid email required.';
        
        // Force apply error styles via JavaScript as backup
    //     setTimeout(() => {
    //         emailInput.style.setProperty('border-color', 'rgb(255, 99, 71)', 'important');
    //         emailInput.style.setProperty('color', 'rgb(255, 99, 71)', 'important');
    //         emailInput.style.setProperty('background-color', 'rgba(255, 99, 71, 0.6)', 'important');
    //     }, 10);
    }

    // Hide error state
    function hideError() {
        emailInput.classList.remove('error');
        errorMessage.classList.remove('show');
        errorMessage.style.display = 'none';
        
        // Reset inline styles
        emailInput.style.removeProperty('border-color');
        emailInput.style.removeProperty('color');
        emailInput.style.removeProperty('background-color');
    }

    // Form submission handler
    form.addEventListener('submit', function (e) {
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
    emailInput.addEventListener('input', function () {
        if (emailInput.classList.contains('error')) {
            const email = emailInput.value.trim();
            if (email && isValidEmail(email)) {
                hideError();
            }
        }
    });

    // Focus and blur effects - only apply if not in error state
    emailInput.addEventListener('focus', function () {
        if (!emailInput.classList.contains('error')) {
            emailInput.style.borderColor = '#242742';
        }
    });

    emailInput.addEventListener('blur', function () {
        if (!emailInput.classList.contains('error')) {
            emailInput.style.borderColor = '#d6d9e6';
        }
    });
});
