const storagePrefix = 'testReact';

class WebStorage {
  private prefixName: string;
  // private storageSupport: boolean;

  constructor() {
    this.prefixName = storagePrefix ? `${storagePrefix}_` : '';

    // try {
    //   window.localStorage.setItem('test', '');
    //   window.localStorage.removeItem('test');
    //   this.storageSupport = true;
    // } catch (error) {
    //   this.storageSupport = false;
    // }
  }

  getLocal<T>(storageName = ''): T | undefined {
    if (storageName === '') return undefined;

    const storedValue = localStorage.getItem(`${this.prefixName}${storageName}`);

    return storedValue ? JSON.parse(storedValue) : undefined;
  }

  setLocal(storageName = '', value: any): void {
    if (storageName === '') return;

    localStorage.setItem(`${this.prefixName}${storageName}`, JSON.stringify(value));
  }

  clearLocal(storageName = ''): void {
    if (storageName !== '') {
      localStorage.removeItem(`${this.prefixName}${storageName}`);
    } else {
      localStorage.clear();
    }
  }
}

const webStorage = new WebStorage();

export default webStorage;