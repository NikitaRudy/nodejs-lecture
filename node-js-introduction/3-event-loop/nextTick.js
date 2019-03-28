const { EventEmitter } = require('events');

class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.emit('init_event');
        // process.nextTick(() => this.emit('init_event'));
    }
}

const emitter = new MyEmitter();
emitter.on('init_event', () => console.log('INIT EVENT!'));