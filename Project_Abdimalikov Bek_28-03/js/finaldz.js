document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');

    async function fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            data.slice(0, 12).forEach((post, index) => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                card.style.backgroundImage = `url('https://i.pinimg.com/564x/dc/c4/9a/dcc49a4c1561a7a0d30411b6ba4cfb42.jpg')`;

                main.appendChild(card);
            });
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }

    fetchPosts();
});
