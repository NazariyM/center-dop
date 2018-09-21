import Isotope from 'isotope-layout';

class Grid {
  constructor() {
    this.grid = document.querySelector('.grid');

    if (!this.grid) return;

    this.init();
  }

  init() {
    this.initGrid();
  }

  initGrid() {
    this.sizer = this.grid.querySelector('.grid__sizer');

    const iso = new Isotope(this.grid, {
      itemSelector: '.grid__item',
      transitionDuration: 0,
      masonry: {
        columnWidth: this.sizer,
        // horizontalOrder: true
      }
    });
  }
}

export default new Grid();
