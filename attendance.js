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

console.log(artistID);
if (artistID = []) {
	  $('#getArtistNumber').show();
    $('#verifyCurrentArtist').hide();
}

function checkArtist(artistID, artistIDList) {
	artistData = artistIDList[artistID];
		// console.log(artistData);
		if (artistData === undefined) {
		alert("Please enter a valid ID Number");
		}	else if(artistData != []) {
	  $('#getArtistNumber').hide();
    $('#verifyCurrentArtist').show();
		return;
		}
}

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
	  // event.preventDefault();
	  console.log("Verify Clicked");
	  //get location
  return;
	});

	// beltState = artistData.belt;
	//populate belt button
	// getBeltList();
	// 	for (var i = 0; i < BeltList.length; i++) {
	// 		// console.log(BeltList[i]);
	// // $(listOBelts).append('<button type="button" class="btn btn-default">' + BeltList[i] + '</button><br>');
	// $(listOBelts).append( '<li><button type="button" class="btn-xs btn-default btn-info" id="beltChoice" value="' + BeltList[i] + '">' + BeltList[i] + '</button></li>');
	// //<button type="button" class="btn btn-default">Left</button>
	// 	};

 // return;

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

	function getIDNumber (){
		console.log("get ID number");
	}

	// submit button
	$( "#getArtistNumber" ).submit(function( event ) {
	  event.preventDefault();
	  console.log("Clicked");
	  // get Artist ID number
	  artistEntered = $('#ArtistNumber').val();
	    // console.log(artistEntered);

	// artist data
  getUpdatedArtistList();

	});


});




//
//
//
// // var ref = new Firebase("https://sizzling-torch-5132.firebaseio.com/");
// // var refTKD = ref.child('TKD');
// // var refArtists = refTKD.child('artistID');
// // var refBelts = refTKD.child('belt ranks');
// // var TKDArtistList = [];
// // var TKDList = [];
// // var BeltList;
// // var allArtists = [];
// // var artistID = [];
// // var artistIDList = [];
// // var artist = [];
// // var intArtistId;
// // var newArtistID = {};
// var artistNumberEntered;

// $(function() {
// 	console.log("get inform");
// // get inform
// var getArtistNumber = document.getElementById("getArtistNumber");

// var updateNumberItems = getArtistNumber.querySelectorAll("li");
// var updateNumberInputs = getArtistNumber.querySelectorAll("input");


// 	//artist data
//   // getUpdatedArtistList();


// for (var i = 0; i < updateNumberItems.length; i++) {
//   updateNumberItems[i].addEventListener("click", editItem);
//   // updateInputs[i].addEventListener("blur", updateItem);
//   updateNumberInputs[i].addEventListener("keypress", itemKeypress);
// }

// // $(promoBtnY).click(function() {
// // 	promoState = "Yes";
// // 	$(promoBtnN).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(promoBtnN).click(function() {
// // 	promoState = "No";
// // 	$(promoBtnY).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(formsBtnY).click(function() {
// // 	formsState = "Yes";
// // 	$(formsBtnN).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(formsBtnN).click(function() {
// // 	formsState = "No";
// // 	$(formsBtnY).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(oneStepsBtnY).click(function() {
// // 	oneStepsState = "Yes";
// // 	$(oneStepsBtnN).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(oneStepsBtnN).click(function() {
// // 	oneStepsState = "No";
// // 	$(oneStepsBtnY).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(breakBtnY).click(function() {
// // 	breakState = "Yes";
// // 	$(breakBtnN).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(breakBtnN).click(function() {
// // 	breakState = "No";
// // 	$(breakBtnY).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(memBtnY).click(function() {
// // 	memState = "Yes";
// // 	$(memBtnN).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(memBtnN).click(function() {
// // 	memState = "No";
// // 	$(memBtnY).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(timeBtnY).click(function() {
// // 	timeState = "Yes";
// // 	$(timeBtnN).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(timeBtnN).click(function() {
// // 	timeState = "No";
// // 	$(timeBtnY).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(otherBtnY).click(function() {
// // 	otherState = "Yes";
// // 	$(otherBtnN).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(otherBtnN).click(function() {
// // 	otherState = "No";
// // 	$(otherBtnY).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(attendBtnY).click(function() {
// // 	attendState = "Yes";
// // 	$(attendBtnN).removeClass('btn-info');
// // 	updateArtist();
// // });

// // $(attendBtnN).click(function() {
// // 	attendState = "No";
// // 	$(attendBtnY).removeClass('btn-info');
// // 	updateArtist();
// // });

// //get belt data
// // $("button").click(function() {
// // 	// console.log("clicked");
// // 		$('button').click(function(event) {
// // 			// console.log("belt Choice");
// // 	var checkThis = $(this)[0].parentNode;
// // 		// console.log(checkThis);
// // 		var checkThat = checkThis.childNodes[0].value;
// // 		// console.log(checkThat);
// // 		beltState = checkThat;
// // 		updateArtist();
// // 		});
// // });

// function editItem() {
//   this.className = "edit";
//   var input = this.querySelector("input");
//   input.focus();

//   input.setSelectionRange(0, input.value.length);
// }

// function updateItem() {
//   this.previousElementSibling.innerHTML = this.value;
//   this.parentNode.className = "";
// }

// function itemKeypress(event) {
//   if (event.which === 13) {
//   	console.log('Enter');
//     // updateItem.call(this);
//     // updateArtist();
//   }
// }

// //MA updater
// // function updateArtist () {

// // console.log(updateInputs);

// 	// artist = {
// 	// 	firstName: updateInputs[1].value,
// 	// 	lastName: updateInputs[2].value,
// 	// 	email: updateInputs[3].value,
// 	// 	belt: beltState,
// 	// 	readyForPromotion: promoState,
// 	// 	readyForms: formsState,
// 	// 	readyOneSteps: oneStepsState,
// 	// 	readyBreaking: breakState,
// 	// 	readyMemorization: memState,
// 	// 	readyTime: timeState,
// 	// 	readyOther: otherState,
// 	// 	attendence: attendState
// 	// }

// // console.log(artist);

// 		// refArtists.child(artistID).set(artist);


// 	// return artist;
// // }

//    // $(updateSubmitButton).on('click', function () {
//    //   updateArtist();
//    //   console.log("Clicked");
//    // });

// $(artistIDSubmit).on('click', function () {
//  // updateArtist();
//  console.log("Artist Number Clicked");
//  // console.log($("#ArtistNumber").value)
//  // artistNumberEntered = $("ArtistNumber").value;
//  // console.log(artistNumberEntered);
// });

// });
