let car = {
brand: 'Toyota',
model: 'x',
year: 1999,
color: 'blue'
}

let ncar = Object.values(car)
for (i=0; i<ncar.length;i++){
  console.log(ncar[i])
}

car.engine = 'diesel'
console.log(car)
console.log(Object.keys(car))
console.log(Object.values(car))
console.log(car.hasOwnProperty('model'))

let student = {
  nome: 'luca',
  cognome: 'rossi',
  age: 18,
  skill: ['matematica', 'geografia', 'robotica']

}

function getFullName(oggetto){

  let nomeCompleto = oggetto.nome+' '+ oggetto.cognome
  return nomeCompleto;

}

console.log(getFullName(student))

student.skill.push('inglese')
console.log(student)

console.log(Object.entries(student))

function knowSkill (oggetto){

  let skiller = student.skill
  if (skiller.length<3){
    console.log('troppo debole')
  }else{
    return true;
  }
}

console.log(knowSkill(student))

let library = [

  {
    title: 'Cronaca di una morte annunciata',
    author: 'Gabriel Garcia Marquez',
    year: 1984,
    isAvaible: false
  },

  {
    title: '1963',
    author: 'Stephen King',
    year: 2007,
    isAvaible: true
  },

  {
    title: 'American Gods',
    author: 'Neil Gaiman',
    year: 2002,
    isAvaible: false
  },

  {
    title: 'Il signore degli Anelli',
    author: 'Tolkien',
    year: 1945,
    isAvaible: true
  }
]

function getAvailableBooks(oggetto){

  let isAv = []
  for (i=0; i<oggetto.length;i++){
    if (oggetto[i].isAvaible === true){
      isAv.push(oggetto[i])
      
    }
   
}

return isAv;
}

console.log(getAvailableBooks(library))

function borrowBook(titole){

  for (i=0; i<library.length;i++){
    if (library[i].title === titole){
      library[i].isAvaible = false
    }
  }
  
}

borrowBook('Il signore degli Anelli')
console.log(library)


function returnTitle (titelo){

  for (i=0; i<library.length;i++){
    if (library[i].title === titelo){
      library[i].isAvaible = true;
    }
  }
}

returnTitle('American Gods');

function avgYear (oggetto){

  let età = 0
  let somma = 0
  let media = 0
  for (i=0; i<library.length;i++){
     età = 2025-library[i].year
      somma = somma+età
  }

  media = somma / library.length
   return media;
}

console.log(avgYear(library))


function getBooksByAuthor(autore){

  let arr = []
  for (i=0; i<library.length;i++){
    if (library[i].author === autore){
      arr.push(library[i].title)
    }
  }
  return arr;
}

console.log(getBooksByAuthor('Stephen King'))

function countAvailableBooks() {

  let counter = 0
  for (i=0; i<library.length;i++){
    if (library[i].isAvaible === true){
      counter++;
    }
  }
  return counter;
}

console.log(`Ci sono ${countAvailableBooks(library)} libri disponibili in libreria`)

function removeBookByTitle(titolo){

  for (i=0; i<library.length;i++){
    if (titolo === library[i].title){
      library.splice([i], 1)
    }
  }
}

console.log(removeBookByTitle(''))

function addNewBook(oggetto){

  for (i=0; i<library.length;i++){
    if (library[i].title === oggetto.title){
      console.log('libro già esistente')
      return;
  }
 
}
library.push(oggetto)
}

addNewBook({title: 'Lucs',
    author: 'Lucrazio Verti',
    year: 1981,
    isAvaible: false})

console.log(avgYear(library))


function getBooksPublishedBefore(yearr){

  let newArr = []
  for (i=0; i<library.length;i++){
    if (library[i].year < yearr){
      newArr.push(library[i].title)
    }
  }
  return newArr;
}

console.log(getBooksPublishedBefore(2000))


