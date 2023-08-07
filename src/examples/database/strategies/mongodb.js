const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('Item Criado no MongoDB')
  }
}

module.exports = MongoDB