
// Programm to print 'HELLO WORD'

console.log('HELLO WORD');

// Create a server ans write a programm

var http = require("http");
http.createServer((requete,response) => {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('<h1>Hello Node!!!!</h1>')
}).listen(3000,'localhost')


// 3- file system

var fs = require('fs');
fs.writeFile('welcome.txt','Hello Node', (err) => {
    if (err) {
       return console.error(err);
    }});


fs.readFile('welcome.txt',(err,data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
})
