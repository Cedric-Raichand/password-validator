const input = document.getElementById("input");
const eye = document.getElementById("eye");
const count = document.getElementById("count");

const checks = {
  length: document.getElementById("check1"),
  number: document.getElementById("check2"),
  special: document.getElementById("check3"),
  space: document.getElementById("check4"),
};

eye.addEventListener("click", () => {
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  eye.style.color = isPassword ? "black" : "gray";
});

input.addEventListener("input", () => {
  const value = input.value;
  const length = value.length;

  count.textContent = length;

  updateCheck(checks.length, length > 5);
  updateCheck(checks.number, /\d/.test(value));
  updateCheck(checks.special, /[^a-zA-Z0-9]/.test(value));
  updateCheck(checks.space, value !== "" && !/\s/.test(value));
});

function updateCheck(element, isValid) {
  const icon = element.firstElementChild;
  element.classList.toggle("valid", isValid);
  element.classList.toggle("invalid", !isValid);

  icon.classList.toggle("fa-check-circle", isValid);
  icon.classList.toggle("fa-times-circle", !isValid);
}
