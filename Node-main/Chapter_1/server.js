const os = require('os');
const path = require('path')
const{add, subtract, multiply, divide} = require('./math') //const math = require('./math') possible option

console.log(add(4,3)) // For second option console.log(math.add(4,3))
console.log(subtract(4,3))
console.log(multiply(4,3))
console.log(divide(4,3))


console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname) // Similar output with path module console.log(path.dirname(__filename))
console.log(__filename)

console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))