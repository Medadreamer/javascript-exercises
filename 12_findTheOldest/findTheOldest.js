const findTheOldest = function(people) {
    const peopleWithAge = people.map(person => {
        if(!('yearOfDeath' in person)) {
            
            person['yearOfDeath'] = new Date().getFullYear();
        }
        age = person.yearOfDeath - person.yearOfBirth;
        return {name: person.name, age: age}
    })

    TheOldest = peopleWithAge.sort((a, b) =>{
        if(a.age > b.age) {
            return -1;
        }

        return 1;
    });

    return TheOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
