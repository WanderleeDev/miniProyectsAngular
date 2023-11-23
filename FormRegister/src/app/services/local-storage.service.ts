import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  loadLocalStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key);

    if (data !== null) {
      return JSON.parse(data) as T
    }

    return null
  }

  saveLocalStorage<T>(key :string ,obj: T ): void {
    if (!obj) {
      throw new Error(`${obj} sin contenido`)
    }
    localStorage.setItem(key, JSON.stringify(obj))
  }
}
