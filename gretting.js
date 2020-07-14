const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CM = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CM);
  greeting.classList.add(SHOWING_CM);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    // user is not
  } else {
    // user is

    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
