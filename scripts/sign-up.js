let username = document.querySelector(".name");
let phoneNumber = document.querySelector(".number");
let mails = document.querySelector(".email");
let password = document.querySelector(".password");
let drop = document.querySelector(".submit");
let form = document.querySelector(".form");
let radios = document.querySelectorAll(".radio");
console.log(username);
drop.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(username.value);
  console.log(phoneNumber.value);
  console.log(mails.value);
  // console.log(male.value);
  // console.log(female.value);
  radios.forEach((radio) => {
    if (radio.checked) {
      console.log(radio.value);
    }
  });
  console.log(password.value);
});

function temmyBoy() {
  console.log("welcome idan");
}
temmyBoy();
temmyBoy();
temmyBoy();
temmyBoy();
temmyBoy();
temmyBoy();

function myFunction() {
  temmyBoy();
  temmyBoy();
  temmyBoy();
}
myFunction();
// let ask = prompt("whats your name");
// function tBoy() {
//   console.log(ask);
// }
// tBoy();
function morning(greetFirst, greetSecond) {
  console.log("good morning", greetFirst);
  console.log("good morning", greetSecond);
}
morning("temmy", "paul");
