// Select an element by its ID and change its content
document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("example");
    if (element) {
        element.textContent = "Hello, this text was changed by JavaScript!";
    }
});

// Add a click event listener to a button
document.getElementById("myButton").addEventListener("click", function () {
    alert("Button was clicked!");
});