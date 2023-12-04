import {greetings} from './greeting-logic.js';
import {randomizer} from './number-utils.js';

const getGreeting = () => {
    let name = document.getElementById('name').value;
    if (!name) {
        return;
    }
    document.getElementById('greetings').innerHTML = `${greetings[randomizer()]}, ${name}`;
}

document.getElementById('greet-user-button').addEventListener('click', getGreeting);
