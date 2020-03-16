const calc = () => {
  const form = document.querySelector('#card_order'),
    time = form.querySelectorAll('.time>input'),
    club = form.querySelectorAll('.club>input'),
    priceMessage = form.querySelector('.price-message>input'),
    priceTotal = form.querySelector('#price-total');

  let prices = {},
    currentClub = '',
    currentInput = '',
    price;

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

  }).catch(() => {
  });

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
    price = prices[currentClub][currentInput];
  };

  const setPrice = () => {
    if (priceMessage.value.toUpperCase().trim() === 'ТЕЛО2020') {
      price = Math.ceil(price * .7);
    }
    priceTotal.textContent = price;
  };

  form.addEventListener('input', (event) => {
    let target = event.target;
    getValues(target);
    setPrice();
  });

};

export default calc;

