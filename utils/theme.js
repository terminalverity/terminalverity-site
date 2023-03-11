import Cookies from 'js-cookie'
export function setTheme(theme) {
    Cookies.set('theme', theme)
    document.documentElement.classList.add(theme)
  }
  
  export function removeTheme() {
    Cookies.remove('theme')
    document.documentElement.classList.remove('dark', 'light')
  }
  
  export function initTheme() {
    const storedTheme = Cookies.get('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme(systemTheme)
    }
  }
  