// Write your helper functions here!

// require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  document.getElementById(
    "missionTarget"
  ).innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src=${imageUrl} />`;
}

function validateInput(testInput) {
  // testInput is text/string of the input (pilot, copilot, etc.)
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}
// document, list, pilot, copilot, fuelLevel, cargoLevel

function formSubmission() {
  const list = document.getElementById("faultyItems");
  const pilotName = document.querySelector("input[name=pilotName]").value;
  const copilotName = document.querySelector("input[name=copilotName]").value;
  const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
  const cargoLevel = document.querySelector("input[name=cargoMass]").value;

  const pilotStatusElement = document.getElementById("pilotStatus");
  const copilotStatusElement = document.getElementById("copilotStatus");
  const fuelStatusElement = document.getElementById("fuelStatus");
  const cargoStatusElement = document.getElementById("cargoStatus");
  const launchStatusElement = document.getElementById("launchStatus");

  if (
    pilotName === "" ||
    copilotName === "" ||
    fuelLevel === "" ||
    cargoLevel === ""
  ) {
    window.alert("All fields are required!");
    return;
  }
  if (
    validateInput(pilotName) !== "Not a Number" ||
    validateInput(copilotName) !== "Not a Number" ||
    validateInput(fuelLevel) !== "Is a Number" ||
    validateInput(cargoLevel) !== "Is a Number"
  ) {
    window.alert(
      "Pilot and copilot names must be words. Fuel level and cargo level must be numbers."
    );
    return;
  }
  pilotStatusElement.innerHTML = `Pilot "${pilotName}" Ready`;
  copilotStatusElement.innerHTML = `Co-pilot "${copilotName}" Ready`;
  if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatusElement.innerHTML = "Fuel level too low for launch";
    launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusElement.style = "color: red";
  }
  if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    cargoStatusElement.innerHTML = "Cargo mass too heavy for launch";
    launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusElement.style.color = "red";
  }
  if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    launchStatusElement.innerHTML = "Shuttle is ready for launch.";
    launchStatusElement.style.color = "green";
    list.style.visibility = "hidden";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let planet = planets[Math.floor(Math.random() * planets.length)];
  return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
