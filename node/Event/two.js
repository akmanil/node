//create event emitter using events for event modules
const event = require('events');
const em = new event.EventEmitter();

var eventHandler = ()=>{
    console.log("Event triggered");
}

em.on("event",eventHandler);
em.emit("event");