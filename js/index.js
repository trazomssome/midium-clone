const form = document.querySelector(".login-form");
const loginInput = form.querySelector(".input");
const greeting = document.querySelector(".greeting");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const mainNoLogin = document.querySelector(".main__wrapper__no-login");

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
    greeting.classList.add(HIDDEN_CLASSNAME);
    header.classList.add(HIDDEN_CLASSNAME);
    main.classList.add(HIDDEN_CLASSNAME);
    footer.classList.add(HIDDEN_CLASSNAME);
    mainNoLogin.classList.remove(HIDDEN_CLASSNAME);
  } else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    mainNoLogin.classList.add(HIDDEN_CLASSNAME);
    header.classList.remove(HIDDEN_CLASSNAME);
    main.classList.remove(HIDDEN_CLASSNAME);
    footer.classList.remove(HIDDEN_CLASSNAME);
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
