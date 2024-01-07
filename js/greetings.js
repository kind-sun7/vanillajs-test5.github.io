//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const click = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//const loginButton = document.querySelector("#login-form button");

//function onLoginBtnClick() {
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    /*if (username === "") {
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long.");
    }*/
    //console.log(loginInput.value);
    //console.log("click!!!!");

    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    //alert("clicked!");
}

function deleteGreetings(event) {
    greeting.innerText = "";
    loginInput.value = "";
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const button = document.createElement("button");
    button.innerText = "Log Out";
    greeting.appendChild(button);
    button.addEventListener("click", deleteGreetings);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(saveUsername);
}
