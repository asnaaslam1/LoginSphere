// OPEN ELEMENTS
const openLogin = document.getElementById("openLogin");

const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");
const overlay = document.getElementById("overlay");

// BUTTONS
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");

// OPEN LOGIN
openLogin.onclick = () => {
    loginBox.style.display = "block";
    overlay.style.display = "block";
};

// SWITCH TO REGISTER
showRegister.onclick = (e) => {
    e.preventDefault();
    loginBox.style.display = "none";
    registerBox.style.display = "block";
};

// SWITCH TO LOGIN
showLogin.onclick = (e) => {
    e.preventDefault();
    registerBox.style.display = "none";
    loginBox.style.display = "block";
};

// CLOSE LOGIN
closeLogin.onclick = () => {
    loginBox.style.display = "none";
    overlay.style.display = "none";
};

// CLOSE REGISTER
closeRegister.onclick = () => {
    registerBox.style.display = "none";
    overlay.style.display = "none";
};

// CLICK OUTSIDE CLOSE
overlay.onclick = () => {
    loginBox.style.display = "none";
    registerBox.style.display = "none";
    overlay.style.display = "none";
};

// REGISTER DATA
document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    registerBox.style.display = "none";
    loginBox.style.display = "block";
});

// LOGIN CHECK
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if(user && email === user.email && password === user.password){
        alert("Login Successful!");
        overlay.style.display = "none";
        loginBox.style.display = "none";
    } else {
        alert("Invalid Details");
    }
});