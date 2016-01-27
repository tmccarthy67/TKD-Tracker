var ref = new Firebase("https://sizzling-torch-5132.firebaseio.com/");
var refTKD = ref.child('TKD');
var refArtists = refTKD.child('artistID');
var refBelts = refTKD.child('belt ranks');
var TKDArtistList = [];
var TKDList = [];
// var BeltList;
var allArtists = [];
var artistID = [];
var artistIDList = [];
var artist = [];
var intArtistId;
var newArtistID = {};

// console.log(refArtists);

function hideAll () {
	$("#OneStep1").hide();
	$("#OneStep2").hide();
	$("#OneStep3").hide();
	$("#OneStep4").hide();
	$("#OneStep5").hide();
	$("#OneStep6").hide();
	$("#OneStep7").hide();
	$("#OneStep8").hide();
	$("#OneStep9").hide();
	$("#OneStep10").hide();
	$("#OneStep11").hide();
	$("#OneStep12").hide();
	$("#OneStep13").hide();
	$("#OneStep14").hide();
	$("#15Step").hide();
}

hideAll();

function toggleIt (id) {
	var idStatus1 = $(id);
	var idStatus2 = idStatus1[0];
	var idStatus = idStatus2.style.display;

	if (idStatus == "none") {
		hideAll();
		$(id).toggle();
	};
	if (idStatus == "block") {
		$(id).toggle();
	};
};

// function getArtistIDs (TKDList) {

// };

// Attach an asynchronous callback to read the data at our posts reference
// refTKD.on("value", function(snapshot) {
// 	TKDList = snapshot.val();
// 	console.log(TKDList);
// 	console.log(TKDList.artistID);
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// function getBeltList () {
// 	refBelts.on("value", function(snapshot) {
// 		BeltList = snapshot.val();
// 		// document.write(BeltList[2] + "<br />");
// 		// console.log(BeltList[2]);
// 		// console.log(BeltList);
// 		return BeltList;
// 	}, function (errorObject) {
// 	  console.log("The read failed: " + errorObject.code);
// 	});
// };

function getArtistList(TKDList){
	artistList = TKDList.artistID;
	// console.log(artistList);
	generateArtistID(artistList);
};

// function createUser(user){
// 	this.name = user.name;
// 	this.level = user.level || "viewer";
// };

// function userFactory(){};

function checkUniqueID (artistID,artistList) {
	allArtists = Object.keys(artistList)
	for (var i = 0; i < allArtists.length; i++) {
		artistListCheck = Number(allArtists[i]);
		if (artistID === artistListCheck) {
			console.log("Not a unique ID")
			generateArtistID(artistList);
		} else {
			console.log("The new user ID is " + artistID);
			return;
		};
	};
};

function generateArtistID (artistList) {
	artistID = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
	checkUniqueID(artistID,artistList);
};
	// console.log(refArtists);

function addArtistNumber (artistID,artist) {
	// var newArtistData = [];
	// var newArtistDataID = [];

		refArtists.child(artistID).set({
		  "attendence": artist.attendence,
		  "belt": artist.belt,
		  "firstName": artist.firstName,
		  "lastName": artist.lastName,
		  'email': artist.email,
		  "readyBreaking": artist.readyBreaking,
		  "readyForPromotion": artist.readyForPromotion,
		  "readyForms": artist.readyForms,
		  "readyMemorization": artist.readyMemorization,
		  "readyOneSteps": artist.readyOneSteps,
		  "readyOther": artist.readyOther,
		  "readyTime": artist.readyTime
		});

// 	// Check browser support
// if (typeof(Storage) !== "undefined") {
//   //   Store
  // localStorage.setItem("artistID", artistID);
//   //   localStorage.setItem("firstName", inputs[0].value);
// 		// localStorage.setItem("lastName", inputs[1].value);
// 		// localStorage.setItem("belt", "white");
// 		// localStorage.setItem("email", inputs[2].value);
// 		// localStorage.setItem("readyForPromotion", false);
// 		// localStorage.setItem("readyForms", false);
// 		// localStorage.setItem("readyOneSteps", false);
// 		// localStorage.setItem("readyBreaking", false);
// 		// localStorage.setItem("readyMemorization", false);
// 		// localStorage.setItem("readyTime", false);
// 		// localStorage.setItem("readyOther", false);
// 		// localStorage.setItem("attendence", false);

//     // Retrieve
//     // document.getElementById("result").innerHTML = localStorage.getItem("thisArtist");
// } else {
    // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }

}

function createArtist(artistID, artist){
	// console.log(artistID);
	intArtistId = parseInt(artistID);
	// console.log(artist);
	//store new artist number
	addArtistNumber(artistID, artist);
	//add artist to number
}

// function updateArtist () {

// console.log(inputs);

	// artist = {
	// 	firstName: inputs[0].value,
	// 	lastName: inputs[1].value,
	// 	belt: "white",
	// 	email: inputs[2].value,
	// 	readyForPromotion: false,
	// 	readyForms: false,
	// 	readyOneSteps: false,
	// 	readyBreaking: false,
	// 	readyMemorization: false,
	// 	readyTime: false,
	// 	readyOther: false,
	// 	attendence: false
	// }
	// return artist;
// }

$(function() {
    console.log( "ready!" );

    if (TKDList = []) {
	refTKD.on("value", function(snapshot) {
		TKDList = snapshot.val();

		artistIDList = TKDList.artistID;
		// console.log(artistIDList);

		 // refArtists.update({
		 // 	888: {
		 // 		name: "Brad",
		 // 		belt: "pink"
		 // 	}
		 // });
		 // refArtists.update({
		 // 	615: {
		 // 		name: "Billy",
		 // 		belt: "white"
		 // 	}
		 // });
		 // refArtists.update({
		 // 	525: {
		 // 		name: "Bob",
		 // 		belt: "yellow"
		 // 	}
		 // });


		// getArtistList(TKDList);
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
    };
	    // console.log(TKDList);
    // generateArtistID();

			//MA generator
			// function createNewArtist(artist){
			// 	this.artistID = {
			// 	this.firstName = artist.firstName;
			// 	this.lastName = artist.lastName;
			// 	this.belt = artist.belt || "white";
			// 	this.readyForPromotion = artist.readyForPromotion || false;
			// 	this.readyForms = artist.readyForms || false;
			// 	this.readyOneSteps = artist.readyOneSteps || false;
			// 	this.readyBreaking = artist.readyBreaking || false;
			// 	this.readyMemorization = artist.readyMemorization || false;
			// 	this.readyTime = artist.readyTime || false;
			// 	this.readyOther = artist.readyOther || false;
			// 	this.attendanse = artist.attendance || false}
			// }

// function artistFactory(){};

			// artistFactory.prototype.makeArtist = function(user){
			// 	var artistClass = null;
			// 	// if
			// 	return new createArtist(user);
			// }

// var myArtistFactory = new artistFactory();

			// var troyMcCarthy = myArtistFactory.makeArtist({
			// 	firstName: "Troy",
			// 	lastName: "McCarthy",
			// 	belt: "1st Dan Black"
			// });

			// $("p").click(function() {
			// 	document.write(troyMcCarthy.firstName + " " + troyMcCarthy.lastName + " is a " + troyMcCarthy.belt + "<br />");
			// });
});


