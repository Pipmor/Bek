// REG EXP
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'YOUR NUMBER IS VALID!'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'YOUR NUMBER IS NOT VALID'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

// CONVERTER

// DRY - don`t repeat yourself
// KISS - keep it short and simple

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur'); 

const converter = (element, target, target2, isTrue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "../data/converter.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();

        request.onload = () => {
            const response = JSON.parse(request.response);
            if (isTrue) {
                target.value = (element.value / response.usd).toFixed(2);
                target2.value = (element.value / response.eur).toFixed(2);
            } else {
                target.value = (element.value * response.usd).toFixed(2);
                target2.value = (element.value * response.eur).toFixed(2);
            }
            element.value === '' && (target.value = '') && (target2.value = '');
        };
    };
};

converter(som, usd, eur, true);
converter(usd, som, eur, false);



// CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1

const fetchData = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data for ID ${id}`);
        }

        const data = await response.json();
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'};">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (error) {
        console.error(error);
    }
}

fetchData(count);

btnNext.onclick = () => {
    count < 200 ? count++ : count = 1;
    fetchData(count);
}

btnPrev.onclick = () => {
    count > 1 ? count-- : count = 200;
    fetchData(count);
}


//WHEATHER
const cityName = document.querySelector('.cityName')
const btnSearch = document.querySelector('#btn-search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const apiKey = 'e417df62e04d3b1b111abeab19cea714'

const cityResearch = () => {
    btnSearch.onclick = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`)
            .then(respons => respons.json())
            .then(data => {
                city.innerHTML = data.name
                temp.innerHTML = Math.round(data.main.temp - 273) + '&deg;C'
            })
    }
}

cityResearch()