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