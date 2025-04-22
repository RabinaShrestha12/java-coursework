function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // Hardcoded admin login
    if (username === "admin" && password === "admin123") {
        window.location.href = "admin_panel.html";
    }
    // Librarian login
    else if (username === "lib123" && password === "libpass") {
        window.location.href = "librarian_panel.html";
    }
    else {
        error.textContent = "Invalid credentials!";
    }
}
