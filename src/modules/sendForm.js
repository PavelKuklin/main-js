const sendForm = (selector) => {
  const form = document.querySelector(selector);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const sendToPhp = () => {
      return new Fetch('../../server.php');

    }

  });
};

export default sendForm;
