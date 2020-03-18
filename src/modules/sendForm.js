import maskPhone from './maskPhone';

const sendForm = () => {
    const form = document.querySelectorAll('form'),
        successWindow = document.querySelector('#thanks'),
        errorsWindow = document.querySelector('#errors');


    form.forEach(item => {
        let name,
            phone,
            personalData,
            personalDataLabel;

        let formItems = item.querySelectorAll('input');
        getItems(formItems);

        //получаем инпуты
        function getItems(formItems) {
            formItems.forEach(item => {
                if (item.name === 'name') {
                    name = item;
                } else if (item.name === 'phone') {
                    phone = item;
                    maskPhone(`#${item.id}`);
                } else if (item.parentElement.classList.contains('personal-data')) {
                    personalData = item;
                    personalDataLabel = item.parentElement.querySelector('label');
                }
            });
        };

        //валидатор небольшой
        const myValidate = () => {
            let validPhone = true,
                validName = true,
                validDate = true;
            if (name && (name.value.trim() === '')) {
                name.classList.add('error');
                validName = false;
            } else if (name && ((name.value == undefined || name.value.trim() !== '') && name.classList.contains('error'))) {
                name.classList.remove('error');
                name = true;
            }
            if (+phone.value.length !== 18) {
                phone.classList.add('error');
                validPhone = false;
            } else if (+phone.value.length === 18 && phone.classList.contains('error')) {
                phone.classList.remove('error');
                validPhone = true;
            }
            if (personalData && !personalData.checked) {
                personalDataLabel.style.color = 'red';
                validDate = false;
            } else if (personalData && personalData.checked) {
                personalDataLabel.style.color = '#94939a';
            }
            if (validPhone && validName && validDate) {
                return true;
            } else {
                return false;
            }
        }

        item.addEventListener('submit', (event) => {
            event.preventDefault();

            if (!myValidate()) {
                return;
            }

            const formData = new FormData(item);
            let body = {};
            for (let val of formData.entries()) {
                body[val[0]] = val[1];
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
                if (document.querySelector('.popup').classList.contains('show')) {
                    let key = document.querySelector('.popup').classList.remove('show');
                }
            }).catch(() => {
                errorsWindow.classList.add('show');
                if (document.querySelector('.popup').classList.contains('show')) {
                    let key = document.querySelector('.popup').classList.remove('show');
                }

            }).finally(() => {
                item.reset();
            });
        })
    });

};

export default sendForm;
