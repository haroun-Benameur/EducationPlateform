import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import TaskList from './components/TaskList.JSX'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='text-red-500' >Redux Toolkit with React Vite</h1> 
   <Counter/>

   <div>
            <h1>React + Django + Redux Toolkit</h1>
            <TaskList />
    </div>
    </>
  )
}

export default App
