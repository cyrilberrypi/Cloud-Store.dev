document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Form Validation
        if (!name || !email || !message) {
            alert("All fields are required. Please fill in all fields.");
            return;
        }

        // Basic email format validation
        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please provide a valid email address.");
            return;
        }

        // Success Feedback
        alert(
            `Thank you for reaching out, ${name}! We'll get back to you at ${email} as soon as possible.`
        );

        // Reset Form Fields
        contactForm.reset();
    });
});
