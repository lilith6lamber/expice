'use strict';

import { tns } from "tiny-slider/src/tiny-slider";

function initSlider(settings) {
    const sliderDefaults = {
        mode: 'gallery',
        items: 1,
        nav: false,
        loop: true,
    };
    let slider = tns({
        ...sliderDefaults,
        ...settings
    });
}

export default initSlider;


