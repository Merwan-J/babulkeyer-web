const btnSign = document.querySelector(".btn-sign");
const password = document.querySelector(".form-password");
const reenter = document.querySelector(".form-reenter-password");
const error = document.querySelector(".passwordError");

btnSign.addEventListener("click", (e) => {
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
  alert(
    "Your Account Have Been Successfully Submitted\nPlease wait till you are approved!"
  );
  return window.location.replace("http://127.0.0.1:8080/log-in.html");
});

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

password.addEventListener("click", restoreState);
reenter.addEventListener("click", restoreState);
