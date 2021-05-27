var phrase;

var modal = document.getElementById("myModal");
var modalText = document.getElementById("modalText");
var span = document.getElementsByClassName("close")[0];

function openModal(text) {
  phrase = 'Ops... ' + text + ' is not ready yet!';  
  modal.style.display = "block";
  modalText.innerHTML = "<span style='font-size:45px;'>&#128546;</span>" + phrase + ' Will arrive soon, i promise.';
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}