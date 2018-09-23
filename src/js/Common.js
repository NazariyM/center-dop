import objectFitImages from 'object-fit-images';
import { $body, detectIE } from './_helpers';

import './components/Header';
import './components/Popups';
import './components/Form';
import './sections/Contacts';
import './components/Sliders';
import './components/CTabs';
import './components/Grid';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    this.addClassIE();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }
}

export default new Common();
