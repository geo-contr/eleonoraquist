document.addEventListener("DOMContentLoaded", function () {
    // var swiper = new Swiper('.swiper', {
    //     speed: 300,
    //     slidesPerView: 'auto',
    //     spaceBetween: 20,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //     loop: true,
    //     parallax: true,
    //     simulateTouch: true,
    //     grabCursor: false
    // });


    const swiperContainer = document.querySelector('.swiper');
    imagesLoaded(swiperContainer, function () {
        var swiper = new Swiper('.swiper', {
            speed: 300,
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true,
            parallax: true,
            simulateTouch: true,
            grabCursor: false,
        });
    });


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
            if (swiper.params.loop) {
                swiper.slideToLoop(clickedBulletIndex);
            } else {
                swiper.slideTo(clickedBulletIndex);
            }
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










