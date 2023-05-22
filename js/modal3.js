
var modal3 = document.getElementById("Modal3");

var btn3 = document.getElementById("Btn3");

var span = document.getElementsByClassName("close-point-sobre")[0];
btn3.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}