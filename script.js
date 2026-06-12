function showRegister(){
document.getElementById("loginBox").classList.add("hide");
document.getElementById("registerBox").classList.remove("hide");
}

function showLogin(){
document.getElementById("registerBox").classList.add("hide");
document.getElementById("loginBox").classList.remove("hide");
}

function login(){
let email = document.querySelector("#loginBox input[type='email']").value;
let password = document.querySelector("#loginBox input[type='password']").value;

if(email==="" || password===""){
alert("Please fill all login fields");
}else{
alert("Login Successful");
}
}

function register(){
let username = document.querySelector("#registerBox input[type='text']").value;
let email = document.querySelector("#registerBox input[type='email']").value;
let password = document.querySelector("#registerBox input[type='password']").value;
let terms = document.querySelector("#registerBox input[type='checkbox']").checked;

if(username==="" || email==="" || password===""){
alert("Please fill all fields");
}
else if(!terms){
alert("Please accept Terms & Conditions");
}
else{
alert("Registration Successful");
showLogin();
}
}