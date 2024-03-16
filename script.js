// Write your JavaScript code here!

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
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let pickedPlanet = pickPlanet(listedPlanets);
      console.log(pickedPlanet);
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

      if (
        pilot === "" ||
        copilot === "" ||
        fuelLevel === "" ||
        cargoLevel === ""
      ) {
        alert("All fields are required!");
        return;
      }
      if (
        validateInput(pilot) !== "Not a Number" ||
        validateInput(copilot) !== "Not a Number" ||
        validateInput(fuelLevel) !== "Is a Number" ||
        validateInput(cargoLevel) !== "Is a Number"
      ) {
        alert(
          "Pilot and copilot names must be words. Fuel level and cargo level must be numbers."
        );
        return;
      }

      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});
