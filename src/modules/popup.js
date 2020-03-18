const popup = () => {
    const body = document.querySelector('body'),
        freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        gift = document.getElementById('gift'),
        giftBtn = document.querySelector('.fixed-gift'),
        errorsWindow = document.getElementById('errors'),
        successWindow = document.getElementById('thanks'),
        popupWindow = document.querySelector('.popup');

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
        } else if ((gift && gift.classList.contains('show')) && !target.getAttribute('data-popup') && !target.closest('.form-content')) {
            switchPopup(gift);
        }

        if (target.matches('.close-btn') || (popupWindow.classList.contains('show') && !target.closest('.popup'))) {
            switchPopup(target.parentElement.parentElement.parentElement);
            if (popupWindow.classList.contains('show')) {
                switchPopup(target.parentElement.parentElement.parentElement);
            }
        }
        //окно с подарком 
        if (target.closest('.fixed-gift')) {
            giftBtn.style.display = 'none';
            switchPopup(gift);
        }
        if (errorsWindow && errorsWindow.classList.contains('show') && !target.closest('.form-content')) {
            switchPopup(errors);
        }
        if (successWindow && successWindow.classList.contains('show') && !target.closest('.form-content')) {
            switchPopup(successWindow);
        }

    };

    body.addEventListener('click', openPopup);

}

export default popup;