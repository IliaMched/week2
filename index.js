//node js : non blocking
//synchronous

/*console.log("This is the first statement")

setTimeout(()=>{console.log("This is the second statement")},1000) //call back

console.log("This is the third statement")

//arrow function
//()=>{}*/
//http
//import
//read file
const http=require('http');
const fs = require('fs');

//server
const server = http.createServer(
    (request,response)=>{
    console.log(request.url);
    console.log(request.method);

    if( request.url === '/')
    {
        fs.readFile('index.html','utf8',(e,d)=>{
            if(e)
            {
                console.log('error');
            }
            else
            {
                console.log(d);
                response.setHeader('Content-Type','text/html');
                response.end(d);
        }
    })
}});
        
    //}
    /*else if(request.url==='/about')
    {
        response.setHeader('Content-Type', 'text/html');
        response.end('<h1 style ="background-color:blue"> Hello student </h1>');
    }
    else{
        response.statusCode=404;
        response.setHeader("content-Type","text/plain");
        response.end('page not found');
    }
    //status code 
   // response.writeHead(200,{'Content-Type': 'text/plain'})
//     response.statusCode=200;

//    response.setHeader('Content-Type', 'text/plain');
    //response.write('hello world');
    //response.end('hello students');
}

);*/
server.listen(4000,()=>console.log('server running'));

//fs core module reading, sync, async


//sync
/*console.log('this is syn read');

const data = fs.readFileSync('test.txt','utf8');
console.log(data);

console.log('last stmt');
//error 
//Asynchro file: (path,encoding,callback function)
//const fs = require('fs');
//sync
console.log('this is asyn read');

fs.readFile('test.txt','utf8',(err,data)=>{
if(err) throw err;
console.log(data);
});

console.log('last stmt');*/


