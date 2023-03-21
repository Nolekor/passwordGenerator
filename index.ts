//change background color when clicked
// function flashRed() {
//   var redBox = document.getElementById("red-box");
//   redBox.classList.add('highlight');
//   setTimeout(function(){
//       redBox.classList.remove('highlight');
//   }, 1000)
// }

const generateBtn = document.querySelector(
  ".btn-generate"
) as HTMLButtonElement;
const lengthEl = document.getElementById("length-el") as HTMLInputElement;
const btnFieldOne = document.querySelector("#pswFieldOne") as HTMLInputElement;
const btnFieldTwo = document.querySelector("#pswFieldTwo") as HTMLInputElement;
const btnFieldThree = document.querySelector(
  "#pswFieldThree"
) as HTMLInputElement;
const btnFieldFour = document.querySelector(
  "#pswFieldFour"
) as HTMLInputElement;

const letters: string =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

function password(userInput: number) {
  let passwordString = "";
  for (let i = 0; i < userInput; i++) {
    let randomChar = letters[Math.floor(Math.random() * letters.length)];
    passwordString += randomChar;
  }
  return passwordString;
}

function setPasswords(lengthPsw: number) {
  btnFieldOne.value = password(lengthPsw);
  btnFieldTwo.value = password(lengthPsw);
  btnFieldThree.value = password(lengthPsw);
  btnFieldFour.value = password(lengthPsw);
}

function getPassword() {
  return parseInt(lengthEl.value) > 16 || parseInt(lengthEl.value) < 8
    ? alert("please enter a number between 8 and 16")
    : lengthEl.value === ""
    ? setPasswords(8)
    : setPasswords(parseInt(lengthEl.value));
}

function copy(id) {
  id.select();
  document.execCommand("copy");
}
