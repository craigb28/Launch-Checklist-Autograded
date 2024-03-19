// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;

  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
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
