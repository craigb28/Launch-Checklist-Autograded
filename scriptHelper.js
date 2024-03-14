// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // document = this.document;
  list = document.getElementById("faultyItems");
  pilot = document.querySelector("input[name=pilotName]").value;
  copilot = document.querySelector("input[name=copilotName]").value;
  fuelLevel = document.querySelector("input[name=fuelLevel]").value;
  cargoLevel = document.querySelector("input[name=cargoMass]").value;

  if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    alert("All fields are required!");
  } else {
    if (
      validateInput(pilot) === "Is a Number" ||
      validateInput(copilot) === "Is a Number" 
    ) {
      alert("Poilot and copilot names are required.");
    }
    if (
      validateInput(fuelLevel) === "Not a Number" ||
      validateInput(cargoLevel) === "Not a Number" 
    ) {
      alert("Fuel level and cargo level must be numbers.");
    }
  }
  document.getElementById("pilotStatus").innerHTML = `Pilot "${pilot}" Ready`;
  document.getElementById(
    "copilotStatus"
  ).innerHTML = `Co-pilot "${copilot}" Ready`;
  if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style = "color: red";
  }
  if (cargoLevel > 10000 ){
    list.style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
  }
  if (fuelLevel >= 10000 && cargoLevel <= 10000){
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
    document.getElementById("launchStatus").style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
