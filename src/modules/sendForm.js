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


  const getPersonalData = () => {
    console.log('необходимо что то сделать');

    alert('Необходимо подтвердить согласие на обработку персональных данных');
  }

  const setTotal = () => {

  };

  setTotal();


  form.addEventListener('submit', (event) => {
    event.preventDefault();
    //блокируем отправку, пока пользователь не примет соглашения
    if (personalData) { //если кнопка есть
      if (!personalData.checked) {
        getPersonalData();
        return;
      }
    }
    inputForm.forEach((item) => {
      if (item.getAttribute('name') === 'name' && item.value.trim() === '') {
        console.log('blb ns');
        return;
      }

    })


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
