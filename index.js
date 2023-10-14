// // module wrapper function
// // (function (exports,require,module,_filename,_dirname) {
   
// // }
// // )
// console.log(__dirname,__filename);

// class Person {
//    constructor(name,age) {
//     this.name = name;
//     this.age = age;
//    }
//    greeting() {
//     console.log(`My name is ${this.name} and I am ${this.age}`)
//    }
// }

// module.exports = Person;
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message',(data)=> console.log('called Listener',data));
// logger.log('hello node');
// logger.log('hello ne');
// logger.log('hello de');
// logger.log('hello e');
// logger.log('hello no');

const http = require('http');
const path = require('path');
const fs = require('fs');
const { connect } = require('net');
const { Script } = require('vm');

 const server = http.createServer((req,res)=> {
//   if( req.url === '/'){
//   fs.readFile(path.join(__dirname,'public','index.html'),(err,Content)=>{
//     if (err) throw err;
//     res.writeHead(200,{'Content-Type':'text/html'});
//    res.end(Content);

//   })
  
// }
// if( req.url === '/About'){
//   fs.readFile(path.join(__dirname,'public','about.html'),(err,Content)=>{
//     if (err) throw err;
//     res.writeHead(200,{'Content-Type':'text/html'});
//    res.end(Content);

//   })
   
// }
// if(req.url==='/api/users'){
//   const users = [
//     {name:'wende dhufera',age:22},
//     {name:'oliyad kedir',age:23}
//   ];
//   res.writeHead(200,{'Content-Type':'application/json'});
//   res.end(JSON.stringify(users)); 
// }
// Build file path
let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

// Extension of file
let extname = path.extname(filepath);
// Initial content type
let ContentType = 'text/html';
//check ext and set content type
switch (extname){
  case '.js':
 ContentType ='text/javascript';
 break ;
 case'.css':
 ContentType='text/css';
 break ;
 case 'json':
  ContentType= 'application/json';
  break ;
  case '.png':
    ContentType="image/png";
 break;
 case '.jpg':
  ContentType="image/jpg";
  break ;
}
// Read file
fs.readFile(filepath, (err,content)=>{
  if(err){
    if(err.code=='ENOENT'){
      // page not found
      fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
        res.writeHead(200,{'Content-Type':''});
        res.end(content,'utf-8');
      });
    }
    else {
      //semo serve error
      res.writenHead(500);
      res.end('server Error:${err.code}');
    }
  }
   
 else {
  // success
  res.writeHead(200,{'content-Type': ContentType});
  res.end(content,'utf-8');
}

 });
});
const PORT = process.env.PORT || 5000;
server.listen(PORT,() => console.log(`sever running on port ${PORT}`));
