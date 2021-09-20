const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
}
emitter.on('john', callback1);

emitter.on('john', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('john', { message: 1 });
emitter.emit('john', { message: 2 });
//emitter.removeListener('john', callback1);
emitter.removeAllListeners('john');
emitter.emit('john', { message: 3 });

