var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopup = document.getElementById("popup");
var cancelPopup = document.getElementById("cancel-popup");
var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");

var eventName = document.getElementById("event-name-input");
var eventDate = document.getElementById("event-date-input");
var eventDesc = document.getElementById("event-description-input");

var welcomeBox = document.querySelector(".popup-welcome");
var welcomeTextBox = document.querySelector(".popup-welcome-box");
var welcomeButton = document.getElementById("welcome-button");
var welcomeText = document.getElementById("welcome-text");

var result = document.getElementById("result");
var aboutUs = document.getElementById("abouts-us");

addPopup.addEventListener("click", function () {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

cancelPopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

addBook.addEventListener("click", function (event) {
    event.preventDefault();

   

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${eventName.value}</h2>
        <h5>${eventDate.value}</h5>
        <p>${eventDesc.value}</p>
        <button onclick="DeleteCard(event)">Delete</button>
    `;
    container.append(div);

    // Clear input fields
    eventName.value = "";
    eventDate.value = "";
    eventDesc.value = "";

    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

function DeleteCard(event) {
    event.target.parentElement.remove();
}

welcomeButton.addEventListener("click", function (event) {
    event.preventDefault();

    var h2 = document.createElement("h2");
    h2.textContent = "Hello, " + welcomeText.value + "....";
    h2.style.color = "orangered";
    h2.style.textAlign = "center";
    h2.style.backgroundColor = "black";
    h2.style.opacity = "0.8";

    result.append(h2);

    welcomeBox.style.display = "none";
    welcomeTextBox.style.display = "none";
});

aboutUs.addEventListener("click", function () {
    window.location.href = "about-us.html";
});

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("hidePopup") === "true") {
        welcomeBox.style.display = "none";
        welcomeTextBox.style.display = "none";
        localStorage.removeItem("hidePopup");
    } else {
        welcomeBox.style.display = "block";
        welcomeTextBox.style.display = "block";
    }
});
