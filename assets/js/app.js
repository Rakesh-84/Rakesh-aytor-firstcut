
import { allCode } from "./pages.js";

















// New Arrival Slick Slider Start
  $(function() {
  
$('.new-arrival').slick({
  dots: true,
  arrows:true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<span class="prev-arrow"><i class="fa fa-arrow-left" ></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fa fa-arrow-right" ></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        // infinite: false,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});
				
  // New Arrival Slick Slider End
  // <======================Best Deal Countdown timer start===================>
    $(function() {
  
      $('.best-deal').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<span class="prev-arrow"><i class="fa fa-arrow-left" ></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fa fa-arrow-right" ></i></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              // infinite: false,
              arrows: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      
      });









  // Best Deal Countdown timer end

// latest News start
$(function() {
  
  $('.latestAll').slick({
    dots: false,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: false,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  });
  // countdown timer
  const countdown = () => {
const countDate = new Date ('September 25, 2024 23:59:59').getTime();
const now = new Date ().getTime();

const gap = countDate - now;

const second = 1000;
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

const textDay = Math.floor(gap/day);
const textHour = Math.floor(gap % day / hour );
const textMinute = Math.floor(gap % hour / minute );
const textSecond = Math.floor(gap % minute / second );

document.querySelector('.day').innerText = textDay;
document.querySelector('.hour').innerText = textHour;
document.querySelector('.minute').innerText = textMinute;
document.querySelector('.second').innerText = textSecond;
  };
setInterval(countdown, 1000);












