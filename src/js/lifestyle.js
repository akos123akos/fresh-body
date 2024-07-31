// header + footer logo links + mobile nav

import { setupLogoLinks, hamburgerMenu } from "./index.js";

//insta basic display API

async function getInstagramFeed() {
    try {
        const response = await fetch('/.netlify/functions/getInstagramFeed');
        const data = await response.json();

        data.data.forEach(post => {
            const regexp1 = /#maindish/;
            const regexp2 = /#dessert/;

            let instaTextDataFixed = '';
            if (post.caption) { 
                instaTextDataFixed = post.caption.replace(/\n/g, '<br>');
            }

            if (post.media_type !== 'VIDEO') {
                if (regexp1.test(post.caption)) {
                    const maindishesCont = document.querySelector('.maindishes__container');

                    const postCont = document.createElement('div');
                    postCont.classList.add('maindishes__post');

                    const postLink = document.createElement('a');
                    postLink.classList.add('maindishes__link');
                    postLink.href = post.permalink;
                    postLink.target = '_blank';

                    const postImage = document.createElement('img');
                    postImage.classList.add('maindishes__img');
                    postImage.src = post.media_url;
                    postImage.alt = post.caption;
                    postImage.loading = 'lazy';

                    const postText = document.createElement('p');
                    postText.classList.add('maindishes__text');
                    postText.innerHTML = instaTextDataFixed;

                    maindishesCont.appendChild(postCont);
                    postCont.appendChild(postLink);
                    postLink.appendChild(postImage);
                    postCont.appendChild(postText);
                }

                if (regexp2.test(post.caption)) {
                    const dessertsCont = document.querySelector('.desserts__container');

                    const postCont = document.createElement('div');
                    postCont.classList.add('desserts__post');

                    const postLink = document.createElement('a');
                    postLink.classList.add('desserts__link');
                    postLink.href = post.permalink;
                    postLink.target = '_blank';

                    const postImage = document.createElement('img');
                    postImage.classList.add('desserts__img');
                    postImage.src = post.media_url;
                    postImage.alt = post.caption;desserts:
                    postImage.loading = 'lazy';

                    const postText = document.createElement('p');
                    postText.classList.add('desserts__text');
                    postText.innerHTML = instaTextDataFixed;

                    dessertsCont.appendChild(postCont);
                    postCont.appendChild(postLink);
                    postLink.appendChild(postImage);
                    postCont.appendChild(postText);
                }
            }
        });
    } catch (error) {
        console.error(error);
    }
}

getInstagramFeed();


//buttons

document.addEventListener('DOMContentLoaded', () => {
    const maindishesBtn = document.querySelector('.maindishes__button');
    const dessertsBtn = document.querySelector('.desserts__button');
    const maindishesSection = document.querySelector('.maindishes');
    const dessertsSection = document.querySelector('.desserts');

    maindishesBtn.addEventListener('click', () => {
        maindishesSection.scrollIntoView({ behavior: 'smooth' });
    });

    dessertsBtn.addEventListener('click', () => {
        dessertsSection.scrollIntoView({ behavior: 'smooth' });
    });
});