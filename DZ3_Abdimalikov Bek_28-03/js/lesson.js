document.addEventListener('DOMContentLoaded', function () {
    const tabContentBlocks = document.querySelectorAll('.tab_content_block');
    const tabContentItems = document.querySelectorAll('.tab_content_item');

    let currentIndex = 0;
    const intervalDuration = 3000;

    function showSlide(index) {
        tabContentBlocks.forEach((slide) => {
            slide.style.display = 'none';
        });

        tabContentBlocks[index].style.display = 'block';

        tabContentItems.forEach((item) => {
            item.classList.remove('tab_content_item_active');
        });

        tabContentItems[index].classList.add('tab_content_item_active');

        currentIndex = index;
    }

    function switchToNextSlide() {
        currentIndex = (currentIndex + 1) % tabContentBlocks.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setInterval(switchToNextSlide, intervalDuration);
});

function showModal() {
    alert("Модальное окно было вызвано!");
}


