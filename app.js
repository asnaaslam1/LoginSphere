let users = JSON.parse(localStorage.getItem("users")) || [];

function register(){

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if(!name || !email || !password){
alert("Please fill all fields");
return;
}

const exists = users.find(
user => user.email === email
);

if(exists){
alert("Email already exists");
return;
}

users.push({
name,
email,
password
});

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert("Registration Successful");

window.location.href="index.html";
}

function login(){

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const user = users.find(
u => u.email === email &&
u.password === password
);

if(user){

localStorage.setItem(
"currentUser",
user.name
);

window.location.href =
"dashboard.html";

}else{

alert("Invalid Email or Password");

}
}

function logout(){

localStorage.removeItem(
"currentUser"
);

window.location.href =
"index.html";
}