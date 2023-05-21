
var modal = document.getElementById("Modal2");

var btn = document.getElementById("Btn2");

var span = document.getElementsByClassName("close-sobre")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}