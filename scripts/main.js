document.querySelector("html").onclick = function () {
    alert("Волк в цирке не выступает");
  };
  var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/auewolf2.jpg") {
    myImage.setAttribute("src", "images/auewolf.jpg");
  } else {
    myImage.setAttribute("src", "images/auewolf2.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Ауф Волк " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Ауф Волк " + storedName;
}
myButton.onclick = function () {
  setUserName();
};