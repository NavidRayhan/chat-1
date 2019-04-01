var input = document.getElementById("msgText");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button-addon2").click();
  }
});
