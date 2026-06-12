function showRegister() {
document.getElementById("login").classList.add("hide");
document.getElementById("register").classList.remove("hide");
}

function showLogin() {
document.getElementById("register").classList.add("hide");
document.getElementById("login").classList.remove("hide");
}

const loginBtn = document.querySelector("#login .btn");

if(loginBtn){
loginBtn.addEventListener("click",function(){

const email =
document.querySelector("#login input[type='email']").value;

const password =
document.querySelector("#login input[type='password']").value;

if(email==="" || password===""){
alert("Please fill all fields");
}
else{
alert("Login Successful");
}
});
}

const registerBtn =
document.querySelector("#register .btn");

if(registerBtn){
registerBtn.addEventListener("click",function(){

const username =
document.querySelector("#register input[type='text']").value;

const email =
document.querySelector("#register input[type='email']").value;

const password =
document.querySelector("#register input[type='password']").value;

const terms =
document.querySelector("#register .terms input").checked;

if(username==="" || email==="" || password===""){
alert("Please fill all fields");
}
else if(!terms){
alert("Accept Terms & Conditions");
}
else{
alert("Registration Successful");
showLogin();
}
});
}