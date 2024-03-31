/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Edith Enderle',
    photo: 'images/profilePic.png',
    favoriteFoods: ['Pupusas','Good and Plenty','Curry','Steak','Potstickers','Charcuterie','Bread Pudding'],
    hobbies: ['Reading','Camping','Playing Games','Travel','Music','Running','Historical Documentaries'],
    placesLived: []
}


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Magna, UT',
        length: '17 years'
    },
    {
        place: 'Rancho Santa Margarita, CA',
        length: '6 years'
    },
    {
        place: 'Santa Ana, CA',
        length: '2 years'        
    },
    {
        place: 'Magna, UT',
        length: '12 years'
    },
    {
        place: 'Wenatchee, WA',
        length: '5 years'
    },
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('img').src = myProfile.photo;
document.querySelector('img').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });

