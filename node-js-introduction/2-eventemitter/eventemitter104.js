class EventEmitter {
    constructor() {
        this._listeners = new Map();
    }

    on(event, listener) {
        const eventListeners = this._listeners.get(event)
        
        if (eventListeners) {
            this._listeners.set(event, eventListeners.concat(listener));
        } else {
            this._listeners.set(event, [listener]);
        }
    }

    emit(event, ...args) {
        const eventListeners = this._listeners.get(event);

        if (eventListeners) {
            eventListeners.forEach(listener => listener(...args));
        }
    }
}

const emitter = new EventEmitter();

emitter.on('event', (...args) => console.log('event', ...args));
emitter.emit('event', 'a', 'b', 'c');
