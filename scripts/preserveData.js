const myForm = document.querySelector('.contact-form');
const inputSeletors = document.querySelectorAll('.form-control');
const userData = {};

//=============== get data from localstorgae as js object ==============
function getLocalStorageData() {
  const jsonString = localStorage.getItem('userData');
  const retrievedObject = JSON.parse(jsonString);
  console.log(retrievedObject);
  return retrievedObject;
}
//======================================================================

//======= Add event listner when an input change in form ===============
myForm.addEventListener('change', () => {
  userData.name = inputSeletors[0].value;
  userData.email = inputSeletors[1].value;
  userData.message = inputSeletors[2].value;
  localStorage.setItem('userData', JSON.stringify(userData));
});
//======================================================================

//============ fill data from localstorgae to input value ==============

//======================================================================
