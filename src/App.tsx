import './App.css'
import { PaletteMode, Switch } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { GmThemeProvider } from './styleguide/GmThemeProvider'
import { Some } from './components/Some'

function App() {
  const localStorageMode = localStorage.getItem('theme') as PaletteMode;
  const [mode, setMode] = useState<PaletteMode>(localStorageMode ?? 'dark');

  const switchTheme = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newMode: PaletteMode = checked ? 'dark' : 'light'; 
    localStorage.setItem('theme', newMode);
    setMode(newMode);
  }

  return (
    <GmThemeProvider mode={mode}>
      <Switch onChange={switchTheme} defaultChecked={mode === 'dark'}/>
      <Some />
    </GmThemeProvider>
  )
}

export default App
