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