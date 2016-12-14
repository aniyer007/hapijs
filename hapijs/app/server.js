'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3222 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.route({
  method: 'GET',
  path: '/anand/{name}',
  handler: function(request,reply){
    reply('Hello Anand!!\n You are at the next level of our URL. \n The parameter passed was:'+encodeURIComponent(request.params.name));
  }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
