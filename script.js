document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show error state - CRITICAL: Ensure immediate application
    function showError() {
        // Add error class first
        emailInput.classList.add('error');
        
        // Show error message
        errorMessage.style.display = 'block';
        errorMessage.classList.add('show');
        errorMessage.textContent = 'Valid email required.';
        
        // Force reflow to ensure styles are applied immediately
        emailInput.offsetHeight;
    }

    // Hide error state
    function hideError() {
        emailInput.classList.remove('error');
        errorMessage.classList.remove('show');
        errorMessage.style.display = 'none';
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

    // Remove any focus/blur handlers that might interfere with error state
    emailInput.addEventListener('focus', function () {
        // Only apply focus styles if not in error state
        if (!emailInput.classList.contains('error')) {
            this.style.borderColor = '#242742';
        }
    });

    emailInput.addEventListener('blur', function () {
        // Only apply blur styles if not in error state
        if (!emailInput.classList.contains('error')) {
            this.style.borderColor = '#d6d9e6';
        }
    });
});
