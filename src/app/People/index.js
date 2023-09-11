const CommonPeople = require('./classes/commonPeople');
const WookieePeople = require('./classes/wookiPeople');



const peopleFactory = (character, lang) => {
    let people = null;
    if (lang == 'wookiee'){
        people = new WookieePeople(character);
    } else {
        people = new CommonPeople(character);
    }
    return people;
}

module.exports = { peopleFactory }