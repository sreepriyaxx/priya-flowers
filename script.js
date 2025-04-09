// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate inputs
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission (replace with actual backend logic)
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contact-form').reset(); // Clear the form
});


  function toggleMenu() {
    const nav = document.getElementById("navlinks");
    nav.classList.toggle("active");
  }

