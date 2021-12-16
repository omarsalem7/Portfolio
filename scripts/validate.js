const form = document.querySelector('.contact-form');
const emailMsg = document.querySelector('.my-email-label');
function testEmail(email) {
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return emailPattern.test(email);
}

function validEmail(emailValue) {
  if (testEmail(emailValue)) {
    form.submit();
  } else {
    emailMsg.innerHTML = 'Invalid email and should be in lower case';
    emailMsg.classList.add('label-error');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = form.querySelector('.form-email').value.trim();
  if (emailValue === '') {
    emailMsg.innerHTML = 'Email field is required!';
    emailMsg.classList.add('label-error');
  } else {
    validEmail(emailValue);
  }
});
