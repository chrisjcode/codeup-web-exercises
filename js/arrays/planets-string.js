(function () {
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *A way to format on  web pages
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let webPlanetString = "";

    planetsArray.forEach((planet) => {
        webPlanetString += planet.concat(`<br>`);
    });

    console.log(webPlanetString);

    let undorderedPlanetList = `<ul>`;

    planetsArray.forEach((planet, index) => {
        let loopPlanetHtml = `<li>${planet}</li>`
        undorderedPlanetList += loopPlanetHtml;
        if (index === planetsArray.length - 1) {
            undorderedPlanetList = undorderedPlanetList.concat(`</ul>`);
        }
    });
    console.log(undorderedPlanetList);

})();