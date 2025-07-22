const signUpButton = document.getElementById("vk-auth-signUp");
const signInButton = document.getElementById("vk-auth-signIn");
const container = document.getElementById("vk-auth-container");

signUpButton.addEventListener("click", () => {
  container.classList.add("vk-auth-right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("vk-auth-right-panel-active");
});
