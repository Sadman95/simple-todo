import {v4 as uuidv4} from 'uuid';
import { Todo, NewTodo } from './types';
import { useState } from 'react';
import TodoList from './TodoList';
import AddToDo from './AddToDo';

function App() {
    
  const [todos, setTodos] = useState<Todo[]>([
    {id: uuidv4(), label: "Cleaning", isDone: true},
    {id: uuidv4(), label: "Cooking", isDone: false}
  ])

  const toggleTodo = (todo: Todo) => {
      setTodos(todos.map(
	  td => td.id === todo.id ? {...td, isDone: !td.isDone} : td
      ))
  }

  const addTodo = (newTodo: NewTodo) => {
    setTodos([...todos, {
	...newTodo,
	id: uuidv4()
    }]) 
  }

  return (
    <div style={{padding: '16px',borderRadius: '16px',width: '20%',textAlign: 'center', margin: '10% auto', border: '1px solid red'}}>
      <h1>ToDo</h1>
	<TodoList onTodoClick={toggleTodo} toDos={todos} />
	<AddToDo onNewTodoSubmit={addTodo} />
    </div>
  );
}

export default App
