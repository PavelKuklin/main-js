const gallyry = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slide = gallerySlider.querySelectorAll('.slide'),
        sliderDots = gallerySlider.parentElement.querySelector('.silder-dots');

    let currentSlide = 0,
        interval,
        dots = document.querySelectorAll('.slider-dot');

    //Создаем кнопки для слайдера
    const getArrows = () => {
        const arrowNext = document.createElement('a');

        arrowNext.style.cssText = `display: block;
    position: absolute;
    background-image: url('./images/arrow-right.png');
    background-repeat: no-repeat;
    background-position: center;
    top: 45%;
    left: 85%;
    width: 36px;
    height: 37px;
    background-color: #f4c71b;
    border-radius: 50%;
    text-align: center;
    padding-top: 11px;
    cursor: pointer;
    z-index; 1200;`
        const arrowPrev = document.createElement('a');
        arrowPrev.style.cssText = `display: block;
    position: absolute;
    background-image: url('./images/arrow-left.png');
    background-repeat: no-repeat;
    background-position: center;
    top: 45%;
    left: 12%;
    width: 36px;
    height: 37px;
    background-color: #f4c71b;
    border-radius: 50%;
    text-align: center;
    padding-top: 11px;
    cursor: pointer`;

        arrowNext.classList.add('slider-arrow', 'next');
        gallerySlider.parentElement.append(arrowNext);
        arrowNext.parentElement.style.cssText = `position: relative;`;


        arrowPrev.classList.add('slider-arrow', 'prev');
        gallerySlider.parentElement.append(arrowPrev);
    };
    getArrows();

    //создаем точки
    const getDots = () => {
        const dotsLength = slide.length;

        sliderDots.style.cssText = `
      position: absolute;
      display: flex !important;
      left: 50%;
      margin-left: -65px;
      bottom: 5%`;

        for (let i = 0; i < dotsLength; i++) {
            const dots = document.createElement('button');
            dots.classList.add('slider-dot');
            sliderDots.append(dots);
            dots.style.cssText = `
        display:block !important;
        width: 22px;
        height: 4px;
        background-color: #fff;
        border: none;
        border-radius: 2px;
        color: transparent;
        margin-right: 5px;
        cursor: pointer`;
        }
        dots = document.querySelectorAll('.slider-dot');
        dots[currentSlide].classList.add('dots-active');
    };
    getDots();

    //Настриваем сам слайдер 
    const prevSlide = (element, index, Class) => { //функция для смены слайдера
        element[index].classList.remove(Class);
        dots[index].classList.remove('dots-active');
    };

    const nextSlide = (element, index, Class) => { //функция для смены слайдера
        element[index].classList.add(Class);
        dots[index].classList.add('dots-active');
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slideOpasity');

        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        nextSlide(slide, currentSlide, 'slideOpasity');
    };

    //функции старта и остановки слайдера
    const startSlider = (time = 2000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlider = () => {
        clearInterval(interval);
    };

    startSlider(1400);
    //слушатели ина остановку слайдера, если курсор наведен на стрелку или точку. 
    gallerySlider.parentElement.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target.closest('.slider-arrow') || target.closest('.slider-dot')) {
            stopSlider();
        }
    });

    gallerySlider.parentElement.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target.closest('.slider-arrow') || target.closest('.slider-dot')) {
            startSlider(1400);
        }
    })

    //переключение слайдера кнопками. 
    gallerySlider.parentElement.addEventListener('click', (event) => {
        let target = event.target;
        //стрелки
        if (target.closest('.next')) {
            prevSlide(slide, currentSlide, 'slideOpasity');
            currentSlide++;
            if (currentSlide > slide.length - 1) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'slideOpasity');
        } else if (target.closest('.prev')) {
            prevSlide(slide, currentSlide, 'slideOpasity');
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'slideOpasity');
        }

        //точки
        if (target.closest('.slider-dot')) {
            dots.forEach((item, index) => {
                if (item === target) {
                    prevSlide(slide, currentSlide, 'slideOpasity');
                    currentSlide = index;
                    nextSlide(slide, currentSlide, 'slideOpasity')
                }
            });

        }
    });

};



//настройка стрелок 


export default gallyry;