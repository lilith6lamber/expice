'use strict';

import LazyLoad from "vanilla-lazyload";
import AOS from 'aos';

import initLoader from './modules/loader';
import drawNav from './modules/nav';
import initSlider from './modules/slider';
import { validateSubcribition, preventSubmit } from './modules/forms';

initLoader(1000);

document.addEventListener('DOMContentLoaded', () => {

    drawNav();
    
    const lazyload = new LazyLoad();
    AOS.init();

    preventSubmit();

    initSlider({
        container: '.hero_slider',
        controlsContainer: '.hero_slider-controls',
        speed: 600,
        autoplay: true
    });

    document.querySelector('#bookingDate').valueAsDate = new Date();

    validateSubcribition('.footer_form', '.footer_form-field');

});