let username = document.querySelector(".name");
let password = document.querySelector(".password");
let drop = document.querySelector(".submit");
drop.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(username.value);

  console.log(password.value);
});
