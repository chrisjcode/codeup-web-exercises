/*

Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
Four seconds after the page loads, use innerHTML to change the name in "profile-name".
Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.

Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.

*/

const runOnDelay = (func, timer) => {
    setTimeout(func, timer);
}

const changeProPic = () => {
    document.getElementById('profile-card').getElementsByTagName("img")[0].src = "../images/kakashi.jpeg"
};
const changeProName = () => {
    document.getElementById('profile-name').innerHTML = "Kakashi Hatake";
};

const changeProTextStyles = () => {
    document.getElementById("profile-desc").classList.add('new-description');
};

const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(0, 6)

const toggleColorClass = () => {
    setInterval(() => {
        document.getElementById('profile-card').className = "";
        document.getElementById('profile-card').classList.add(`${colorArray[Math.floor(Math.random() * 7)]}`);
    }, 2000)
};

runOnDelay(changeProPic, 2000);
runOnDelay(changeProName, 4000);
runOnDelay(changeProTextStyles, 6000);

