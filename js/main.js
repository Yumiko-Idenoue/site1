
// ヘッダー

let pos = 100;
window.addEventListener('scroll',()=>{
  const headerEl = document.getElementById('header')
  if(window.pageYOffset > pos){
    headerEl.classList.remove('hidden');
    
  } else {
    headerEl.classList.add('hidden');
  }
});

// ヘッダーここまで

// ヒーロースライダー

const pic_src = ["image/flower3.jpg","image/flower2.jpg","image/flower1.jpg","image/flower4.jpg"];

  let num = -1;

  function slideshow_timer() {
    if(num===3){
      num = 0;
    } else {
      num++;
    }

    document.getElementById("mypic").src = pic_src[num]
  }

  
  setInterval(slideshow_timer,2000);


// ヒーロースライダーここまで

// ハンバーガーメニュー
const open = document.getElementById('open');
const hide = document.getElementById('hide');
const menu = document.querySelector('.hamburger-menu');


open.addEventListener('click',() => {
  menu.classList.add('show');
  
});

hide.addEventListener('click',() => {
  menu.classList.remove('show');
  
});

// ハンバーガーメニューここまで

// service-item

const boxes = document.querySelectorAll('.service-box');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver(doWhenIntersect, options);
console.log(boxes)
  boxes.forEach(box=>{
    observer.observe(box);
  });

function doWhenIntersect(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
      });
}

function activateIndex (){
      boxes.forEach(box=>{
       // box.classList.add('show');
        box.style.opacity = '1';
      })
}

// service-itemここまで



// big-works-slides

var mySwiper = new Swiper ('.swiper-container', {
  
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
    clickable:true
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 






});


// big-works-slidesここまで


const slide = document.getElementById('slide');
const finger = document.getElementById('finger')
  // console.log(slide);
  // console.log(finger);

  const options1 = {
  root: null, 
  rootMargin: "0px", 
  threshold: 0.1
};

const observer1 = new IntersectionObserver(handleIntersect, options1);

  observer1.observe(slide);

  function handleIntersect (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateIndex1(entry.target);
    }
  });
}

function activateIndex1(element) {
  finger.classList.add('showFinger')
  
}

 





