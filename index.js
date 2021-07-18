const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.nodeValue;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
