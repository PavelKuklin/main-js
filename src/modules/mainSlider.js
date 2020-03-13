const mainSlider = () => {
  const mainSlider = document.querySelector('.main-slider'),
    slides = mainSlider.querySelectorAll('.slide');
  console.log(slides);
  let currentIndex = 0;
  const changeSlide = () => {

    setInterval(() => {
      slides[currentIndex].style.display = 'none';

      if (currentIndex < (slides.length - 1)) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }

      slides[currentIndex].style.display = 'flex';
    }, 2000)
  }
  changeSlide()
}
export default mainSlider;