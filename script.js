let currentIndex = 0;

const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.gallery-item');
const totalItems = items.length;

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateGallery();
});

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
});

function updateGallery() {
    const newTransformValue = -currentIndex * 100;
    gallery.style.transform = `translateX(${newTransformValue}%)`;
}
