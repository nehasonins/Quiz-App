import { useState } from 'react'
import './App.css'
import Quiz from './component/quiz' // Note: Ensure the import matches the file name accurately. The file system might be case sensitive.
import Welcome from './component/Welcome'

function App() {
  const [quizStarted, setQuizStarted] = useState(false)

  return (
    <>
      <div>
        {!quizStarted ? (
          <Welcome onStart={() => setQuizStarted(true)} />
        ) : (
          <Quiz />
        )}
      </div>
    </>
  )
}

export default App
