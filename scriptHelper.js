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
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotStatusElement = document.getElementById("pilotStatus");
  const copilotStatusElement = document.getElementById("copilotStatus");
  const fuelStatusElement = document.getElementById("fuelStatus");
  const cargoStatusElement = document.getElementById("cargoStatus");
  const launchStatusElement = document.getElementById("launchStatus");

  // combine entries into array.  Map through array with function, returning the appropriate value, then use array "includes" to throw alert?

  pilotStatusElement.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatusElement.innerHTML = `Co-pilot ${copilot} is ready for launch`;

  if (fuelLevel >= 10000) {
    fuelStatusElement.innerHTML = "Fuel level high enough for launch";
    if (cargoLevel <= 10000) {
      list.style.visibility = "visible";
      launchStatusElement.innerHTML = "Shuttle is Ready for Launch";
      launchStatusElement.style.color = "green";
      cargoStatusElement.innerHTML = "Cargo mass low enough for launch";
    } else {
      list.style.visibility = "visible";
      launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
      launchStatusElement.style.color = "red";
      cargoStatusElement.innerHTML = "Cargo mass too heavy for launch";
    }
  } else {
    list.style.visibility = "visible";
    launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
    launchStatusElement.style.color = "red";
    fuelStatusElement.innerHTML = "Fuel level too low for launch";

    if (cargoLevel > 10000) {
      cargoStatusElement.innerHTML = "Cargo mass too heavy for launch";
    } else {
      cargoStatusElement.innerHTML = "Cargo mass low enough for launch";
    }
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
