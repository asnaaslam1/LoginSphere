function openLogin(){
document.getElementById("overlay").style.display="flex";
showLogin();
}

function showLogin(){
document.getElementById("loginBox").classList.remove("hide");
document.getElementById("registerBox").classList.add("hide");
document.getElementById("forgotBox").classList.add("hide");
}

function showRegister(){
document.getElementById("loginBox").classList.add("hide");
document.getElementById("registerBox").classList.remove("hide");
document.getElementById("forgotBox").classList.add("hide");
}

function showForgot(){
document.getElementById("loginBox").classList.add("hide");
document.getElementById("registerBox").classList.add("hide");
document.getElementById("forgotBox").classList.remove("hide");
}

/* close when click outside */
document.getElementById("overlay").addEventListener("click", function(e){
if(e.target === this){
document.getElementById("overlay").style.display="none";
}
});