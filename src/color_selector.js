//this script controls changing the color of the timezone of the map for each state. depending on timezone and like meridian(maximum height) and solar noon, it will change the color
//time calculations
var currentTime = new Date();
var adjustedTime = currentTime.getHours();
var eastern = adjustedTime;
var central = adjustedTime - 1;
var mountain = adjustedTime - 2;
var pacific = adjustedTime - 3;
var alaska = adjustedTime - 4;
var hawaii = adjustedTime - 6;

//hour arrays for defining times of day
var night = [1, 2, 3, 4, 5, 21, 22, 23, 24];
var dawn = [6];
var earlyMorning = [7, 8];
var midMorning = [9, 10];
var solarNoon = [11];
var noon = [12];
var meridianSun = [13];
var earlyAfternoon = [14];
var midAfternoon = [15];
var lateAfternoon = [16, 17];
var evening = [18, 19];
var dusk = [20];

//loops through the states = for each state check the time of the state and the timezone and then change the color
for (let i = 0; i < states.length; i++) {
  var state = states[i];
  var timeZone = state.dataset.zone;

  //check to assign the state time
  var stateTime = "";
  if (timeZone == "eastern") {
    stateTime = eastern;
  } else if (timeZone == "central") {
    stateTime = central;
  } else if (timeZone == "mountain") {
    stateTime = mountain;
  } else if (timeZone == "pacific") {
    stateTime = pacific;
  } else if (timeZone == "alaska") {
    stateTime = alaska;
  } else if (timeZone == "hawaii") {
    stateTime = hawaii;
  }

  // statement changes the color of the state depending on time of day/timezone
  if (night.includes(stateTime)) {
    //sets color to light gray
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #D3D3D3"
    );
  } else if (dawn.includes(stateTime)) {
    //sets color to pink
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #DB7093"
    );
  } else if (earlyMorning.includes(stateTime)) {
    //sets color to light pink
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #FFC0CB"
    );
    console.log("earlyMorning");
  } else if (midMorning.includes(stateTime)) {
    //sets color to light orange
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #FBBF77"
    );
  } else if (solarNoon.includes(stateTime)) {
    //sets color orange
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #FF8B28"
    );
  } else if (noon.includes(stateTime)) {
    //sets color to burnt orange
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #FF4500"
    );
  } else if (meridianSun.includes(stateTime)) {
    //sets color to red
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #FF0500"
    );
  } else if (earlyAfternoon.includes(stateTime)) {
    //sets color to light yellow
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #FFDE32"
    );
  } else if (midAfternoon.includes(stateTime)) {
    //sets color to light green
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #B3E6B5"
    );
  } else if (lateAfternoon.includes(stateTime)) {
    //sets color to light blue
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #ADD8E6"
    );
  } else if (evening.includes(stateTime)) {
    //sets color to light purple
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #B19CD9"
    );
  } else if (dusk.includes(stateTime)) {
    //sets color to dark purple
    var setColor = state.setAttribute(
      "style",
      "stroke-width: 0.97063118000000004; fill: #49326b"
    );
  }
}
