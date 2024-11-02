// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


function submitForm(e) {
  e.preventDefault();
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create email body
  const body = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  // Create email subject
  const subject = 'Hi! Bukunmi';

  // Construct email link
  const mailtoLink = `mailto:bukunmi.akinyemi.enoch@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the mailto link
  window.location.href = mailtoLink;
}

const Form = document.querySelector('.contact__form')

Form.addEventListener('submit', submitForm)

function getCurrentYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear;
}
const year = document.getElementById('year');

year.textContent = getCurrentYear();