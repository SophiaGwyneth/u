function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated login validation
    if (username === "admin" && password === "12345") {
      alert("Login successful! Redirecting...");
      window.location.href = "https://sites.google.com/view/chupiyah/home"; // Replace with your Google Site URL
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }