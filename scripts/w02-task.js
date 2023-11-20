/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
    let fullName = 'Edith A. Enderle';
    let currentYear = '2023';
    let profilePicture = 'images/cse121me.png';

/* Step 3 - Element Variables */
    const nameElement = document.getElementById('name');
    const foodElement = document.getElementById('food');
    const yearElement = document.querySelector('#year');
    const imageElement = document.querySelector('picture');

/* Step 4 - Adding Content */
    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.innerText = currentYear;
    imageElement.setAttribute = ('src', `<strong>${profilePicture}</strong>`);
    imageElement.setAttribute = ('alt', `Profile image of <strong>${fullName}</strong>`);

/* Step 5 - Array */

    let myFavorites = ['Curry ','Steak ','Charcuterie ','Quesabirria ','Potstickers '];
    let candy = 'Good and Plenty';

    myFavorites.push(candy);
    foodElement.innerHTML += `<br>${myFavorites}`;
    myFavorites.shift();
    foodElement.innerHTML += `<br>${myFavorites}`;

