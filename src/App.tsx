import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TP_manager_Application_popup_coverletter from './components/TP_manager_Application_popup_coverletter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TP_manager_Application_popup_coverletter/>
    </>
  )
}

export default App
