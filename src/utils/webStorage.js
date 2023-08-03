const storagePrefix = 'testReact';

class WebStorage {
  constructor () {
    this.prefixName = storagePrefix ? `${storagePrefix}_` : '';

    try {
      window.localStorage.getItem('test', '');
      window.localStorage.removeItem('test');
      this.storageSupport = true;
    } catch (error) {
      this.storageSupport = false
    }
  }

  getLocal (storageName = '') {
    if (storageName === '') return undefined;

    return JSON.parse(localStorage.getItem(`${this.prefixName}${storageName}`));
  }

  setLocal (storageName = '', value = '') {
    if (storageName === '') return null;

    localStorage.setItem(`${this.prefixName}${storageName}`, JSON.stringify(value));
  }

  clearLocal (storageName = '') {
    if (storageName !== '') return localStorage.remove(`${this.prefixName}${storageName}`);

    localStorage.clear()
  }
}

export default WebStorage;