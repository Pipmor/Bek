function showModal() {
    alert("Модальное окно было вызвано!");
}

function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
        showModal();
        window.removeEventListener('scroll', handleScroll);
    }
}

function delayedModal() {
    setTimeout(function() {
        showModal();
        window.removeEventListener('scroll', handleScroll);
    }, 10000);
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', delayedModal);