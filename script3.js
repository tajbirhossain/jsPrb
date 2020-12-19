window.addEventListener('scroll', ()=> {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
function toggleMenu(){
  var toggleMenu = document.querySelector('.menuToggle');
  toggleMenu.classList.toggle('active');
  var activate = '<i class="fas fa-times"></i>';
  document.getElementsByClassName('active')[0].innerHTML = activate;
}
