const correctPassword = "Mollusca";

        function checkPassword() {
            
            const userPassword = document.getElementById("password").value;

            
            if (userPassword === correctPassword) {
                
                document.getElementById("content").style.display = "block";
                alert("Welcome!");
            } else {
                
                alert(" hint:ไฟลัมหนึ่งของสัตว์ไม่มีกระดูกสันหลัง คือสัตว์ที่มีลำตัวนิ่ม ส่วนใหญ่มีเปลือกแข็งหุ้มอยู่ภายนอก(อักษรตัวแรกตัวใหญ่)");
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
