import popup from './modules/popup';
import menu from './modules/menu';
import mainSlider from './modules/mainSlider';
import gallyry from './modules/gallyry';
import sendForm from './modules/sendForm';
import services from './modules/services';
import mycarousel from './modules/myCourusel.js';
import calc from './modules/calc';


popup();
menu();
mainSlider();
gallyry();
mycarousel();
sendForm();
if (window.location.toString().indexOf('index.html') > 0) {
  calc();
}
services();