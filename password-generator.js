
var generator = require('generate-password');

var password = generator.generate({
    length : 16,
    numbers : true
})

console.log(password);