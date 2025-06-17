document.addEventListener('DOMContentLoaded', function() {
    const userEmailElement = document.getElementById('user-email');
    const dismissBtn = document.querySelector('.dismiss-btn');
    
    // Get email from localStorage
    const userEmail = localStorage.getItem('userEmail');
    
    if (userEmail) {
        userEmailElement.textContent = userEmail;
    } else {
        // Redirect back if no email found
        window.location.href = 'index.html';
    }
    
    // Dismiss button handler
    dismissBtn.addEventListener('click', function() {
        // Clear stored email
        localStorage.removeItem('userEmail');
        // Redirect to main page
        window.location.href = 'index.html';
    });
});
