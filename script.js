/* ================= DOM READY ================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ================= SLIDER ELEMENTS ================= */
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const heroSection = document.querySelector(".hero");

  let currentIndex = 0;
  let autoSlideInterval = null;

  /* ================= SAFETY CHECK ================= */
  if (!slides.length || !nextBtn || !prevBtn || !heroSection) {
    return;
  }

  /* ================= SHOW SLIDE ================= */
  function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  /* ================= NEXT / PREV ================= */
  function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  /* ================= AUTO SLIDE ================= */
  function startAutoSlide(){
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide(){
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  /* ================= HOVER PAUSE ================= */
  heroSection.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  heroSection.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  /* ================= INIT SLIDER ================= */
  showSlide(currentIndex);
  startAutoSlide();

  /* ================= READ MORE BUTTON ================= */
  const readMoreBtn = document.querySelector(".read-more-btn");

  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {

      readMoreBtn.style.transform = "scale(0.95)";
      setTimeout(() => {
        readMoreBtn.style.transform = "scale(1)";
      }, 150);

      alert("IRONPULSE GYM – More details coming soon");
    });
  }

});
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
