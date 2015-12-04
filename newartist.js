console.log("New User");

$(function() {
//get inform
var newArtistForm = document.getElementById("newArtistForm");

var items = newArtistForm.querySelectorAll("li");
var inputs = newArtistForm.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  // input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  // this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}

//MA generator
function createNewArtist(){

console.log(inputs);

	artist = {
		firstName: inputs[0].value,
		lastName: inputs[1].value,
		email: inputs[2].value,
		belt: "white",
		readyForPromotion: false,
		readyForms: false,
		readyOneSteps: false,
		readyBreaking: false,
		readyMemorization: false,
		readyTime: false,
		readyOther: false,
		attendence: false
	}

	return artist;
}


$("#createSubmitButton").click(function(){
	createNewArtist();
	generateArtistID(artistIDList);
	createArtist(artistID,artist);
	window.open("updateartist.html","_self")
	updateArtist(artistID, artist);

});

});
