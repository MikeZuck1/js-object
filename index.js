// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// création de l'objet et ses propriétés 
let dog = {
  name : 'halley', // peer key-value
  race : 'husky', // peer key-value
  color : 'Black & white', // peer key-value
  eyes : 'Blue',// peer key-value
  age : 3, // peer key-value
  birth : '30-06-2023', // peer key-value
  'Refuge or not ?' : 'not' // peer key-value
}; 

console.log(dog.owner = 'Philips'); // ajoute une nouvelle propriété à l'intérieur de l'objet 
console.log(delete dog.color); // supprime la propriété color : 'Black & white', 
console.log(dog['Refuge or not ?'] = 'Refuge'); // change la valeur de la clé 'Refuge or not ?'
console.log(dog); // affihce l'objet 


// méthodes 
let string = 'Hello world !'; 

let objString = {
  str () {
      console.log(string); 
  } 
}; 

console.log(objString.str()); // print => 'Hello world ! => NE PAS OUBLIER DE FAIRE UN APPEL À LA FONCTION 


let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () { 
    console.log(retreatMessage);  
  }, 

  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!'); 
  } 
}; 
 
alienShip.retreat(); // invoque la première méthode => PAS OBLIGATOIRE D'UTILISER LA METHODE CONSOLE.LOG();  
alienShip.takeOff(); // invouqe la seconde méthode => PAS OBLIGATOIRE D'UTILISER LA METHODE CONSOLE.LOG();  


const theMethodAndProperties = () => { // my function with an object 
  let thePerson = { // object with properties 
      firstName : 'John', // peer key-value 
      lastName :  'Doe', // peer key-value 
      birth : null, // peer key-value 
      age : 34, // peer key-value 
      eyeColor: 'blue', // peer key-value 
      country : 'UK', // peer key-value 
      loc : 'Lon', // peer key-value 
      sayHi () { // function 
          return `My name is ${this.firstName} and I live in ${this.country}.`; 
          // return 'My name is John and I live in UK'
      } 
  }; 

  let theNextPerson = {
      firstName : 'Jane', // peer key-value 
      lastName : 'Doe', // peer key-value 
      birth : null, // peer key-value 
      age : 32, // peer key-value 
      eyeColor : 'green', // peer key-value
      country :'UK', // peer key-value 
      loc : 'Lon', // peer key-value
      sayHiToo () { // function 
          return `Hello i'm ${this.firstName} ${this.lastName} and I live in ${this.country} too.`;
          // return 'Hello i'm Jane Doe and I live in UK too.'
      }
  }; 
  // print the first object 
  console.log(thePerson.sayHi()); // appel à la fonction 
  console.log(delete thePerson.eyeColor); // removes 'eyeColor: 'blue',' 
  console.log(thePerson); // print the object 

  // print the second object
  console.log(delete theNextPerson['birth']); // remove property from object
  console.log(theNextPerson.sayHiToo()); // call the function and return 'Hello i'm Jane Doe and I live in UK too.'
  console.log(theNextPerson);// prints out the new object without a birth date 
  console.log(delete theNextPerson['age']); // remove property from object
}; 

theMethodAndProperties(); // appel à la fonction 


const thespaceship = () => { // création de la fonction 
  let pilotFirstName = 'Elane'; // 
  let pilotLastName = 'Musk'; // 

  const spaceship = { // objet 
      model:'starship', // peer key-value 
      speed:1000, // peer key-value 
      engines:5, // peer key-value 
      job : 'astronaut', // peer key-value 
      pilot: {
          name : "<NAME>", 
          gender : "male", 
          exp : 12
      }, 
       pilotSpaceship () { // function 
          this.pilot.exp += 6; // add 6 years again => 18 years 
          this.pilot.gender = 'Female'; // change the value of the key gender from 'male' to 'female'
          return `Hi I'm ${pilotFirstName} ${pilotLastName} and I worked as a ${this.job} during ${this.pilot.exp} years`; 
          // return 'Hi I'm Elon Musk and I worked as a astronaut during 12 years'
      }
  }; 
  delete spaceship.speed; // Removes the properties => speed:1000, 
  console.log(spaceship.pilotSpaceship()); // 
  // print 'Hi I'm Elon Musk and I worked as a astronaut during 12 years' and call the function pilotSpaceship(); 
  console.log(spaceship); // print the object, peer key-value and the function 
}

thespaceship(); // call the function spaceship(); 