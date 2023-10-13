function clearResponse(){
    document.getElementById('ageMessage').innerText = '';
}

function askAge(){
    let userInput = prompt('How old are you?');
    document.getElementById('ageMessage').innerText = `Oh ${userInput}, You're getting up there!`;
}

