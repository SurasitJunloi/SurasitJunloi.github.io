const correctPassword = "Mollusca";

        function checkPassword() {
            
            const userPassword = document.getElementById("password").value;

            
            if (userPassword === correctPassword) {
                
                document.getElementById("content").style.display = "block";
                alert("Welcome!");
            } else {
                
                alert(" hint:ไฟลัม ของสัตว์ทะเลที่ไม่มีกระดูกสันหลัง ที่มีขนาดใหญ่ เคลื่อนที่ได้รวดเร็ว และว่องไว มีหนวดรอบปาก 4-5 คู่ บนหนวดมีปุ่มดูดเรียงเป็นแถว มีหน้าที่จับเหยื่อป้อนเข้าปาก(อักษรตัวแรกตัวใหญ่)");
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