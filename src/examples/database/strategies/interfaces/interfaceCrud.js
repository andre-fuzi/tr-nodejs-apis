class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Exception")
  }
}

class ICrud {
  create(item) {
    throw new NotImplementedException()
  }
  delete(id) {
    throw new NotImplementedException()
  }
  read(id) {
    throw new NotImplementedException()
  }
  update(id, item) {
    throw new NotImplementedException()
  }
}

module.exports = ICrud