// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption')
// Array of slides (10 images)
const slides = [
{ src: 'images/Yuki_1.jpg',
    alt: 'Yuki1' ,
    caption: '2019: You used this as your first Discord pfp. You were not supposed to have it.'
},
{ src: 'images/Yuki_2.jpg', 
    alt: 'Yuki2' ,
    caption:'2019: We evolved, and you grew a body.'
},
{ src: 'images/Yuki_3.jpg',
     alt: 'Yuki3',
     caption: '2020: The isolation. You spent a lot of time with pencil and paper.'
},
{ src: 'images/Yuki_4.jpg',
    alt: 'Yuki4',
    caption: '2021: We continued to be stuck. You took up my thoughts.'
},
{ src: 'images/Yuki_5.jpg',
    alt: 'Yuki5',
    caption: '2022: You made a new profile for Wattpad. We wove you into our own storybook.'
},
{src: 'images/Yuki_6.jpg',
    alt: 'Yuki6',
    caption: '2022: The time came where your face changed. You were so thrilled.'
},
{src: 'images/Yuki_7.jpg',
    alt: 'Yuki7',
    caption: '2023: We could never focus on notes. You grew into another form.'
},
{src: 'images/Yuki_8.jpg',
    alt: 'Yuki8',
    caption: '2024: You started your last year of high school. We continue strongly.'
},
{src: 'images/Yuki_9.jpg',
    alt: 'Yuki9',
    caption: '2025: The time of celebration for our graduation. You were still present.'
},
{src: 'images/Yuki_10.jpg',
    alt: 'Yuki10',
    caption: '2026: We have made it. This is our first year of college, together, still.'
}
];
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src;
mainImage.alt = slide.alt;
caption.textContent = slide.caption;
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);