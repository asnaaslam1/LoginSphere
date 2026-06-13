const login = document.getElementById("login");
const register = document.getElementById("register");
const forgot = document.getElementById("forgot");

function hideAll() {
    login.classList.remove("active");
    register.classList.remove("active");
    forgot.classList.remove("active");
}

function showLogin() {
    hideAll();
    login.classList.add("active");
}

function showRegister() {
    hideAll();
    register.classList.add("active");
}

function showForgot() {
    hideAll();
    forgot.classList.add("active");
}

document.querySelector(".background").classList.add("blur");
function showLogin(){
    document.getElementById("login").classList.add("active");
    document.getElementById("register").classList.remove("active");
    document.getElementById("forgot").classList.remove("active");

    document.querySelector(".background").classList.add("blur");
}

function showRegister(){
    document.getElementById("login").classList.remove("active");
    document.getElementById("register").classList.add("active");
    document.getElementById("forgot").classList.remove("active");

    document.querySelector(".background").classList.add("blur");
}

function showForgot(){
    document.getElementById("login").classList.remove("active");
    document.getElementById("register").classList.remove("active");
    document.getElementById("forgot").classList.add("active");

    document.querySelector(".background").classList.add("blur");
}

document.querySelector(".background").classList.remove("blur");