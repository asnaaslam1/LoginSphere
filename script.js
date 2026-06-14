const login = document.getElementById("login");
const register = document.getElementById("register");
const forgot = document.getElementById("forgot");

let userData = {
    username: "Asna",
    email: "asna@gmail.com",
    password: "12345678"
};

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

// DO NOT use showLogin() here
// Login box will stay hidden until Login button is clicked

function showModal(title, text, isSuccess) {
    const modal = document.getElementById("alertModal");
    const icon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const btn = document.getElementById("modalBtn");

    modalTitle.innerText = title;
    modalText.innerText = text;

    if (isSuccess) {
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

function validateLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (email === "" || password === "") {
        showModal(
            "Empty Fields!",
            "Please enter email and password",
            false
        );
        return;
    }

    document.querySelector(".container").innerHTML = `
        <div class="card active">
            <h2>🎉 Welcome ${userData.username}</h2>
            <p>Login Successful</p>

            <div style="margin-top:20px;">
                <p><strong>Email:</strong> ${email}</p>
            </div>

            <button class="btn" onclick="logoutUser()" style="margin-top:20px;">
                Logout
            </button>
        </div>
    `;
}

function registerUser() {
    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (username === "" || email === "" || password === "") {
        showModal(
            "Registration Failed!",
            "Please fill all fields",
            false
        );
        return;
    }

    userData = {
        username,
        email,
        password
    };

    showModal(
        "Register Successful!",
        "Account created successfully ✅",
        true
    );
}

function resetPassword() {
    const email = document.getElementById("forgotEmail").value.trim();

    if (email === "") {
        showModal(
            "Empty Field!",
            "Please enter your email",
            false
        );
        return;
    }

    showModal(
        "Reset Link Sent!",
        "Check your email for reset link ✅",
        true
    );
}

function logoutUser() {
    location.reload();
}