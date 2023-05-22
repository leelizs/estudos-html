
var modal2 = document.getElementById("Modal2");

var btn2 = document.getElementById("Btn2");

var span = document.getElementsByClassName("close-sobre")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}