const fs = require('fs');

const {gender, maleFirstNames, femaleFirstNames, lastNames} = require('./store');

const people = [];

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const randNumber = (min, max) => {
    return Math.floor((Math.random() * (max - min)) + min)
}

for ( let i = 0; i < 21; i++) {

    let randGender = (randChoice(gender));

    if (randGender == 'male') {
        randFirstName = (randChoice(maleFirstNames));
    } else {
        randFirstName = (randChoice(femaleFirstNames));
    };

    let randLastName = (Math.random(lastNames));

    let randAge = (randNumber(18, 78));

    people.push({
        gender : randGender,
        firstName : randFirstName,
        lastName : randLastName,
        age : randAge
    });
}

const peopleJsonString = JSON.stringify(people, null, ' ');




fs.writeFile('people.json', peopleJsonString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


