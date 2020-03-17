import maskPhone from './maskPhone';
const sendForm = (selector) => {
    const form = document.querySelector(selector),
        personalData = form.querySelector('.personal-data>input'),
        formBtn = form.querySelector('button'),
        successWindow = document.getElementById('thanks'),
        errorsWindow = document.getElementById('errors'),
        priceMessage = form.querySelector('.price-message>input'),
        priceTotal = form.querySelector('#price-total'),
        inputForm = form.querySelectorAll('input');

    let promo = false;

    const setMask = () => { //подключаем маску на телефон
        inputForm.forEach(item => {
            if (item.name === 'phone') {
                let idPhone = `#${item.id}`;
                maskPhone(idPhone);
            }
        });
    };
    setMask();


    const getPersonalData = () => {
        alert('Необходимо подтвердить согласие на обработку персональных данных');
    }

    const setTotal = () => {

    };

    setTotal();

    const validateForm = () => {
        let validName = true,
            validPhone = true,
            validClubName = true;

        inputForm.forEach((item) => {

            if (item.name === 'name' && item.value.trim() === '') {
                validName = false;
            } else if (item.name === 'name' && item.value.trim() !== '') {
                validName = true;
            }
            if (item.name === 'phone' && item.value.length !== 18) {
                validPhone = false;
            } else if (item.name === 'phone' && item.value.length === 18) {
                validPhone = true;
            }
            if (item.name === 'club-name' && !item.checked) {
                validClubName = false;
            } else if (item.name === 'club-name' && item.checked) {
                validClubName = true;
            }
        });

        if (!validName || !validPhone || !validClubName) {
            alert('Заполните необходимые поля');
            return false;
        } else {
            return true;
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        //блокируем отправку, пока пользователь не примет соглашения
        if (personalData) { //если кнопка есть
            if (!personalData.checked) {
                getPersonalData();
                return;
            }
        }

        if (!validateForm()) {
            return;
        };

        //получаем значение полей
        const formData = new FormData(form);
        let body = {};
        for (let val of formData.entries()) {
            body[val[0]] = val[1];
        }
        if (priceTotal) {
            body.price = priceTotal.textContent;
        }

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

        };
        postData(body).then((resolve) => {
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

export default sendForm;