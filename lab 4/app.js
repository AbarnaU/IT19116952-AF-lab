//Question 1

console.log("hello");


//Question 2

const os = require ('os');

console.log('Architecture '+os.arch());
console.log('CPU '+os.cpus().length);
console.log('OS '+os.platform());


//Question 3
//part b

const fs = require('fs');

//part c

const fileName = __dirname + '/test.txt';

//part d

fs.readFile(fileName,(err,data)=> {
    if (err){
        console.error(err);
    }
    console.log(data.toString());
});

//part e

fs.readFile(fileName,(err,data)=> {
    if (err){
        console.error(err);
    }
    console.log(data);
});

// part f

const data = fs.readFileSync(fileName);
console.log(data.toString());

//Question 4
// part a

const fs = require('fs');
const fileName = __dirname + '/test.txt';
const outfileName = __dirname + '/test - Copy.txt';

// part b

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outfileName);

// part c

readStream.pipe(writeStream);

// part e
readStream.on('data', data => {
    console.log(data.toString());
});

// Question 5
// part a

const http = require('http');

//part b

http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);
console.log("The server listening to port 3000");

//part d

http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    switch (req.method){
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;

        case 'POST':
            req.on('data',data =>{
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    if(err){
        console.error(err);
    }
    console.log('Server is listening to port 3000');
});