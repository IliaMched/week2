const http = require("http");
 const fs = require('fs');


const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);


     if( request.url === '/')
        {
            fs.readFile('index.html','utf8',(e,d)=>{
                if(e) {
                    console.log('error');
                }
                else{
                    console.log(d);
                    response.setHeader('Content-Type','text/html');
                    response.end(d);
            }
        })
    }
 else if (request.url === '/about') 
    {
            fs.readFile('about.html','utf8',(e,d)=>{
                if(e) {
                    console.log('error');
                }
                else{
                    console.log(d);
                    response.setHeader('Content-Type','text/html');
                    response.end(d);
            }
        })
    }

    else if (request.url === '/contact') {
            fs.readFile('contact.html','utf8',(e,d)=>{
                if(e) {
                    console.log('error');
                }
                else{
                    console.log(d);
                    response.setHeader('Content-Type','text/html');
                    response.end(d);
            }
        })
    }
    else {
     response.statusCode = 404;
     response.setHeader('Content-Type', 'text/plain')
     response.end('404 Page Not Found');
    }

});

/*
    else if (request.url === '/about') {
     response.setHeader('Content-Type', 'text/html')
     response.end('<h1>Welcome to About Page</h1>');
    }

    else if (request.url === '/contact') {
     response.setHeader('Content-Type', 'text/html')
     response.end('Welcome to Contact Page');
    }
    else {
     response.statusCode = 404;
     response.setHeader('Content-Type', 'text/plain')
     response.end('404 Page Not Found');
    }
});
*/

server.listen(3000, () => console.log('Server running on http://localhost:3000'));


