const CommonPeople = require('./classes/commonPeople');
const WookieePeople = require('./classes/wookiPeople');



const peopleFactory = async (id, lang) => {
    let people = null;
    if (lang == 'wookiee'){
        people = new WookieePeople(id);
    } else {
        people = new CommonPeople(id);
    }
    await people.init();
    return people;
}

module.exports = { peopleFactory }