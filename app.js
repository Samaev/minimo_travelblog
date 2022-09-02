'use strict'

let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById('prev');
let next = document.getElementById('next');

next.addEventListener("click", () => {
  showSlides(slideIndex += 1);
  makeTimer();//Пересоздаем интервал если производится нажатие 
});

prev.addEventListener("click", () => {
  showSlides(slideIndex -= 1);
  makeTimer();//Пересоздаем интервал если производится нажатие 
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("myslide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (const slide of slides) {
        slide.style.display = "none";
    }
    console.log(slides.length);
    slides[slideIndex - 1].style.display = "flex";    
  }

 let timer = 0;

 makeTimer(); //Создаем интервал 
 function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    }, 3000);
  }
