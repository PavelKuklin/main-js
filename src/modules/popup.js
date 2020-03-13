const popup = () => {
    const body = document.querySelector('body'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        gift = document.getElementById('gift'),
        giftBtn = document.querySelector('.fixed-gift');

    const switchPopup = (selector) => {
        selector.classList.toggle('show');
        body.classList.toggle('scroll-hidden');
    }

    const openPopup = () => {
        let target = event.target;

        if (target.getAttribute('data-popup')) {
            switchPopup(document.querySelector(target.getAttribute('data-popup')))
        }
        if (target.closest('.close-form')) {
            target = target.closest('.close-form');
            switchPopup(target.parentElement.parentElement);
        }

        //закрываем модалки при нажатии мимо    
        if (callbackForm.classList.contains('show') && !target.getAttribute('data-popup') && !target.closest('.form-content')) {
            switchPopup(callbackForm);
        } else if (freeVisitForm.classList.contains('show') && !target.getAttribute('data-popup') && !target.closest('.form-content')) {
            switchPopup(freeVisitForm);
        } else if (gift.classList.contains('show') && !target.getAttribute('data-popup') && !target.closest('.form-content')) {
            switchPopup(gift);
        }

        //окно с подарком 
        if (target.closest('.fixed-gift')) {
            giftBtn.style.display = 'none';
            switchPopup(gift);
        }
    };


    body.addEventListener('click', openPopup);

}

export default popup;