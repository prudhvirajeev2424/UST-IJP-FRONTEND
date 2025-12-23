import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TP_manager_Coverletter_popup from './components/TP_manager_Coverletter_popup'
import Application from './pages/Application'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TP_manager_Coverletter_popup/> */}
      <Application/>
    </>
  )
}

export default App
