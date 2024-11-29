// Definisco la funzione
function createHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return {
      hobbies: [hobbyOne, hobbyTwo, hobbyThree]
    };
  }
  
  // Esporto la funzione utilizzando commonjs
  module.exports = {
    createHobbies: createHobbies
  };
  