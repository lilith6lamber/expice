'use strict';

import drawNotification from './notifications';

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function validateSubcribition(formSelector, fieldSelector) {
    const formElem = document.querySelector(formSelector);
    const inputsArr = document.querySelectorAll(fieldSelector);

    const success = {
        title: "Thank you!",
        html: `
            <p class="main">Now you're subscribed to the our newsletter.</p>
            <span class="highlight">P.S. We don't spam! :)<span>`,
        showCloseButton: true,
        customClass: {
            popup: 'subscribe_popup',
            title: 'subscribe_popup-title',
            htmlContainer: 'subscribe_popup-content',
            closeButton: 'subscribe_popup-close'
        }
    };

    formElem.addEventListener('submit', () => {
        for (let i = 0; i < inputsArr.length; i++) {
            const el = inputsArr[i];
            const value = el.value;
            if (el.classList.contains('required') && value === '') {
                el.classList.add('error');
            } else if (el.dataset.type === 'email' && !emailRegExp.test(value)) {
                el.classList.add('error');
            } else {
                el.classList.remove('error');
                el.value = '';
                drawNotification(success);
            }

            el.addEventListener('input', () => {
                el.classList.remove('error');
            });
        }
    });
}

export function preventSubmit() {
    const forms = document.querySelectorAll('form');
    const submitBtns = document.querySelectorAll('button[type=submit]');

    forms.forEach(el => {
        el.addEventListener('submit', e => {
            e.preventDefault();
        })
    });

    submitBtns.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
        })
    });
}
