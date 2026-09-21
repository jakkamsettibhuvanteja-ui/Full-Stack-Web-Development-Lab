const heading = document.getElementById("heading");
const description = document.getElementById("description");
const card = document.getElementById("contentCard");
const cardTitle = document.getElementById("cardTitle");
const message = document.getElementById("message");
const sampleImage = document.getElementById("sampleImage");

const contentBtn = document.getElementById("contentBtn");
const styleBtn = document.getElementById("styleBtn");
const attributeBtn = document.getElementById("attributeBtn");
const resetBtn = document.getElementById("resetBtn");

contentBtn.addEventListener("click", () => {
    heading.textContent = "DOM Content Updated";
    cardTitle.textContent = "Content Changed Successfully";
    message.textContent = "JavaScript changed the HTML content dynamically.";
    description.textContent = "The DOM allows JavaScript to access and modify HTML elements.";
});

styleBtn.addEventListener("click", () => {
    card.style.backgroundColor = "#e8e7ff";
    card.style.border = "3px solid #5b5bd6";
    card.style.transform = "scale(1.03)";
    heading.style.color = "#5b5bd6";
    message.style.fontWeight = "bold";
});

attributeBtn.addEventListener("click", () => {
    sampleImage.setAttribute("src", "https://picsum.photos/300/180?random=5");
    sampleImage.setAttribute("alt", "Updated sample image");
    card.setAttribute("data-status", "modified");
    message.textContent = "HTML attributes were changed using JavaScript.";
});

resetBtn.addEventListener("click", () => {
    heading.textContent = "Document Object Model";
    description.textContent = "JavaScript can dynamically modify HTML content, styles and attributes using the DOM.";
    cardTitle.textContent = "DOM Interactive Example";
    message.textContent = "Click the buttons to see DOM changes.";

    card.style.backgroundColor = "#f5f5f5";
    card.style.border = "none";
    card.style.transform = "scale(1)";
    heading.style.color = "#222";

    sampleImage.setAttribute("src", "https://picsum.photos/300/180");
    sampleImage.setAttribute("alt", "Sample image");
    card.removeAttribute("data-status");
});