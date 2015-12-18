console.log("Update artist");
var promoState;
var formsState;
var oneStepsState;
var breakState;
var memState;
var timeState;
var otherState;
var attendState;
var BeltList;
var beltState;

// var ref = new Firebase("https://sizzling-torch-5132.firebaseio.com/");
// var refTKD = ref.child('TKD');
// var refBelts = refTKD.child('belt ranks');
// var BeltList;

function getBeltList () {
	refBelts.on("value", function(snapshot) {
		BeltList = snapshot.val();
		// document.write(BeltList[2] + "<br />");
		// console.log(BeltList[2]);
		// console.log(BeltList);
		return BeltList;
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
};

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

function getCurrentArtist(artistIDList) {
	// Check browser support
	if (typeof(Storage) !== "undefined") {
		// Retrieve
		artistID = localStorage.getItem("artistID");
		// console.log(artistID);
		// return(artistID);
			// console.log(artistID);
			loadArtist(artistID, artistIDList);

	} else {
	    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	// console.log(artistIDList);
	// console.log(artistID);
}

function loadArtist (artistID, artistIDList) {

	var artistData = artistIDList[artistID];
	document.getElementById("IDArtistData").value = artistID;
	document.getElementById("firstNameData").value = artistData.firstName;
	document.getElementById("lastNameData").value = artistData.lastName;
	document.getElementById("emailData").value = artistData.email;
	document.getElementById("beltData").value = artistData.belt;
	beltState = artistData.belt;

	//Promo Buttons
	if (artistData.readyForPromotion === "Yes") {
		promoState = "Yes";
		$(promoBtnY).addClass('btn-info');
	}
	if (artistData.readyForPromotion === "No") {
		promoState = "No";
		$(promoBtnN).addClass('btn-info');
	}
		//Forms Buttons
	if (artistData.readyForms === "Yes") {
		formsState = "Yes";
		$(formsBtnY).addClass('btn-info');
	}
	if (artistData.readyForms === "No") {
		formsState = "No";
		$(formsBtnN).addClass('btn-info');
	}
	//One Step Buttons
	if (artistData.readyOneSteps === "Yes") {
		oneStepsState = "Yes";
		$(oneStepsBtnY).addClass('btn-info');
	}
	if (artistData.readyOneSteps === "No") {
		oneStepsState = "No";
		$(oneStepsBtnN).addClass('btn-info');
	}
	//Break Buttons
	if (artistData.readyBreaking === "Yes") {
		breakState = "Yes";
		$(breakBtnY).addClass('btn-info');
	}
	if (artistData.readyBreaking === "No") {
		breakState = "No";
		$(breakBtnN).addClass('btn-info');
	}
	//Memorization Buttons
	if (artistData.readyMemorization === "Yes") {
		memState = "Yes";
		$(memBtnY).addClass('btn-info');
	}
	if (artistData.readyMemorization === "No") {
		memState = "No";
		$(memBtnN).addClass('btn-info');
	}
	//Time Buttons
	if (artistData.readyTime === "Yes") {
		timeState = "Yes";
		$(timeBtnY).addClass('btn-info');
	}
	if (artistData.readyTime === "No") {
		timeState = "No";
		$(timeBtnN).addClass('btn-info');
	}
	//Other Buttons
	if (artistData.readyOther === "Yes") {
		otherState = "Yes";
		$(otherBtnY).addClass('btn-info');
	}
	if (artistData.readyOther === "No") {
		otherState = "No";
		$(otherBtnN).addClass('btn-info');
	}
	//Attend Buttons
	var countArtist = artistData.attendence;
	// get attendance counts
	var totalAttendances = Object.keys(countArtist).length;
	// console.log(Object.keys(countArtist).length)


	if (totalAttendances >= 6) {
		attendState = "Yes";
		$(attendBtnY).addClass('btn-info');
	}
	if (totalAttendances < 6) {
		attendState = "No";
		$(attendBtnN).addClass('btn-info');
	}

	//populate belt button
	getBeltList();
		for (var i = 0; i < BeltList.length; i++) {
			// console.log(BeltList[i]);
	// $(listOBelts).append('<button type="button" class="btn btn-default">' + BeltList[i] + '</button><br>');
	$(listOBelts).append( '<li><button type="button" class="btn-xs btn-default btn-info" id="beltChoice" value="' + BeltList[i] + '">' + BeltList[i] + '</button></li>');
	//<button type="button" class="btn btn-default">Left</button>
		};

 return;

}

$(function() {
	console.log("get inform");
//get inform
var artistFormUpdater = document.getElementById("updateArtistForm");

var updateItems = artistFormUpdater.querySelectorAll("li");
var updateInputs = artistFormUpdater.querySelectorAll("input");


	//artist data
  getUpdatedArtistList();


for (var i = 0; i < updateItems.length; i++) {
  updateItems[i].addEventListener("click", editItem);
  // updateInputs[i].addEventListener("blur", updateItem);
  updateInputs[i].addEventListener("keypress", itemKeypress);
}

$(promoBtnY).click(function() {
	promoState = "Yes";
	$(promoBtnN).removeClass('btn-info');
	updateArtist();
});

$(promoBtnN).click(function() {
	promoState = "No";
	$(promoBtnY).removeClass('btn-info');
	updateArtist();
});

$(formsBtnY).click(function() {
	formsState = "Yes";
	$(formsBtnN).removeClass('btn-info');
	updateArtist();
});

$(formsBtnN).click(function() {
	formsState = "No";
	$(formsBtnY).removeClass('btn-info');
	updateArtist();
});

$(oneStepsBtnY).click(function() {
	oneStepsState = "Yes";
	$(oneStepsBtnN).removeClass('btn-info');
	updateArtist();
});

$(oneStepsBtnN).click(function() {
	oneStepsState = "No";
	$(oneStepsBtnY).removeClass('btn-info');
	updateArtist();
});

$(breakBtnY).click(function() {
	breakState = "Yes";
	$(breakBtnN).removeClass('btn-info');
	updateArtist();
});

$(breakBtnN).click(function() {
	breakState = "No";
	$(breakBtnY).removeClass('btn-info');
	updateArtist();
});

$(memBtnY).click(function() {
	memState = "Yes";
	$(memBtnN).removeClass('btn-info');
	updateArtist();
});

$(memBtnN).click(function() {
	memState = "No";
	$(memBtnY).removeClass('btn-info');
	updateArtist();
});

$(timeBtnY).click(function() {
	timeState = "Yes";
	$(timeBtnN).removeClass('btn-info');
	updateArtist();
});

$(timeBtnN).click(function() {
	timeState = "No";
	$(timeBtnY).removeClass('btn-info');
	updateArtist();
});

$(otherBtnY).click(function() {
	otherState = "Yes";
	$(otherBtnN).removeClass('btn-info');
	updateArtist();
});

$(otherBtnN).click(function() {
	otherState = "No";
	$(otherBtnY).removeClass('btn-info');
	updateArtist();
});

$(attendBtnY).click(function() {
	attendState = "Yes";
	$(attendBtnN).removeClass('btn-info');
	updateArtist();
});

$(attendBtnN).click(function() {
	attendState = "No";
	$(attendBtnY).removeClass('btn-info');
	// updateArtist();
});

//get belt data
$("button").click(function() {
	// console.log("clicked");
		$('button').click(function(event) {
			// console.log("belt Choice");
	var checkThis = $(this)[0].parentNode;
		// console.log(checkThis);
		var checkThat = checkThis.childNodes[0].value;
		// console.log(checkThat);
		beltState = checkThat;
		updateArtist();
		});
});

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();

  // input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
  	console.log('Enter');
    updateItem.call(this);
    updateArtist();
  }
}

//MA updater
function updateArtist () {

// console.log(updateInputs);

	artist = {
		firstName: updateInputs[1].value,
		lastName: updateInputs[2].value,
		email: updateInputs[3].value,
		belt: beltState,
		readyForPromotion: promoState,
		readyForms: formsState,
		readyOneSteps: oneStepsState,
		readyBreaking: breakState,
		readyMemorization: memState,
		readyTime: timeState,
		readyOther: otherState,
		attendence: attendState,
		attendances: ""
	}

// console.log(artist);

		refArtists.child(artistID).update(artist);


	// return artist;
}

   $(updateSubmitButton).on('click', function () {
     updateArtist();
     console.log("Clicked");
   });

});
