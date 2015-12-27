var currentCity;
var currentDate;
var artistAttendance = [];

if(geo_position_js.init()){
		geo_position_js.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
	}
	else{
		console.log("Functionality not available");
	}

function success_callback(p) {
	// console.log('lat='+p.coords.latitude.toFixed(2)+';lon='+p.coords.longitude.toFixed(2));
	var latitude = p.coords.latitude.toFixed(2);
	var longitude = p.coords.longitude.toFixed(2);
	//check location
	checkLocation(latitude, longitude);
	console.log(currentCity);
	//get time
	getTime();
	console.log(currentDate);
	artistAttendance = {
	attendDate: currentDate,
	attendPlace: currentCity
	};
	console.log(artistAttendance);
	// console.log(artist);
}

function error_callback(p) {
	alert('error='+p.code);
}

function getTime () {
	// Display the month, day, and year
	currentDate = moment().format("MMMM DD YYYY")
	// console.log(currentDate);
	return currentDate;
}

function checkLocation(latitude, longitude) {
	// ainsworthIA = {41.2903, -91.5542};
	// columbusJunctionIA = {41.2783, -91.3625};
	// lat=41.29;lon=-91.55
	// console.log("longitude " + longitude);
	// console.log("latitude " + latitude);
	if (latitude > 41.28 && latitude < 41.30 && longitude > -91.56 && longitude < -91.54) {
		currentCity = "Ainsworth";
		// console.log(currentCity);
		return currentCity;
	};
	if (latitude > 41.26 && latitude < 41.38 && longitude > -91.37 && longitude < -91.35) {
		currentCity = "Columbus Junction";
		// console.log(currentCity);
		return currentCity;
	};
}
