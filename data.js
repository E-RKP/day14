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