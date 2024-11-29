// Definisco la funzione
function createName(firstName, lastName) {
    return {
      firstName,//: firstName,
      lastName//: lastName
    };
  }
  
  // Esporto la funzione utilizzando commonjs
  module.exports = {
    createName//: createName
  };
  