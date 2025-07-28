// login section

const signUpButton = document.getElementById("vk-auth-signUp");
const signInButton = document.getElementById("vk-auth-signIn");
const container = document.getElementById("vk-auth-container");

const mobileSignInButton = document.getElementById("vk-auth-mobile-signIn");
const mobileSignUpButton = document.getElementById("vk-auth-mobile-signUp");

signUpButton.addEventListener("click", () => {
  container.classList.add("vk-auth-right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("vk-auth-right-panel-active");
});

mobileSignUpButton.addEventListener("click", () => {
  container.classList.add("vk-auth-right-panel-active");
});

mobileSignInButton.addEventListener("click", () => {
  container.classList.remove("vk-auth-right-panel-active");
});

// login ends
