// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ProjectInfo from './components/tp_manager/application/ProjectInfo'
import { projectData } from './data/mockdata'
// import CoverLetterPopup from './components/tp_manager/application/CoverLetterPopup' 
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <CoverLetterPopup/> */}
      <ProjectInfo project={projectData} />
    </>
  )
}

export default App
