// ============================
// CONNECT HTML ELEMENTS
// ============================

let themeBtn = document.getElementById("themeBtn");

let clock = document.getElementById("clock");

let calcBtn = document.getElementById("calcBtn");

let mark1 = document.getElementById("m1");
let mark2 = document.getElementById("m2");
let mark3 = document.getElementById("m3");

let result = document.getElementById("result");

let quoteBtn = document.getElementById("quoteBtn");

let quote = document.getElementById("quote");

let form = document.getElementById("studentForm");

let nameInput = document.getElementById("name");

let emailInput = document.getElementById("email");

let rollInput = document.getElementById("roll");

let formMessage = document.getElementById("formMessage");


// ============================
// DARK / LIGHT MODE
// ============================

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});


// ============================
// DIGITAL CLOCK
// ============================

function updateClock() {

    let currentTime = new Date();

    let hours = currentTime.getHours();

    let minutes = currentTime.getMinutes();

    let seconds = currentTime.getSeconds();

    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    seconds = String(seconds).padStart(2, "0");

    clock.innerHTML =
        hours + ":" + minutes + ":" + seconds;

}

updateClock();

setInterval(updateClock, 1000);


// ============================
// PERCENTAGE CALCULATOR
// ============================

calcBtn.addEventListener("click", function() {

    let marks1 = parseFloat(mark1.value);

    let marks2 = parseFloat(mark2.value);

    let marks3 = parseFloat(mark3.value);


    // Check whether all fields contain numbers

    if (
        isNaN(marks1) ||
        isNaN(marks2) ||
        isNaN(marks3)
    ) {

        result.innerHTML =
            "Please enter all marks.";

        return;
    }


    // Check whether marks are between 0 and 100

    if (
        marks1 < 0 || marks1 > 100 ||
        marks2 < 0 || marks2 > 100 ||
        marks3 < 0 || marks3 > 100
    ) {

        result.innerHTML =
            "Marks must be between 0 and 100.";

        return;
    }


    // Calculate total

    let total =
        marks1 + marks2 + marks3;


    // Calculate percentage

    let percentage =
        (total / 300) * 100;


    // Display result

    result.innerHTML =
        "Percentage: " +
        percentage.toFixed(2) +
        "%";

});


// ============================
// RANDOM QUOTE GENERATOR
// ============================

let quotes = [

    "Success comes from consistent effort.",

    "Believe in yourself and keep moving forward.",

    "Small progress is still progress.",

    "Don't stop when you are tired. Stop when you are done.",

    "Your future depends on what you do today.",

    "Great things take time.",

    "Learn from yesterday and build for tomorrow."

];


function generateQuote() {

    let randomIndex =
        Math.floor(Math.random() * quotes.length);

    quote.innerHTML =
        quotes[randomIndex];

}


quoteBtn.addEventListener("click", generateQuote);


// Show a quote when the page loads

generateQuote();


// ============================
// REGISTRATION FORM VALIDATION
// ============================

form.addEventListener("submit", function(event) {

    // Prevent page refresh

    event.preventDefault();


    // Get values from inputs

    let name = nameInput.value.trim();

    let email = emailInput.value.trim();

    let roll = rollInput.value.trim();


    // ============================
    // NAME VALIDATION
    // ============================

    if (name === "") {

        formMessage.innerHTML =
            "Please enter your name.";

        return;
    }


    // ============================
    // EMAIL VALIDATION
    // ============================

    if (
        !email.includes("@") ||
        !email.includes(".")
    ) {

        formMessage.innerHTML =
            "Please enter a valid email.";

        return;
    }


    // ============================
    // ROLL NUMBER VALIDATION
    // ============================

    if (roll === "") {

        formMessage.innerHTML =
            "Please enter your roll number.";

        return;
    }


    if (isNaN(roll)) {

        formMessage.innerHTML =
            "Roll number must contain numbers only.";

        return;
    }


    // ============================
    // SUCCESS
    // ============================

    formMessage.innerHTML =
        "Registration successful!";


    // Clear the form

    form.reset();

});