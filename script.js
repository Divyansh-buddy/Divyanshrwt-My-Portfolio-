var menu = document.getElementById('menu');
var navbar = document.querySelector('.navbar');
var timeoutId;

navbar.style.display = "none";

menu.addEventListener('click', function() {
  if (navbar.style.display === "none") {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
    clearTimeout(timeoutId);
  }

  if (navbar.style.display === "flex") {
    timeoutId = setTimeout(function() {
      navbar.style.display = "none";
    }, 8500);
  }
});
