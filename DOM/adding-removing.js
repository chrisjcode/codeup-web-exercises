// obtain reference to the button that will trigger div creation
const createButton = document.querySelector("#create-a-div");
// function to create new divs
// within each div there is a button with the class `event-trigger`
const createDiv = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("dynamic-div");
    newDiv.innerHTML = "<p>I'm a new div!</p>" +
        "<button class='event-trigger'>Click Me!</button>";
    document.querySelector("#new-div-section").appendChild(newDiv);
}
// add the click handler to the button
createButton.addEventListener('click', createDiv);

// THIS CODE WILL NOT WORK
const eventButtons = document.querySelectorAll(".event-trigger");
const buttonEvent = () => console.log('Clicked!');
eventButtons.forEach( button => button.addEventListener('click', buttonEvent));