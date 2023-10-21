import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  checkDarkMode (): void {
    if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage['theme'] = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage['theme'] = 'light'
    }
  }

  darkModeToggle () {
    document.documentElement.classList.toggle('dark')
    const isDarkMode = document.documentElement.matches('.dark')
    isDarkMode
      ? localStorage['theme'] = 'dark'
      : localStorage['theme'] = 'light'
  }
}
