import Animate from "./animation.mjs";

const mainSliderWrap = document.querySelector(".visual_cont");
const mainSliderBox = mainSliderWrap.querySelector(".visual_box");
const mainPrev = mainSliderWrap.querySelector(".swiper-button-prev");
const mainNext = mainSliderWrap.querySelector(".swiper-button-next");
let enableClick = true;

mainSliderBox.style.left = "-100%";

mainNext.addEventListener('click', e => {
    e.preventDefault();
    if(enableClick){
        enableClick = false;
        nextSlide()
    }
})

mainPrev.addEventListener('click', e => {
    e.preventDefault();
    if(enableClick){
        enableClick = false;
        prevSlide()
    }
})

function nextSlide(){
    new Animate(mainSliderBox, {
        prop: "left",
        value: `-200%`,
        duration: 800,
        callback: () => {
            mainSliderBox.style.left = "-100%";
            mainSliderBox.append(mainSliderBox.firstElementChild);
            enableClick = true;
        }
    })
  
}

const jobSliderWrap = document.querySelector(".jobs_container");
const jobBox = jobSliderWrap.querySelector(".jobs_area");
const jobLists = jobBox.querySelectorAll("li");
const jobPrev = jobSliderWrap.querySelector(".swiper-button-prev");
const jobNext = jobSliderWrap.querySelector(".swiper-button-next");

jobBox.style.left = 0;

jobNext.addEventListener('click', e => {
    e.preventDefault();
    if(enableClick){
        enableClick = false;
        jobNextSlide()
    }
})

// jobNext.addEventListener('click', e => {
//     e.preventDefault();
//     if(enableClick){
//         enableClick = false;
//         jobPrevSlide()
//     }
// })

function jobNextSlide(){
    new Animate(jobBox, {
        prop: "left",
        value: -700,
        duration: 500,
        callback: () => {
            jobBox.style.left = 0;
            jobBox.append(jobBox.firstElementChild);
            jobBox.lastElementChild.classList.remove("on");
            jobBox.firstElementChild.classList.add("on");
         
               
           
            enableClick = true;
        }
    })
  
}


// function jobPrevSlide(){
//     new Animate(jobBox, {
//         prop: "left",
//         value: 0,
//         duration: 800,
//         callback: () => {
//             mainSliderBox.style.left = -600;
//             mainSliderBox.prepend(mainSliderBox.lastElementChild);
//             enableClick = true;
//         }
//     })
// }



/* scroll effect */
window.addEventListener('scroll', e => {
    if ( Math.floor(window.scrollY) > 240 ){
        /* number of recruits employee variation */
        const counters = document.querySelectorAll('.value');
        const arr = [...counters]
        const speed = 200;

        let num = arr.map( counter => {
            return +counter.getAttribute('data-counter');
        })
        arr[0].setAttribute( 'data-counter', num[1] + num[2] + num[3] + num[4] );

        counters.forEach( counter => {
            const animate = () => {
                const value = +counter.getAttribute('data-counter');
                const data = +counter.innerText;
                const time = value / speed;
                if(data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 30);
                }else{
                    counter.innerText = value;
                }
            }
        animate();
        });
    }
})


/* recruits Up & Down */
const body = document.getElementsByTagName("body")[0];
const recruitBox = document.querySelector(".notice_box.recruit")
const btnArrow = recruitBox.querySelector(".arrow_isDown");
const recruits = document.querySelector(".recruit_content");

recruitBox.addEventListener('click', (e) => {
    e.preventDefault();
    if(btnArrow.classList.contains("arrow_isDown")){
        btnArrow.classList.remove("arrow_isDown");
        btnArrow.classList.add("arrow_isUp");
        recruits.style.height = "0";
    }else{
        btnArrow.classList.remove("arrow_isUp");
        btnArrow.classList.add("arrow_isDown");
        reHeight();
    }
})

const reHeight = function(){
    let innerWidth = window.innerWidth;
    if(innerWidth < "758"){
        recruits.style.height = "1380px";
    }else if (innerWidth < "1024") {
        recruits.style.height = "1365px";
    } else {
        recruits.style.height = "740px";
    }
}


/* rolling notice */
const notice = document.querySelector(".notice ul")

document.addEventListener('DOMContentLoaded', ()=>{
    window.setInterval(rolling, 2500);
})

function rolling(){
    let prev = notice.querySelector(".prev");
    let current = notice.querySelector(".current");
    let next = notice.querySelector(".next");
   
    prev.classList.remove("prev");
    current.classList.remove("current");
    next.classList.remove("next");

    current.classList.add("prev");
    next.classList.add("current");
    if( next.nextElementSibling == null ){
        notice.querySelector("li:first-child").classList.add("next");
    }else{
        next.nextElementSibling.classList.add('next');
    }
};


/* sns heart press */
const heart = document.querySelectorAll(".fa-heart");

for( let i = 0; i < heart.length; i ++){
    heart[i].addEventListener('click', (e)=>{
        e.target.classList.toggle("on")
    })
}






