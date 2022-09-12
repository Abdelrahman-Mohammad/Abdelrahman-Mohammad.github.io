// setText function
function setText(id, text) {
  var element = document.getElementById(id);
  element.innerText = text;
}

// getText function
function getText(id) {
  var element = document.getElementById(id);
  if (element.tagName == "SELECT") {
    return element.options[element.selectedIndex].value;
  }
  if (element.tagName == "INPUT") {
    return element.value;
  }
}

// showElement function
function showElement(id) {
  var element = document.getElementById(id);
  element.style.opacity = 1;
}

// hideElement function
function hideElement(id) {
  var element = document.getElementById(id);
  element.style.opacity = 0;
}

// Random number generator function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Round to the nearest hundredth function
function roundNumber(value) {
  return Math.round(100 * value) / 100;
}

// Fun Facts List
var funFactsList = [
  "Mercury is very hot, but not too hot for ice.",
  "Venus doesn't have any moons.",
  "Comets hit jupiter very frequently.",
  "Neptune has supersonic winds.",
  "Saturn has a hexagonal-shaped storm.",
  "Saturn has 82 moons.",
  "Venus and Mercury don't have moons.",
  "Mars can be seen with the naked eye from Earth without any telescopes.",
  "One of Neptune’s moons, called Triton, is the coldest object in the solar system.",
  "In 2033, Uranus will complete its third orbit around the Sun since its discovery.",
  "Uranus was the first planet that scientists discovered after the invention of the telescope.",
  "The day “Saturday” is named after planet Saturn.",
  "Saturn generates more heat than it receives from the Sun.",
  "A space journey from Earth to Jupiter takes around 13 months long.",
  "Mars has seasons like Earth, but they last longer than they do on Earth.",
  "There are pieces of Mars that have fallen on Earth.",
  "The Moon rises from the east and sets from the west, just like the Sun.",
  "A spacecraft takes about 3 days to travel from the Earth to the Moon.",
  "Earth’s moon is the fifth largest moon in the solar system.",
  "Sunlight takes about 8 minutes to travel from the Sun and reach Earth",
  "Mercury is the second densest planet in the solar system, after Earth",
];

// Inputs variables
var inputOrbits;
var inputPlanet;

// Calculate button click event
document.getElementById("calculate_button").addEventListener("click", function () {
  inputOrbits = getText("input_orbits");
  inputPlanet = getText("input_planet");
  if (inputOrbits <= 0) {
    setText("error", "The input value must be greater than 0.");
    showElement("error");
  }
  if (isNaN(inputOrbits)) {
    setText("error", "The input is not a number.");
    showElement("error");
  }
  if (!isNaN(inputOrbits) && inputOrbits > 0) {
    hideElement("error");
    setText("fun_fact_text", funFactsList[randomNumber(0, 21)]);
    calculator(inputOrbits, inputPlanet);
  }
});

// changeBackground function
function changeBackground(planet) {
  var element = document.getElementById("body");

  if (planet.toLocaleLowerCase().includes("mercury")) {
    element.style.backgroundImage = "url(./mercury_background.jpg)";
  }
  if (planet.toLocaleLowerCase().includes("venus")) {
    element.style.backgroundImage = "url(./venus_background.jpg)";
  }
  if (planet.toLocaleLowerCase().includes("earth")) {
    element.style.backgroundImage = "url(./earth_background.jpg)";
  }
  if (planet.toLocaleLowerCase().includes("mars")) {
    element.style.backgroundImage = "url(./mars_background.jpg)";
  }
  if (planet.toLocaleLowerCase().includes("jupiter")) {
    element.style.backgroundImage = "url(./jupiter_background.jpg)";
  }
  if (planet.toLocaleLowerCase().includes("saturn")) {
    element.style.backgroundImage = "url(./saturn_background.jpg)";
  }
  if (planet.toLocaleLowerCase().includes("uranus")) {
    element.style.backgroundImage = "url(./uranus_background.jpg)";
  }
  if (planet.toLocaleLowerCase().includes("neptune")) {
    element.style.backgroundImage = "url(./neptune_background.jpg)";
  }
}

// Dropdown menu change event
document.getElementById("input_planet").addEventListener("change", function () {
  inputOrbits = getText("input_orbits");
  inputPlanet = getText("input_planet");
  changeBackground(inputPlanet);
  if (!isNaN(inputOrbits) && inputOrbits > 0) {
    hideElement("error");
    setText("fun_fact_text", funFactsList[randomNumber(0, 21)]);
    calculator(inputOrbits, inputPlanet);
  }
});

// Convert/Calculate planets orbits function
function convertOrbit(planetOrbit, value) {
  var newOrbit = planetOrbit * value;
  return newOrbit;
}

// Planets' conversion functions
function toMercury(orbitsInput, conversionValue) {
  var newOrbits = convertOrbit(orbitsInput, conversionValue);
  newOrbits = roundNumber(newOrbits);
  setText("mercury_text", newOrbits + " year(s)");
}
function toVenus(orbitsInput, conversionValue) {
  var newOrbits = convertOrbit(orbitsInput, conversionValue);
  newOrbits = roundNumber(newOrbits);
  setText("venus_text", newOrbits + " year(s)");
}
function toEarth(orbitsInput, conversionValue) {
  var newOrbits = convertOrbit(orbitsInput, conversionValue);
  newOrbits = roundNumber(newOrbits);
  setText("earth_text", newOrbits + " year(s)");
}
function toMars(orbitsInput, conversionValue) {
  var newOrbits = convertOrbit(orbitsInput, conversionValue);
  newOrbits = roundNumber(newOrbits);
  setText("mars_text", newOrbits + " year(s)");
}
function toJupiter(orbitsInput, conversionValue) {
  var newOrbits = convertOrbit(orbitsInput, conversionValue);
  newOrbits = roundNumber(newOrbits);
  setText("jupiter_text", newOrbits + " year(s)");
}
function toSaturn(orbitsInput, conversionValue) {
  var newOrbits = convertOrbit(orbitsInput, conversionValue);
  newOrbits = roundNumber(newOrbits);
  setText("saturn_text", newOrbits + " year(s)");
}
function toUranus(orbitsInput, conversionValue) {
  var newOrbits = convertOrbit(orbitsInput, conversionValue);
  newOrbits = roundNumber(newOrbits);
  setText("uranus_text", newOrbits + " year(s)");
}
function toNeptune(orbitsInput, conversionValue) {
  var newOrbits = convertOrbit(orbitsInput, conversionValue);
  newOrbits = roundNumber(newOrbits);
  setText("neptune_text", newOrbits + " year(s)");
}

// Planets List
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Planets Conversion Rates Lists
// SOURCE: All the following rates can be found on NASA's Planetary Fact Sheet here:
// https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
var mercuryRates = [1, 2.552, 4.149, 7.801, 49.378, 121.992, 347.303, 679.253];
var venusRates = [0.392, 1, 1.626, 3.057, 19.35, 47.805, 136.098, 266.179];
var earthRates = [0.241, 0.615, 1, 1.88, 11.9, 29.4, 83.7, 163.7];
var marsRates = [0.128, 0.327, 0.532, 1, 6.33, 15.638, 44.521, 87.074];
var jupiterRates = [0.02, 0.052, 0.084, 0.158, 1, 2.471, 7.034, 13.756];
var saturnRates = [0.008, 0.021, 0.034, 0.064, 0.405, 1, 2.847, 5.568];
var uranusRates = [0.003, 0.007, 0.012, 0.022, 0.142, 0.351, 1, 1.956];
var neptuneRates = [0.001, 0.004, 0.006, 0.011, 0.073, 0.18, 0.511, 1];

//The Main Function
function calculator(orbits, planet) {
  if (planet == planets[0]) {
    toMercury(orbits, mercuryRates[0]);
    toVenus(orbits, mercuryRates[1]);
    toEarth(orbits, mercuryRates[2]);
    toMars(orbits, mercuryRates[3]);
    toJupiter(orbits, mercuryRates[4]);
    toSaturn(orbits, mercuryRates[5]);
    toUranus(orbits, mercuryRates[6]);
    toNeptune(orbits, mercuryRates[7]);
  }
  if (planet == planets[1]) {
    toMercury(orbits, venusRates[0]);
    toVenus(orbits, venusRates[1]);
    toEarth(orbits, venusRates[2]);
    toMars(orbits, venusRates[3]);
    toJupiter(orbits, venusRates[4]);
    toSaturn(orbits, venusRates[5]);
    toUranus(orbits, venusRates[6]);
    toNeptune(orbits, venusRates[7]);
  }
  if (planet == planets[2]) {
    toMercury(orbits, earthRates[0]);
    toVenus(orbits, earthRates[1]);
    toEarth(orbits, earthRates[2]);
    toMars(orbits, earthRates[3]);
    toJupiter(orbits, earthRates[4]);
    toSaturn(orbits, earthRates[5]);
    toUranus(orbits, earthRates[6]);
    toNeptune(orbits, earthRates[7]);
  }
  if (planet == planets[3]) {
    toMercury(orbits, marsRates[0]);
    toVenus(orbits, marsRates[1]);
    toEarth(orbits, marsRates[2]);
    toMars(orbits, marsRates[3]);
    toJupiter(orbits, marsRates[4]);
    toSaturn(orbits, marsRates[5]);
    toUranus(orbits, marsRates[6]);
    toNeptune(orbits, marsRates[7]);
  }
  if (planet == planets[4]) {
    toMercury(orbits, jupiterRates[0]);
    toVenus(orbits, jupiterRates[1]);
    toEarth(orbits, jupiterRates[2]);
    toMars(orbits, jupiterRates[3]);
    toJupiter(orbits, jupiterRates[4]);
    toSaturn(orbits, jupiterRates[5]);
    toUranus(orbits, jupiterRates[6]);
    toNeptune(orbits, jupiterRates[7]);
  }
  if (planet == planets[5]) {
    toMercury(orbits, saturnRates[0]);
    toVenus(orbits, saturnRates[1]);
    toEarth(orbits, saturnRates[2]);
    toMars(orbits, saturnRates[3]);
    toJupiter(orbits, saturnRates[4]);
    toSaturn(orbits, saturnRates[5]);
    toUranus(orbits, saturnRates[6]);
    toNeptune(orbits, saturnRates[7]);
  }
  if (planet == planets[6]) {
    toMercury(orbits, uranusRates[0]);
    toVenus(orbits, uranusRates[1]);
    toEarth(orbits, uranusRates[2]);
    toMars(orbits, uranusRates[3]);
    toJupiter(orbits, uranusRates[4]);
    toSaturn(orbits, uranusRates[5]);
    toUranus(orbits, uranusRates[6]);
    toNeptune(orbits, uranusRates[7]);
  }
  if (planet == planets[7]) {
    toMercury(orbits, neptuneRates[0]);
    toVenus(orbits, neptuneRates[1]);
    toEarth(orbits, neptuneRates[2]);
    toMars(orbits, neptuneRates[3]);
    toJupiter(orbits, neptuneRates[4]);
    toSaturn(orbits, neptuneRates[5]);
    toUranus(orbits, neptuneRates[6]);
    toNeptune(orbits, neptuneRates[7]);
  }
}
