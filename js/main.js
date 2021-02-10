var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// Раскрывает/закрывает список меню
function toggle() {
  let burgerBtn = document.querySelector(".nav-burger"),
    toggleBlock = document.querySelector(".nav-links");
    isTouch = ("ontouchstart" in window);

    if (isTouch) {
      burgerBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        e.target.click();
        console.log("click");
        toggleBlock.classList.toggle("is-toggle");
      }, false);
    } else {
      burgerBtn.addEventListener("click", () => {
        console.log("click");
        toggleBlock.classList.toggle("is-toggle");
      }, false);

    }
};
toggle();


