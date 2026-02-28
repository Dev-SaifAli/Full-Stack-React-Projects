import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default function App () {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Understand React' },
    { id: 2, text: 'freeCodeCamp' },
    { id: 3, text: 'LinkedIn connections' },
  ]);

  function handleAddTodo (text) {
    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
  }
  return (
    <div>
      <h1>My Todo App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
