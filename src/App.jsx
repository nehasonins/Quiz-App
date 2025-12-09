import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quiz from './component/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Quiz />
      </div>

    </>
  )
}

export default App
