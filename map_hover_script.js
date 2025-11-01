//this script controls when the user clicks on a state it will present state and power data
var stateName = document.getElementById("state-name");
var infoContainer = document.getElementById("info-container");
var stateText1 = document.getElementById("state-text1");
var stateText2 = document.getElementById("state-text2");
var states = document.getElementsByTagName("path");

//   when you hover over the state it will pull in the data
document.addEventListener("click", function (e) {
  if (e.target.tagName == "path") {
    // write a function to call the api and get in the data for the output (will need to make a data map to the states)
    var stateNameText = e.target.dataset.name;
    console.log(stateNameText);
    var infoText1 = e.target.dataset.text1;
    var infoText2 = e.target.dataset.text2;
    //   appends to the DOM
    stateName.innerHTML = stateNameText;
    stateText1.innerHTML = infoText1;
    stateText2.innerHTML = infoText2;
  }
});
