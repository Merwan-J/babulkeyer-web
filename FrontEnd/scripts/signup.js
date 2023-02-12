const api = `http://localhost:3000/api`;

const usernameField = document.getElementById("username");
const nameField = document.getElementById("name");
const btnSign = document.querySelector(".btn-sign");
const password = document.querySelector(".form-password");
const reenter = document.querySelector(".form-reenter-password");
const error = document.querySelector(".passwordError");

btnSign.addEventListener("click", clickHandler);

function restoreState() {
    password.classList.remove("border-danger");
    password.classList.add("border-success");
    reenter.classList.remove("border-danger");
    reenter.classList.add("border-success");
    password.classList.remove("border-2");
    password.classList.add("border");
    reenter.classList.remove("border-2");
    reenter.classList.add("border");
}

async function clickHandler(e) {
    e.preventDefault();
    const passValue = password.value;
    const repassValue = reenter.value;
    console.log(passValue);
    console.log(repassValue);
    if (passValue !== repassValue) {
        console.log("not equl");
        password.classList.remove("border-success");
        reenter.classList.remove("border-success");
        password.classList.add("border-danger");
        reenter.classList.add("border-danger");
        password.classList.remove("border");
        password.classList.add("border-2");
        reenter.classList.remove("border");
        reenter.classList.add("border-2");
        error.classList.remove("hidden");
        return;
    }

    const url = `${api}/auth/signup`;
    const data = {
        userName: usernameField.value,
        name: nameField.value,
        password: password.value,
    };

    console.log("data before being sent", data);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: await JSON.stringify(data),
    });

    const res = await response.json();

    if (response.status === 201) {
        console.log("everytihng well");
        console.log(res);
        alert(
            "Your Account Have Been Successfully Submitted\nPlease wait till you are approved!"
        );
        return window.location.replace(
            "http://127.0.0.1:5502/FrontEnd/log-in.html"
        );
    } else {
        alert("not", res);
    }
}

password.addEventListener("click", restoreState);
reenter.addEventListener("click", restoreState);
