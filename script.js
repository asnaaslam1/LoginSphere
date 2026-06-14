const login = document.getElementById("login");
const register = document.getElementById("register");
const forgot = document.getElementById("forgot");

let userData = {
    username: "Asna",
    email: "asna@gmail.com",
    password: "12345678"
};

function hideAll(){
    login.classList.remove("active");
    register.classList.remove("active");
    forgot.classList.remove("active");
}

function showLogin(){
    hideAll();
    login.classList.add("active");
}

function showRegister(){
    hideAll();
    register.classList.add("active");
}

function showForgot(){
    hideAll();
    forgot.classList.add("active");
}

showLogin();

// MODAL POPUP FUNCTION - Un screenshot maari
function showModal(title, text, isSuccess) {
    const modal = document.getElementById("alertModal");
    const icon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const btn = document.getElementById("modalBtn");
    
    modalTitle.innerText = title;
    modalText.innerText = text;
    
    if(isSuccess) {
        icon.innerHTML = "✓";
        icon.className = "modal-icon success";
        btn.innerText = "OK";
    } else {
        icon.innerHTML = "✗";
        icon.className = "modal-icon error";
        btn.innerText = "Try Again";
    }
    
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("alertModal").style.display = "none";
}

// LOGIN VALIDATION - Empty check add pannen
function validateLogin(){
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    
    // Empty field check first
    if(email === "" || password === ""){
        showModal("Empty Fields!", "Please enter email and password", false);
        return;
    }
    
    // Correct details check
    if(email === userData.email && password === userData.password){
        showModal("Login Successful!", "Welcome back to LoginSphere", true);
        // 2 sec kazhithu dashboard ku poganum na idha uncomment pannu:
        // setTimeout(() => window.location.href='/dashboard', 2000);
    } else {
        showModal("Login Failed!", "Invalid email or password", false);
    }
}

// REGISTER - Empty check iruku already
function registerUser(){
    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    
    if(username === "" || email === "" || password === ""){
        showModal("Registration Failed!", "Please fill all fields", false);
        return;
    }
    
    userData = { username, email, password };
    showModal("Register Successful!", "Account created successfully", true);
}

// FORGOT PASSWORD - Empty check add pannen
function resetPassword(){
    const email = document.getElementById("forgotEmail").value.trim();
    
    if(email === ""){
        showModal("Empty Field!", "Please enter your email", false);
        return;
    }
    
    if(email === userData.email){
        showModal("Reset Link Sent!", "Check your email for reset link", true);
    } else {
        showModal("Email Not Found!", "This email is not registered", false);
    }
}

