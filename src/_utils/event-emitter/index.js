const EventEmitter = require('events')

class CustomEmitter extends EventEmitter {

}

const customEmitter = new CustomEmitter()
const eventName = 'usuario:click'

customEmitter.on(eventName, function(click) {
  console.log('um usuario clicou ', click)
})

customEmitter.emit(eventName, 'clicou no ok')