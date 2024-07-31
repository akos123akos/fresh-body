// header + footer logo links + mobile nav

import { setupLogoLinks, hamburgerMenu } from "./index.js";


//seasons images animation

const seasonsImgWrappers = document.querySelectorAll('.seasons__img-wrapper');
const seasonsContainer = document.querySelector('.seasons');
const seasonImgTexts = document.querySelectorAll('.seasons__content');
const seasonImgTitles = document.querySelectorAll('.seasons__title');
const gridColumnTemplate = '1fr 1fr 1fr 1fr';

function handleHoverEnter(event) {
    const index = Array.from(seasonsImgWrappers).indexOf(event.currentTarget);

    const newGridColumnTemplate = gridColumnTemplate.split(' ');
    newGridColumnTemplate[index] = '8fr';
    seasonsContainer.style.gridTemplateColumns = newGridColumnTemplate.join(' ');

    seasonImgTexts[index].classList.add('show-content');
    seasonImgTitles[index].classList.add('hide-title');

    seasonImgTitles.forEach((title, i) => {
        if (i !== index) {
            title.querySelectorAll('span').forEach(span => {
                span.classList.add('block-display');
            });
        }
    });
}

function handleHoverLeave(event) {
    seasonsContainer.style.gridTemplateColumns = gridColumnTemplate;

    seasonImgTexts.forEach(text => {
        text.classList.remove('show-content');
    });

    seasonImgTitles.forEach(title => {
        title.classList.remove('hide-title');
        title.querySelectorAll('span').forEach(span => {
            span.classList.remove('block-display');
        });
    });
}

seasonsImgWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseover', handleHoverEnter);
    wrapper.addEventListener('mouseout', handleHoverLeave);
});
