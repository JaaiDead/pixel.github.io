/* =============================================================================
  Open/Close Slide-Out Navigation Menu, Display Corresponding Icons
============================================================================= */

let openNav = document.getElementById('open');
let closeNav = document.getElementById('close');
let navScreen = document.getElementById('nav-screen');

// Click "Open Nav", remove class "Active", add class "Active" to "Close Nav"
openNav.addEventListener('click', function(){
  this.classList.remove('active');
  closeNav.classList.add('active');
  navScreen.classList.add('active');
});

// Click "Close Nav", remove class "Active", add class "Active" to "Open Nav"
closeNav.addEventListener('click', function(){
  this.classList.remove('active');
  navScreen.classList.remove('active');
  openNav.classList.add('active');
});
