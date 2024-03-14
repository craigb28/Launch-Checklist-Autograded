// Write your JavaScript code here!
// const { formSubmission } = require("./scriptHelper.js");

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// import { formSubmission, validateInput } from "./scriptHelper";

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
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
      formSubmission();
      event.preventDefault();
    });
});
