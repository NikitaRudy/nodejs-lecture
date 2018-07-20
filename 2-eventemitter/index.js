const { EventEmitter } = require('events');

const emitter = new EventEmitter();

function someEventListener(...args) {
    console.log('some event: ', ...args)
}

emitter.on('SOME_EVENT', someEventListener);
emitter.emit('SOME_EVENT', 'some', 'arguments');

emitter.removeListener('SOME_EVENT', someEventListener);
emitter.emit('SOME_EVENT', 'some', 'arguments');
