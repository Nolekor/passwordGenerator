//change background color when clicked
// function flashRed() {
//   var redBox = document.getElementById("red-box");
//   redBox.classList.add('highlight');
//   setTimeout(function(){
//       redBox.classList.remove('highlight');
//   }, 1000)
// }
var generateBtn = document.querySelector(".btn-generate");
var lengthEl = document.getElementById("length-el");
var btnFieldOne = document.querySelector("#pswFieldOne");
var btnFieldTwo = document.querySelector("#pswFieldTwo");
var btnFieldThree = document.querySelector("#pswFieldThree");
var btnFieldFour = document.querySelector("#pswFieldFour");
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
function password(userInput) {
    var passwordString = "";
    for (var i = 0; i < userInput; i++) {
        var randomChar = letters[Math.floor(Math.random() * letters.length)];
        passwordString += randomChar;
    }
    return passwordString;
}
function setPasswords(lengthPsw) {
    btnFieldOne.value = password(lengthPsw);
    btnFieldTwo.value = password(lengthPsw);
    btnFieldThree.value = password(lengthPsw);
    btnFieldFour.value = password(lengthPsw);
}
function getPassword() {
    // return parseInt(lengthEl.value) > 16 || parseInt(lengthEl.value) < 8
    //   ? alert("please enter a number between 8 and 16")
    //   : lengthEl.value === ""
    //   ? setPasswords(8)
    //   : setPasswords(parseInt(lengthEl.value));
    if (parseInt(lengthEl.value) > 16 || parseInt(lengthEl.value) < 8) {
        alert("please enter a number between 8 and 16");
    }
    else if (lengthEl.value === "") {
        setPasswords(8);
    }
    else {
        setPasswords(parseInt(lengthEl.value));
    }
}
function copy(id) {
    id.select();
    document.execCommand("copy");
}
