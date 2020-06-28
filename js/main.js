var food = 50;
var water = 65;
var oxygen = 80;
var speedCurrent = 16000;
var speedMax = 24000;
var distance = 225000000;
var distanceCurrent = 175340070;
var distanceCurrentPercentage = distanceCurrent / distance * 100;

function getRotationFromSpeed(currentSpeed){
	return (currentSpeed / 96) - 125 + "deg";
}

setInterval(function() {
	food = Math.floor(Math.random() * 101); 
	water = Math.floor(Math.random() * 101); 
	oxygen = Math.floor(Math.random() * 101); 
	speedCurrent = Math.floor(Math.random() * speedMax); 

	updateValues();
}, 500);

setInterval(function() {
	distanceCurrent += 1;
	distanceCurrentPercentage = distanceCurrent / distance * 100;
	document.querySelector(".distance-progress").style.width = distanceCurrentPercentage + "%";
	document.querySelector(".current-distance").innerText = distanceCurrent + " km";
}, 150);


function updateValues() {
	document.querySelector(".progress-food").style.width = food + "%";
	document.querySelector(".progress-water").style.width = water + "%";
	document.querySelector(".progress-oxygen").style.width = oxygen + "%";
	document.querySelector(".pointer").style.transform = "rotate(" + getRotationFromSpeed(speedCurrent) + ")";
}