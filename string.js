// Manual hard returns with \\n isn't fun
const str1 = 'multiline\nwith\nmanual\nhard returns'
console.log(str1);

// This is much nicer.
const str = `
  multiline
  without
  the
  mess
`
console.log(str);


// This is much nicer.
const str3 = `
  multiline
  without
  the
  mess
`
const something = 'ugly stuff'
const str5 = 'instead of ' + something + ' like this'
console.log(str5);

const something1 = 'lovely stuff'
const str6 = `you can do ${something1} like this`
console.log(str6);