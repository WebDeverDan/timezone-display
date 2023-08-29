//this script controls when the user clicks on a state it will present state and power data
var stateName = document.getElementById("state-name");
var infoContainer = document.getElementById("info-container");
var stateOutput = document.getElementById("state-output");
var statePlants = document.getElementById("state-plants");
var states = document.getElementsByTagName("path");

//   when you hover over the state it will pull in the data
document.addEventListener("click", function (e) {
  if (e.target.tagName == "path") {
    // write a function to call the api and get in the data for the output (will need to make a data map to the states)
    var stateNameText = e.target.dataset.name;
    console.log(stateNameText);
    var powerOutputText = "TEXT GOES HERE";
    var numberOfStationsText = "TEXT GOES HERE";
    //   appends to the DOM
    stateName.innerHTML = stateNameText;
    stateOutput.innerHTML = powerOutputText;
    statePlants.innerHTML = numberOfStationsText;
  }
});
