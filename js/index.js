const form = document.querySelector(".login-form");
const loginInput = form.querySelector(".input");
const greeting = document.querySelector(".greeting");

const handleSubmit = (event) =>{
    event.preventDefault();
    form.classList.add("hidden");
    greeting.classList.remove("hidden");
    console.log(loginInput);
    const username = loginInput.value;
    greeting.innerText = `Hello, ${username}`;
};

form.addEventListener("submit", handleSubmit);