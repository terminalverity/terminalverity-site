import { useState } from 'react'
import { setTheme, removeTheme } from '../utils/theme'
import { MdDarkMode } from "react-icons/md";
import Cookies from 'js-cookie'
function ThemeToggleButton() {
  const [theme, setThemeState] = useState(Cookies.get('theme') || 'light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setThemeState('dark')
    } else {
      removeTheme()
      setThemeState('light')
    }
  }

  return (
    <MdDarkMode className=" cursor-pointer text-2xl  text-white" onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    </MdDarkMode>
  )
}

export default ThemeToggleButton
