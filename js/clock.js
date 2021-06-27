const clock = document.querySelector(".clock");

const checkTime = () => {
  const current = new Date();
  const hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();
  clock.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

checkTime();
setInterval(checkTime, 1000);
