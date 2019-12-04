const server = require('./server');

const port = 8000; 

server.listen(port, () => {
    console.log(`\n API running on port ${port} \n`);
});

 