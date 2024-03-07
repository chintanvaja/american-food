/* Toggle JS*/

var nav = document.getElementById('navlist');
var tog = document.getElementById('toggle-nav');
	
		function toggleNav () {       
	
			if ( nav.style.display === "" ){
                nav.style.display = "inline-block";
                tog.style.display = "none";
            }
			else{
			    nav.style.display = "";
            }
		}
        function toggleNav1 () {       
	
			if ( nav.style.display === "inline-block" ){
                nav.style.display = "";
                tog.style.display = "inline-block";
            }
			else{
			    nav.style.display = "";
            }
		}

		function windowResizeHandler () {
			if ( screen.width > 768 )
			nav.style.display = "";
		}
	
		window.addEventListener("resize", windowResizeHandler);

/* SlideShow JS */

let slideIndex = 1;
showSlides(slideIndex);

function currentDiv(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("event_slide");
  let dots = document.getElementsByClassName("event_btn1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}