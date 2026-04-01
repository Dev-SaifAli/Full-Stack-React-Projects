import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import CategoryFilter from './components/CategoryFilter';
export default function App () {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Understand React', completed: false, category: 'Work' },
    { id: 2, text: 'freeCodeCamp', completed: false, category: 'Personal' },
    { id: 3, text: 'LinkedIn connections', completed: false, category: 'Work' },
  ]);

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredJobs =
    activeCategory === 'All'
      ? todos
      : todos.filter(todo => todo.category === activeCategory);

  function handleAddTodo (text) {
    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
  }

  function handleDelete (id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleToggle (id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div>
      <h1>My Todo App</h1>
      <AddTodo onAdd={handleAddTodo} />
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <TodoList
        todos={filteredJobs}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}
