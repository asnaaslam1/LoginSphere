function hideAll(){
document.querySelectorAll(".card").forEach(card=>{
card.classList.remove("active");
});
}

function showLogin(){
hideAll();
document.getElementById("loginBox").classList.add("active");
}

function showRegister(){
hideAll();
document.getElementById("registerBox").classList.add("active");
}

function showForgot(){
hideAll();
document.getElementById("forgotBox").classList.add("active");
}