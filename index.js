/* older function
function toggleMenu(){
    var links = document.getElementById("links");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
  
  function resized() {
  
    var links = document.getElementById("links");

    if (window.innerWith >= 600) {
      links.style.display = "block";
    } else {
      links.style.display = "none";
    }
  }
 */

  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.getElementById('menu-icon');
  
    navLinks.classList.toggle('show');
  
    if (navLinks.classList.contains('show')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times'); // or 'fa-xmark'
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  }