// Importa le funzioni createName e createHobbies 
import { createName } from './names.js';
console.log(createName);
import { createHobbies } from './hobbies.js';
console.log(createHobbies);
import chalk from 'chalk';


//Test createUserProfile
function createUserProfile() {
    // Usa le funzioni precedenti per costruire l'oggetto
    const fullName = createName('Mario', 'Rossi');
    const hobbies = createHobbies('Yoga', 'AcquaPilates', 'Zumba');

    return {
        fullName: fullName,
        hobbies: hobbies.hobbies
    };
}

const userProfile = createUserProfile();
console.log(chalk.greenBright(JSON.stringify(userProfile,null, 2))) 
//JSON.stringify(userProfile, null, 2): Questa parte converte l'oggetto userProfile in una stringa JSON formattata.
//userProfile: è l'oggetto che stiamo convertendo.
//null: è un parametro che può essere una funzione di sostituzione, ma qui lo lasciamo a null
//2: è il numero di spazi da usare per l'indentazione nella formattazione, rendendo l'output più leggibile.
