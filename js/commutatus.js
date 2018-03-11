/**************************
Commutatus JS File
Author: Aravind Manimaran
***************************/

function resizeHeaderOnScroll() {
  const distanceHeaderY = window.pageYOffset || document.documentElement.scrollTop;
  shrinkOn = 40;
  siteTopHeader = document.getElementById('site');
  siteBodyNav = document.getElementById('siteBodyNav');
  siteBodyRight = document.getElementById('siteBodyRight');
  
  if (distanceHeaderY > shrinkOn) {
    siteTopHeader.classList.add("resizeHeader");
    siteBodyNav.classList.add("resizeHeader");
    siteBodyRight.classList.add("resizeHeader");
  } else {
    siteTopHeader.classList.remove("resizeHeader");
    siteBodyNav.classList.remove("resizeHeader");
    siteBodyRight.classList.remove("resizeHeader");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);