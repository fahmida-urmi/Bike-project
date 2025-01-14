
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{

   
    loginForm.classList.remove("active");
    navBar.classList.remove('active');
    searchForm.classList.toggle('active');
  
}




let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{

    navBar.classList.remove('active');
    searchForm.classList.remove("active");
    loginForm.classList.toggle('active');
  
}





let navBar = document.querySelector('nav');
document.querySelector('#menu-btn').onclick = () =>{

    searchForm.classList.remove("active");
    loginForm.classList.remove('active');
    navBar.classList.toggle('active');
}



window.onscroll = () =>{
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.remove('active');
}



var swiper = new Swiper(".upcoming-slider", {
    
    spaceBetween: 30,
    loop:true,
    speed:2000,
    autoplay:{
      delay:5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
       
      },
      778: {
        slidesPerView: 1,
       
      },
      992: {
        slidesPerView: 1,
       
      },
      1200: {
        slidesPerView: 1,
        
      },
    },
  });






  var swiper = new Swiper(".choise-slider_1", {
    
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
      delay:4000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
       
      },
      778: {
        slidesPerView: 2,
       
      },
      992: {
        slidesPerView: 2,
       
      },
      1200: {
        slidesPerView: 3,
        
      },
    },
  });



  var swiper = new Swiper(".choise-slider_2", {
    
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
      delay:6000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
       
      },
      778: {
        slidesPerView: 2,
       
      },
      992: {
        slidesPerView: 2,
       
      },
      1200: {
        slidesPerView: 3,
        
      },
    },
  });

  
  anime({
    targets: '.any_image',
    translateX: 10,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  });







