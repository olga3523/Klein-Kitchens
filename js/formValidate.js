const form = document.querySelector('#section-contacts form');
const formName = form.querySelector('#name');
const formPhone = form.querySelector('#phone');
const formMessage = form.querySelector('#message');

function isValidatedNumber(number) {
  number = number.split(' ').join('');

  let phoneReg =
    /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

  if (number.value < 10) return false;
  if (!phoneReg.test(number)) return false;

  return true;
}

function onSubmitForm(e) {
  e.preventDefault();

  const isValidated = isValidatedNumber(formPhone.value);

  if (isValidated) {
    sendRequest(formName.value, formPhone.value, formMessage.value);
  } else {
    formPhone.parentElement.classList.add('input-error');
  }
}

function clearForm() {
  [formName, formPhone, formMessage].forEach((item) => {
    item.value = '';
  });
}

function sendRequest(name, phone, message) {
  let xhr = new XMLHttpRequest(); // simplified for clarity
  let url = 'mailto.php';
  xhr.open('POST', url, true); // sending as POST

  let params = 'name=' + name + '&' + 'phone=' + phone + '&' + 'message=' + message;

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.setRequestHeader('Content-Length', params.length);

  xhr.onreadystatechange = function () {
    //Call a function when the state changes.
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.querySelector('#popup_1').classList.add('active');
      clearForm();
    }
  };

  xhr.send(params);
}

formPhone.addEventListener('click', () => {
  formPhone.parentElement.classList.remove('input-error');
});

form.addEventListener('submit', onSubmitForm);
