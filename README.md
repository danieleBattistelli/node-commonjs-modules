


# Esercizio node-commonjs-modules
Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:
1 - names.js
1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.
2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
2. Esporta la funzione dal file.
3 - app.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName e hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
BONUS:
trasformare la sintassi di commonJS in ES6
usare la libreria chalk per colorare output

### Dati
Descrizioni delle funzioni da implementare

### Esecuzione logica
1)Creo la funzione createName che accetta due parametri: firstName, lastName e restituisce un oggetto contenente Nome e Cognome.
2)Creo la funzione createHobbies che accetta tre parametri e restituisce un oggetto contenente i tre hobbies.
3)Faccio il test di createName,createHobbies creando la funzione createUserProfile che da in uscita  Nome , Cognome e Hobbies

### Output
1)Funzione createUserProfile