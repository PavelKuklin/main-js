import maskPhone from './maskPhone';

const sendForm = (selector) => {
    const form = document.querySelectorAll(selector),
        successWindow = document.querySelector('#thanks'),
        errorsWindow = document.querySelector('#errors');

    let name,
        phone,
        personalData,
        other = [];

    //получаем инпуты
    const getItems = (formItems) => {
        formItems.forEach(item => {
            if (item.name === 'name') {
                name = item;
            } else if (item.name === 'phone') {
                phone = item;
                maskPhone(`#${item.id}`);
            } else if (item.parentElement.classList.contains('personal-data')) {
                personalData = item;
            }
        });
    };

    //валидатор небольшой
    const myValidate = () => {
        let validPhone = true,
            validName = true,
            validDate = true;

        if (+phone.value.length !== 18) {
            validPhone = false;
        }
        if (name) {
            if (name.value == undefined || name.value.trim() === '') {
                validName = false;
            }
        }
        if (personalData) {
            if (!personalData.checked) {
                validDate = false;
            }
        }

        if (validPhone && validName && validDate) {
            return true;
        } else {
            return false;
        }
    }

    form.forEach(item => {
        let formItems = item.querySelectorAll('input');
        getItems(formItems);

        item.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!myValidate()) {
                alert('заполните поля')
                return;
            }

            const formData = new FormData(item);
            let body = {};
            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }
            // if (priceTotal) {
            //     body.price = priceTotal.textContent;
            // }

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
                item.reset();
            });
        })
    });

};

export default sendForm;
