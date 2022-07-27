import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, EffectCards  } from 'swiper';
SwiperCore.use([EffectCards]);
@Component({
  selector: 'app-enterprice-screenshots',
  templateUrl: './enterprice-screenshots.component.html',
  styleUrls: ['./enterprice-screenshots.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class enterpriceScreenshotsComponent implements OnInit {

public index: any;

  constructor() { }

  ngOnInit() {  }

  public config: SwiperOptions = {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        keyboard: true,
        mousewheel: false,
        preventClicks: false,
        preventClicksPropagation: false,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.43,
            slideShadows: false
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
                spaceBetween: -60
            },
            991: {
                slidesPerView: 4
            },
            767: {
                slidesPerView: 3
            },
            575: {
                slidesPerView: 2
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination'
        }
  };

  public slides = [
    { img: 'assets/images/app_landing1/screen-shot/1.png'},
    { img: 'assets/images/app_landing1/screen-shot/2.png'},
    { img: 'assets/images/app_landing1/screen-shot/3.png'},
    { img: 'assets/images/app_landing1/screen-shot/4.png'},
  ]
}
