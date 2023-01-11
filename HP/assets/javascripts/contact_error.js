function check() {
  let name = document.getElementById('name');
  let co_name = document.getElementById('co_name');
  let email = document.getElementById('email');
  if(name.innerHTML == "") {
    name.classList.add('p-contact__error');
  }
  if(co_name.innerHTML == "") {
    co_name.classList.add('p-contact__error');
  }
  if(email.innerHTML == "") {
    email.classList.add('p-contact__error');
  }
}
