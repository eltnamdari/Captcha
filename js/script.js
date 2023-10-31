var captchaCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

function generateCaptcha() {
  var captcha = "";
  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * captchaCharacters.length);
    captcha += captchaCharacters[randomIndex];
  }
  return captcha;
}

function validateCaptcha() {
  var userInput = document.getElementById("captcha-input").value.toUpperCase();
  var captchaText = document.getElementById("captcha-image").alt.toUpperCase();

  if (userInput === captchaText) {
    alert("You are a human :)");
  } else {
    alert(" Incorrect! You are a Bot");
    refreshCaptcha();
  }
}
function refreshCaptcha() {
  var captcha = generateCaptcha();
  document.getElementById("captcha-image").src =
    "https://dummyimage.com/150x50/000/fff&text=" + captcha;
  document.getElementById("captcha-image").alt = captcha;
  document.getElementById("captcha-input").value = "";
}
refreshCaptcha();
