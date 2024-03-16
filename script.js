// Write your JavaScript code here!
// import {myFetch, pickPlanet, addDestinationInfo, formSubmission} from './scriptHelper.js'

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

  // Can't do a .then() off of a variable

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let pickedPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        pickedPlanet.name,
        pickedPlanet.diameter,
        pickedPlanet.star,
        pickedPlanet.distance,
        pickedPlanet.moons,
        pickedPlanet.image
      );
    });

  document
    .getElementById("launchForm")
    .addEventListener("submit", function (event) {
    
      list = document.getElementById("faultyItems");
      pilot = document.querySelector("input[name=pilotName]").value;
      copilot = document.querySelector("input[name=copilotName]").value;
      fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      cargoLevel = document.querySelector("input[name=cargoMass]").value;
      
      event.preventDefault();

      formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel);
  //  if (
  //       pilotName === "" ||
  //       copilotName === "" ||
  //       fuelLevel === "" ||
  //       cargoLevel === ""
  //     ) {
  //       alert("All fields are required!");
  //       return;
  //     }
  //     if (
  //       validateInput(pilotName) !== "Not a Number" ||
  //       validateInput(copilotName) !== "Not a Number" ||
  //       validateInput(fuelLevel) !== "Is a Number" ||
  //       validateInput(cargoLevel) !== "Is a Number"
  //     ) {
  //       alert(
  //         "Pilot and copilot names must be words. Fuel level and cargo level must be numbers."
  //       );
  //       return;
  //     }
    });
});
