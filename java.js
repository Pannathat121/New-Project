// Select an element by its ID
const button = document.getElementById('myButton');
const text = document.getElementById('myText');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the text content
    text.textContent = 'You clicked the button!';

    // Change the style of the text
    text.style.color = 'blue';
    text.style.fontSize = '20px';
});