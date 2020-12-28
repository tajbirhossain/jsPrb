window.addEventListener('scroll', ()=> {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

/*function toggleMenu() {
  var toggleMenu = document.querySelector('.menuToggle');
  toggleMenu.classList.toggle('active');
  var x = document.getElementById("menu-icon");
  if (x.clssName === "fas fa-stream") {
    x.className = "fas fa-times";
  } else {
    x.className = "fas fa-stream";
  }
}*/

function toggleMenu() {
  /*var toggleMenu = document.querySelector('.menuToggle');
  toggleMenu.classList.toggle('active');*/
  var menuIcon = document.getElementById("menu-icon");
  var navigation = document.getElementsByClassName('navigation')[0]
  if (menuIcon.className === "fas fa-bars") {
    menuIcon.className = "fas fa-times";
  } else {
    menuIcon.className = "fas fa-bars";
  }
  navigation.classList.toggle('active')
}
