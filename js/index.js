const form = document.querySelector(".login-form");
const loginInput = form.querySelector(".input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const handleSubmit = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  checkLogin();
};

const checkLogin = () => {
  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    form.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
  } else {
    form.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    let now = new Date().getHours();
    if (6 < now && now < 12) {
      greeting.innerText = `Good morning, ${savedUsername}`;
    } else if (12 < now && now < 18) {
      greeting.innerText = `Good afternoon, ${savedUsername}`;
    } else {
      greeting.innerText = `Good evening, ${savedUsername}`;
    }
  }
};

checkLogin();

form.addEventListener("submit", handleSubmit);
