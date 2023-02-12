const api = "http://localhost:3000/api";

const usernameFiled = document.getElementById("username");
const passwordField = document.getElementById("password");
const submitBtn = document.getElementById("btn");

submitBtn.addEventListener("click", submitHandler);

async function submitHandler(e) {
    console.log("in submit handler");
    e.preventDefault();
    const url = `${api}/auth/login`;
    const data = {
        userName: usernameFiled.value,
        password: passwordField.value,
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: await JSON.stringify(data),
    });

    const res = await response.json();

    if (response.status === 201) {
        console.log(res);
        console.log("verified");

        localStorage.setItem("jwtToken", res.access_token);

        localStorage.setItem("currentUser", `${res.name}`);

        console.log("storage", localStorage.getItem("jwtToken"));
        return window.location.replace(
            "http://127.0.0.1:5502/FrontEnd/admin-index.html"
        );
    } else {
        alert("not authorized");
    }

    return res;
}
