const stickHeader = document.getElementById("header--sticky");
const whatIsOffset = stickHeader.offsetTop;

function stickyNavigation() { 
  console.log('whatIsOffset = ' + whatIsOffset);
  console.log('scrollY = ' + window.scrollY);
}

window.addEventListener('scroll', stickyNavigation);



