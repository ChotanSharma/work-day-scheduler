// Displaying Current Time in the header section
var currentMoment = document.querySelector("#currentDay");
currentMoment.textContent = moment().format("dddd, MMMM Do YYYY");
var containerDiv = document.querySelector(".container");