const logEvents = require('./logEvents')

const EventEmitter = require('events');

class MyEmittter extends EventEmitter{};

const myEmittter = new MyEmittter();

myEmittter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
    myEmittter.emit('log')
}, 2000)

