const correctPassword = "squid";

        function checkPassword() {
            
            const userPassword = document.getElementById("password").value;

            
            if (userPassword === correctPassword) {
                
                document.getElementById("content").style.display = "block";
                alert("Welcome!");
            } else {
                
                alert("นึกดีๆ เคยส่งให้ละซักทางนึง 55555");
            }
        }

    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}