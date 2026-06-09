let users = JSON.parse(localStorage.getItem("users")) || [];

/* REGISTER */
function register() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered Successfully!");
  window.location.href = "login.html";
}

/* LOGIN */
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem("user", user.name);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Email or Password");
  }
}

/* LOGOUT */
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}