// importo Createname
const { createName } = require('./modules/names');
console.log(createName);
// Importo createHobbies
const { createHobbies } = require('./modules/hobbies');
console.log(createHobbies);

//Test createName
//const name = createName('Mario','Rossi');
//console.log(name);
//Test createHobbies
//const hobby = createHobbies('Yoga','AcquaPilates','Zumba');
//console.log(hobby);

//Test createUserProfile
function createUserProfile() {
    // Usa le funzioni precedenti per costruire l'oggetto
    const fullName = createName('Mario', 'Rossi');
    const hobbies = createHobbies('Yoga', 'AcquaPilates', 'Zumba');

    return {
        fullName: fullName,
        hobbies: hobbies.hobbies // Accedi alla proprietà hobbies dell'oggetto restituito
    };
}

const userProfile = createUserProfile();
console.log(userProfile);
