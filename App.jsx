import { useState } from 'react'
import ToDu from './todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to the Todo App!</h1>
    <ToDu />
   
    </>
  )
}

export default App
