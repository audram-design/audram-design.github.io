
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

/* newer add
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
   */

  document.querySelectorAll('.track-btn').forEach(button => {
    button.addEventListener('click', function () {
      gtag('event', 'cta_click', {
        button_name: this.dataset.name,
        location: this.dataset.location
      });
    });
  });


  gtag('event', 'cta_click', {
    button_name: 'Brett Letter',
    location: 'hero-experience'
  });

  gtag('event', 'cta_click', {
    button_name: 'Jay Letter',
    location: 'hero-experience'
  });

  gtag('event', 'cta_click', {
    button_name: 'View On Squire Website',
    location: 'squire'
  });

  