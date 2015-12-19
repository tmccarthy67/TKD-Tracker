var ref = new Firebase("https://sizzling-torch-5132.firebaseio.com/");
var refTKD = ref.child('TKD');
var refArtists = refTKD.child('artistID');
var refBelts = refTKD.child('belt ranks');
var TKDArtistList = [];
var TKDList = [];
var BeltList;
var allArtists = [];
var artistID = [];
var artistIDList = [];
var artist = [];
var intArtistId;
var newArtistID = {};
var artistEntered;
var artistNumberEntered;
var artistData = [];
var currentCity;
var currentDate;
var artistAttendance = [];
var attendanceData = [];
var attendanceCounter = 0;

console.log(artistID);
if (artistID = []) {
	  $('#getArtistNumber').show();
    $('#verifyCurrentArtist').hide();
}

Object.values = function(object) {
  var values = [];
  for(var property in object) {
    values.push(object[property]);
  }
  return values;
}

function getArtistLocation () {
	// console.log("getArtistLocation");
	if(geo_position_js.init()){
		geo_position_js.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
	}
	else{
		console.log("Functionality not available");
	}

	function success_callback(p) {
		console.log("success_callback");
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
		return (artistAttendance);
	};

	function error_callback(p) {
		alert('error='+p.code);
	};

	function getTime () {
		// Display the month, day, and year
		currentDate = moment().format("MMMM DD YYYY")
		// console.log(currentDate);
		return currentDate;
	};

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
	};
};

function checkArtist(artistID, artistIDList) {
	artistData = artistIDList[artistID];
		// console.log(artistData);
		if (artistData === undefined) {
		alert("Please enter a valid ID Number");
		}	else if(artistData != []) {
	  $('#getArtistNumber').hide();
    $('#verifyCurrentArtist').show();
		return;
		};
};

function loadArtistByNumber (artistID, artistIDList) {

	checkArtist(artistID, artistIDList);

	artistData = artistIDList[artistID];

	// console.log(artistID);
	// console.log(artistData.firstName);
	// console.log(artistData.lastName);
	// console.log(artistData.belt);
	if (artistData != undefined) {
	document.getElementById("artistNumber").value = artistID;
	document.getElementById("artistName").value = artistData.firstName + " " + artistData.lastName;
	document.getElementById("artistBelt").value = artistData.belt;
	};

	// verify submit button
	$( "#verifyArtistSubmit" ).click(function( event ) {
	  event.preventDefault();
	  console.log("Verify Clicked");
	  //get location
	  getArtistLocation();
	  // console.log(artistID);
	  // console.log(artistData);
	  var newAttendance = artistData["attendence"];
	  // console.log(newAttendance);
	  console.log(artistAttendance);

	  // console.log(artistAttendance != []);

	  if (artistAttendance != []) {
	  	// check to see if attendance is unique
	  		var countArtist = artistData.attendances;
	  		console.log(countArtist);
	  		var countArtistAttendance = Object.keys(countArtist).length;
	  		// console.log(countArtistAttendance)
	  		// console.log(Object.keys(countArtist).length);
	  		// for (var i = 0; i < countArtistAttendance; i++) {
	  			var attendanceInstance = Object.values(countArtist);
	  			console.log(attendanceInstance);
	  			// if (attendanceInstance != []) {
	  				// console.log("testing");
				  		// refArtists.child(artistID).child("attendances").push(artistAttendance);
	  			// };
	  			// console.log(artistAttendance);
	  			// console.log(attendanceInstance);
	  			// console.log(typeof attendanceInstance[i]);
	  			// console.log(typeof artistAttendance);
	  			// console.log(attendanceInstance[i]);
	  			// console.log(attendanceInstance[i].attendDate);
	  			console.log(attendanceInstance[countArtistAttendance-1].attendPlace);
	  			// console.log(artistAttendance.attendDate);
	  			console.log(artistAttendance.attendPlace);
	  			// console.log(artistAttendance.attendPlace != attendanceInstance[countArtistAttendance-1].attendPlace);
	  			// console.log(String(artistAttendance.attendDate) != String(attendanceInstance[i].attendDate));
	  			// console.log(artistAttendance);
	  			// console.log(artistAttendance != attendanceInstance[i]);
	  			// console.log(i);
	  			// console.log(artistAttendance.attendPlace != attendanceInstance[i].attendPlace || String(artistAttendance.attendDate) != String(attendanceInstance[i].attendDate));
	  			if (artistAttendance.attendPlace != attendanceInstance[countArtistAttendance-1].attendPlace || String(artistAttendance.attendDate) != String(attendanceInstance[countArtistAttendance-1].attendDate)) {
	  				// console.log(artistAttendance);
	  				console.log("unique");
	  				// console.log(artistID);

	  				//update attend/date
			  		refArtists.child(artistID).child("attendances").push(artistAttendance);
	  				// return;
	  			} else {
	  				console.log("Already checked in");
			  		// return;
	  			};

	  		// };
		};
  return;
	});


}

function getCurrentArtist(artistIDList) {
	// Check browser support
	if (typeof(Storage) !== "undefined") {
		// Retrieve
		artistID = artistEntered;
		// console.log(artistID);
		// return(artistID);
			// console.log(artistID);
			loadArtistByNumber(artistID, artistIDList);
// console.log ()
	} else {
	    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	// console.log(artistIDList);
	// console.log(artistID);
	return;
}

function getUpdatedArtistList() {
    if (TKDList = []) {
    	// console.log(TKDList);
	refTKD.on("value", function(snapshot) {
		TKDList = snapshot.val();
		artistIDList = TKDList.artistID;
		// console.log(artistIDList);
		// return artistIDList;
  // console.log(artistIDList);
	getCurrentArtist(artistIDList);
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
    };
}

$(function() {
	console.log("get Artist Number");

	// Correct Artist submit button
	$( "#getArtistNumber" ).submit(function( event ) {
	  event.preventDefault();
	  console.log("Clicked");
	  // get Artist ID number
	  artistEntered = $('#ArtistNumber').val();
	    // console.log(artistEntered);

	// artist data
  getUpdatedArtistList();
	});

	// wrong Artist submit button
	$( "#wrongArtistSubmit" ).submit(function( event ) {
	  event.preventDefault();
	  console.log("Wrong Clicked");
	  // get Artist ID number
	  artistEntered = "";
	    // console.log(artistEntered);

	// artist data
  // getUpdatedArtistList();
	});

});

