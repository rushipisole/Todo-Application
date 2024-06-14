import './App.css'
import { CreateTodos } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  return (
    <>
      <CreateTodos />
      <Todos todos={todos} />
    </>
  )
}

export default App
