function fixNav() {
    console.log(sticky); // Verifica el valor de sticky
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
  }
  
    // Mostrar el botón al hacer scroll
    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topBtn").style.display = "block";
        } else {
            document.getElementById("topBtn").style.display = "none";
        }
    }
  
    function topFunction() {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    }
  
  
  
  
  