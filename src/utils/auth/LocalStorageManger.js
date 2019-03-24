export class LocalStorageManager {
  removeFieldFromStorage(name) {
    return window.localStorage.removeItem(name)
  }

  setFieldInStorage({ name, value }) {
    window.localStorage.setItem(name, value)
  }

  getFieldFromStorage(name) {
    return window.localStorage.getItem(name)
  }
}
