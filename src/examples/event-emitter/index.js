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
  } else if(i == 10) {
    customEmitter.emit(eventName, 'Escreva algo!')
    i++
  } else {
    customEmitter.emit(eventName, 'clicou no ok ' + i)
    i++
  }
}, 500);

const stdin = process.openStdin()

stdin.addListener('data', function(value) {
  console.log(`Você digitou: ${value.toString()}`)
})
