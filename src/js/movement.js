// header + footer logo links + mobile nav

import { setupLogoLinks, hamburgerMenu } from "./index.js";

//sports img events

const flowImg = document.querySelector('.flow-div')
const meditationImg = document.querySelector('.meditation-div')
const flowText = document.querySelector('.flow')
const meditationText = document.querySelector('.meditation')


flowImg.addEventListener('click', () => {
    flowText.classList.add('active')
    meditationText.classList.remove('active')
    flowImg.classList.remove('blurred')
    meditationImg.classList.add('blurred')
})

meditationImg.addEventListener('click', () => {
    meditationText.classList.add('active')
    flowText.classList.remove('active')
    meditationImg.classList.remove('blurred')
    flowImg.classList.add('blurred')
})