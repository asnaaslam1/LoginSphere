function showLogin(){
hideAll();
document.getElementById("loginSection").classList.add("active");
}

function showRegister(){
hideAll();
document.getElementById("registerSection").classList.add("active");
}

function showForgot(){
hideAll();
document.getElementById("forgotSection").classList.add("active");
}

function showHome(){
hideAll();
document.getElementById("homeSection").classList.add("active");
}

function hideAll(){
document.querySelectorAll(".section").forEach(sec=>{
sec.classList.remove("active");
});
}