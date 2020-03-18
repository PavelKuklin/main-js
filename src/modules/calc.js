import maskPhone from './maskPhone';
maskPhone('#callback_form-phone');

const calc = () => {
    const form = document.querySelector('#card_order'),
        time = form.querySelectorAll('.time>input'),
        club = form.querySelectorAll('.club>input'),
        priceMessage = form.querySelector('.price-message>input'),
        priceTotal = form.querySelector('#price-total'),
        personalData = form.querySelector('.personal-data>input'),
        inputText = form.querySelectorAll('.input-text>input'),
        successWindow = document.getElementById('thanks'),
        errorsWindow = document.getElementById('errors');

    let prices = {},
        currentClub = '',
        currentInput = '',
        price,
        sendMessage = {};

    //получаем данные из файла
    const getPrice = () => {
        return fetch('./src/services.JSON', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
            },
        })
    };
    getPrice().then((resolve) => {
        if (resolve.status !== 200) {
            throw new Error('error');
        }
        prices = resolve.text();
        return prices;
    }).then((response) => {
        prices = JSON.parse(response);
        getValues();
        setPrice();

    }).catch(() => {});

    const getValues = (target) => {
        if (club) {
            club.forEach(item => {
                if (item.checked) {
                    currentClub = item.value;
                }
            });
        }
        if (time) {
            time.forEach(item => {
                if (item.checked) {
                    currentInput = item.getAttribute('id');
                }
            });
        }
        if (currentClub && currentInput) {
            price = prices[currentClub][currentInput];
        }


    };

    const setPrice = () => {
        if (priceMessage && priceMessage.value.toUpperCase().trim() === 'ТЕЛО2020') {
            price = Math.ceil(price * .7);
        }
        if (price) {
            priceTotal.textContent = price;
        }

    };

    const getInfo = () => {
        inputText.forEach(item => {
            if (item.name === 'phone') {
                sendMessage.phone = item.value;
            } else if (item.name === 'name' && item.placeholder !== 'Промокод') {
                sendMessage.name = item.value;
            }
        })
        sendMessage.club = currentClub;
        sendMessage.price = `${price} рублей`;

        console.log(sendMessage);

    }

    form.addEventListener('input', (event) => {
        let target = event.target;
        getValues(target);
        setPrice();

    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!personalData.checked) {
            alert('Подтвердите ваше согласие на обработку данных')
            return
        }

        inputText.forEach(item => {
            if (item.value.trim() === '' && ((item.name === 'name' && item.placeholder !== 'Промокод') || item.name === 'phone')) {
                alert('заполните поля');
                return;
            }
        })

        getInfo();

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

        };
        postData(sendMessage).then((resolve) => {
            if (resolve.status !== 200) {
                throw new Error('error');
            }
            successWindow.classList.add('show');
        }).catch(() => {
            errorsWindow.classList.add('show');
        }).finally(() => {
            form.reset();
        });
    });
};

export default calc;
//фиксил