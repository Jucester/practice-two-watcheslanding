// Slider 


const slides = document.querySelector(".sliders").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

prev.addEventListener("click", function() {
    prevSlide();
});

next.addEventListener("click", function() {
    nextSlide();
});


function prevSlide() {
    if (index === 0){
        index = slides.length-1;
    } else {
        index--;
    }
    changeSlide();
}


function nextSlide() {
    if (index === slides.length-1){
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i <slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoplay, 3000);
}

function autoplay(){
    nextSlide();
}

let timer = setInterval(autoplay, 3000);


// Scroll color

if(window.screen.width > 750) {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

      document.getElementById("navbar").style.background = "#262626";
   
    } else {

      document.getElementById("navbar").style.background = "transparent";
   
    }
  }

}

// Responsive menu 

const open = document.querySelector('.open');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

open.addEventListener('click', function() {
    responsiveMenu();
})

close.addEventListener('click', function() {
    responsiveMenu();
    
})

function responsiveMenu() {
    if (menu.style.right === "-100%") {
        menu.style.right = "0px"
        open.style.display = 'none'
        close.style.display = 'block'
    } else {
        menu.style.right = "-100%"
        close.style.display = 'none'
        open.style.display = "block"
    }
}


