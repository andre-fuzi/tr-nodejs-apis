const EventEmitter = require('events')

class CustomEmitter extends EventEmitter {

}

const customEmitter = new CustomEmitter()
const eventName = 'usuario:click'

customEmitter.on(eventName, function(click) {
  console.log('um usuario clicou ', click)
})

let i = 0

const main = setInterval(() => {
  if (i > 10) {
    clearInterval(main)
  } else {
    customEmitter.emit(eventName, 'clicou no ok ' + i)
    i++
  }
}, 500);
