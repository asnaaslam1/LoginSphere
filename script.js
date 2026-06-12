function hideAll(){
document.querySelectorAll(".card").forEach(c=>{
c.classList.remove("active");
});
}

function showLogin(){
hideAll();
document.getElementById("login").classList.add("active");
}

function showRegister(){
hideAll();
document.getElementById("register").classList.add("active");
}

function showForgot(){
hideAll();
document.getElementById("forgot").classList.add("active");
}