const form = document.querySelector(".check-name");

const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("submit");
};

form.addEventListener("submit", handleSubmit);