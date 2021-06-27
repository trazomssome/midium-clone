const form = document.querySelector(".login-form");
const loginInput = form.querySelector(".input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const handleSubmit = (event) => {
  event.preventDefault();
  form.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  console.log("nono");
} else {
  form.classList.toggle(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${savedUsername}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
}
form.addEventListener("submit", handleSubmit);
