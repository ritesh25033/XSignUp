document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('em');

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show error state (exactly as test expects)
    function showError() {
        // Add error class to input
        emailInput.classList.add('error');
        
        // Show error message
        errorMessage.style.display = 'block';
        errorMessage.classList.add('show');
        errorMessage.textContent = 'Valid email required.';
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
});
