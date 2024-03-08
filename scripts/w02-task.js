/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Edith Ann Enderle';
let currentYear = '2024';
let profilePicture = 'images/profilePicture.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = `${currentYear}`;

imageElement.setAttribute('src', 'images/profilePic.png');
imageElement.setAttribute('alt', `Image of ${nameElement}`);


/* Step 5 - Array */

const favorites = [" Pupusas"," Good and Plenty"," Curry"," Steak"," Potstickers"," Charcuterie"," Bread Pudding"];
let otherFav = " Quesabirria"
favorites.push(otherFav);
favorites.shift();
foodElement.innerHTML += `<br>${favorites}`;




