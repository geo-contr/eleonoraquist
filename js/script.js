document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper', {
        speed: 300,
        slidesPerView: 'auto',
        // slidesPerView: 6.25,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        parallax: true,
        simulateTouch: true,
        grabCursor: false
    });


    // // Alternative option დაუხვეწავი
    // var swiper = new Swiper('.swiper', {
    //     speed: 600,
    //     slidesPerView: 'auto',
    //     // slidesPerGroup: 1,
    //     spaceBetween: 20,
    //     centeredSlides: false,
    //     initialSlide: 0,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //     loop: true,
    //     simulateTouch: true,
    //     grabCursor: false,
    //     preventClicks: true,
    //     preventClicksPropagation: true,
    //     slidesOffsetBefore: 0,
    //     slidesOffsetAfter: 0,
    //     freeMode: false,
    //     slideToClickedSlide: false,
    //     updateOnWindowResize: true,
    //     on: {
    //         init: function () {
    //             console.log('Swiper initialized. Total slides:', this.slides.length);
    //             console.log('Slide widths:', Array.from(this.slides).map(slide => slide.offsetWidth));
    //             console.log('First slide position:', this.slides[0].getBoundingClientRect());
    //             console.log('Swiper wrapper translate:', this.translate);
    //             this.update();
    //             this.slideToLoop(0, 0); // Changed to slideToLoop for loop mode
    //         },
    //         slideChange: function () {
    //             console.log('Slide changed. Active index:', this.activeIndex, 'Translate:', this.translate);
    //         }
    //     }
    // });

    // const nextButton = document.querySelector('.swiper-button-next');
    // const prevButton = document.querySelector('.swiper-button-prev');
    
    // const nextButtonClone = nextButton.cloneNode(true);
    // nextButton.parentNode.replaceChild(nextButtonClone, nextButton);
    // const prevButtonClone = prevButton.cloneNode(true);
    // prevButton.parentNode.replaceChild(prevButtonClone, prevButton);
    
    // nextButtonClone.addEventListener('click', () => {
    //     console.log('Next button clicked at:', new Date().toISOString());
    //     swiper.slideTo(swiper.activeIndex + 1, 600);
    // });
    // prevButtonClone.addEventListener('click', () => {
    //     console.log('Prev button clicked at:', new Date().toISOString());
    //     swiper.slideTo(swiper.activeIndex - 1, 600);
    // });




    // Add custom click handler for the entire pagination container
    const paginationContainer = document.querySelector('.swiper-pagination');
    paginationContainer.addEventListener('click', (event) => {
        const bullets = Array.from(paginationContainer.querySelectorAll('.swiper-pagination-bullet'));
        const rect = paginationContainer.getBoundingClientRect();
        const offsetX = event.clientX - rect.left; // Mouse position relative to the container

        // Calculate which bullet was clicked based on the mouse position
        const bulletWidth = rect.width / bullets.length;
        const clickedBulletIndex = Math.floor(offsetX / bulletWidth);

        // Change the slide to the corresponding bullet index
        if (clickedBulletIndex >= 0 && clickedBulletIndex < bullets.length) {
            swiper.slideToLoop(clickedBulletIndex); // Use slideToLoop for pagination in loop mode
        }
    });
});






document.addEventListener('DOMContentLoaded', () => {
    const disableTriggers = document.querySelectorAll('.menu-item-57, .home__button');
    const enableTrigger = document.querySelector('.col__menu-icon');
    const target = document.querySelector('.pointer-none');

    disableTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            target.style.pointerEvents = 'all';
        });
    });

    enableTrigger.addEventListener('click', () => {
        target.style.pointerEvents = 'none';
    });
});


// var swiper = new Swiper('.swiper', {
//   speed: 300,
//   slidesPerView: 'auto', // Allow slides to size based on content
//   spaceBetween: 20, // Add spacing between slides
//   centeredSlides: false, // Disable centeredSlides to prevent jitter
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   loop: true,
//   loopedSlides: 21,
//   parallax: true,
//   simulateTouch: true,
//   grabCursor: false,
//   breakpoints: {
//     320: {
//       slidesPerView: 5,
//       spaceBetween: 20,
//     },
//     960: {
//       slidesPerView: 'auto',
//       spaceBetween: 20,
//     },
//   },
// });



// Menu croll (without burger scroll-disable)
// let lastScrollTop = 0;
// const header = document.querySelector('.header__wrap');

// window.addEventListener('scroll', () => {
//     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentScroll > lastScrollTop) {
//         // Scrolling down
//         header.style.transform = 'translateY(-100%)';
//         header.style.transition = 'transform 0.3s ease';
//     } else {
//         // Scrolling up
//         header.style.transform = 'translateY(0)';
//         header.style.transition = 'transform 0.3s ease';
//     }
    
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
// });


// Menu croll (with burger scroll-disable)
let lastScrollTop = 0;
const header = document.querySelector('.header__wrap');
const menuIcon = document.querySelector('.header__menu-icon');

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}

function handleScroll() {
    // Check if menu icon has -visible class
    if (menuIcon.classList.contains('-visible')) {
        disableScroll();
        return; // Exit scroll handler if menu is visible
    } else {
        enableScroll();
    }

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
}

// Observe changes to the menu icon's class
const observer = new MutationObserver(() => {
    if (menuIcon.classList.contains('-visible')) {
        disableScroll();
    } else {
        enableScroll();
    }
});

// Start observing the menu icon for class changes
observer.observe(menuIcon, { attributes: true, attributeFilter: ['class'] });

// Add scroll event listener
window.addEventListener('scroll', handleScroll);










