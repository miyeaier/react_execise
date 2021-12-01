let result = null
if ( 1==2) {
  result = 'Thomas'
  console.log(result);
} else {
  result = 'Oliver'

  console.log(result);
}


const result2 = 1==1 ? 'Thomas' : 'Oliver' 
console.log(result2);

const name = 'thomas ochman MNMN'
const parts = name.split(' ') // parts: ['thomas', 'jackson']
console.log(parts);

const name2 = 'thomas, ochman, MNMN'
const parts2 = name2.split(',') // parts: ['thomas', 'jackson']
console.log(parts2);


let first = parts[0] // first: 'thomas'
first = first.toUpperCase() // first: 'THOMAS'
console.log(first);


const name = 'thomas ochman'
const first = name.split(' ')[0].toUpperCase()

// We could have even done this:
const first = 'thomas ochman'.split(' ')[0].toUpperCase()