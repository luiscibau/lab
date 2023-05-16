// document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

// function mostrar_menu(){

//     document.querySelector(".menu").classList.toggle("mostrar_menu");
// }
/****************************** */

///data para el carousel ////

/****************************** */


document.addEventListener("DOMContentLoaded", () => {
    const carousel0 = document.querySelector(".carousel0");
    const slides = Array.from(carousel0.children);
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
  
    function moveToSlide(carousel0, currentSlide, targetSlide) {
      carousel0.style.transform = `translateX(-${targetSlide.offsetLeft}px)`;
      currentSlide.classList.remove("active");
      targetSlide.classList.add("active");
    }
  
    // Move to next slide
    function nextSlide() {
      const currentSlide = slides[currentIndex];
      currentIndex = (currentIndex + 1) % slides.length;
      const targetSlide = slides[currentIndex];
      moveToSlide(carousel0, currentSlide, targetSlide);
    }
  
    // Move to previous slide
    function prevSlide() {
      const currentSlide = slides[currentIndex];
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      const targetSlide = slides[currentIndex];
      moveToSlide(carousel0, currentSlide, targetSlide);
    }
  
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    setInterval(nextSlide, 5000); // Cambiar de slide cada 5 segundos
  });