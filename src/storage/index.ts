interface IMemento {
  get<T>(key: string): T | undefined;
  update(key: string, value: any): Promise<void>;
}

class Memento implements IMemento {
  public get<T>(key: string): T | undefined {
    console.log('Memento get', key, localStorage.getItem(key));
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  public async update(key: string, value: any): Promise<void> {
    console.log('Memento update', key, value);
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const memento = new Memento();
