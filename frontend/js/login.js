document.getElementById('loginBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (username === "admin" && password === "admin123") {
      window.location.href = "admin-dashboard.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  