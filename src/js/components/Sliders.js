import 'slick-carousel';
import { svgIcon } from '../_helpers';

class Slider {
  constructor({ el= '.js-slider', showCount = 1, scrollCount = 1, ...opts } = {}) {
    this.$slider = $(el);
    this.showCount = showCount;
    this.scrollCount = scrollCount;
    this.responsive = opts.responsive;
    this.arrows = opts.arrows || true;
    this.infinite = opts.infinite || true;
    this.function = opts.function || false;
    this.dots = opts.dots || true;
    this.dotsClass = opts.dotsClass || 'slider-dots';
    this.appendArrows = opts.appendArrows;
    this.appendDots = opts.appendDots;
    this.transform = opts.transform || true;
    this.speed = opts.speed || 800;
    this.ease = opts.ease;

    const iconLeft = svgIcon('angle-left');
    const iconRight = svgIcon('angle-right');

    this.defaultOptions = {
      slidesToShow: this.showCount,
      slidesToScroll: this.scrollCount,
      infinite: this.infinite,
      speed: this.speed,
      useTransform: this.transform,
      adaptiveHeight: true,
      accessibility: false,
      swipe: true,
      arrows: this.arrows,
      prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
      nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
      dots: this.dots,
      dotsClass: this.dotsClass,
      appendArrows: this.appendArrows,
      appendDots: this.appendDots,
      rows: 0,
      responsive: this.responsive,
      cssEase: this.ease
    };

    if (this.$slider.length) this.init();
  }

  init() {
    this.initSlider();

    if (typeof this.function !== 'function') return;
    this.function();
  }

  initSlider() {
    this.$slider.slick($.extend({}, this.defaultOptions));
  }
}

export default new Slider();

const screenSld = new Slider({
  el: '.js-screen-slider',
  showCount: 1,
  scrollCount: 1,
  ease: 'cubic-bezier(0.74, 0.1, 0.32, 0.98)',
  transform: false,
  speed: 1000,
  dotsClass: 'screen__slider-dots slider-dots slider-dots_gray',
  appendArrows: '.screen__slider-controls',
  appendDots: '.screen__slider-controls'
});
