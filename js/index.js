const email = document.querySelector("[name=email]");
const password = document.querySelector("[name=password]");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
document.getElementById("form").addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.value.trim()) {
    emailError.textContent = "الإيميل يجب ألا يكون فارغ!!!";
    emailError.classList.add("show");
  } else if (!reg.test(email.value.trim())) {
    emailError.textContent = "إيميل غير صالح!!!!";
    emailError.classList.add("show");
  }
  if (!password.value.trim()) {
    passwordError.textContent = "كلمة السر يجب ألا تكون فارغة";
    passwordError.classList.add("show");
  }
}
email.addEventListener("click", (e) => emailError.classList.remove("show"));
password.addEventListener("click", (e) =>
  passwordError.classList.remove("show")
);
