/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Edith A. Enderle';
let currentYear = Year();
let profilePicture = 'images\cse121me.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture.img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerText = currentYear;
imageElement.setAttribute = ('src', profilePicture);
imageElement.setAttribute = ('alt', 'Profile image of Edith A. Enerle');

/* Step 5 - Array */






