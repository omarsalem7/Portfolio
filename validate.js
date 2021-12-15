const form = document.querySelector('.contact-form');
const emailMsg = document.querySelector('#my-email');

function testEmail(email) {
  const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return emailPattern.test(email);
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailValue = form.elements['email'].value.trim();
  if (emailValue === '') {
    emailMsg.innerHTML = 'Email field is required!';
    emailMsg.classList.add('label-error');
  }
});
