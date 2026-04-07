import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import CategoryFilter from './components/CategoryFilter';

export default function App () {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [todoSet, setTodoSet] = useState(new Set());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredJobs =
    activeCategory === 'All'
      ? todos
      : todos.filter(todo => todo.category === activeCategory);

  function handleAddTodo (text) {
    const normalized = text.toLowerCase();

    if (todoSet.has(normalized)) {
      alert('Todo already exists');
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos(prev => [...prev, newTodo]);
    setTodoSet(prev => new Set([...prev, normalized]));
  }

  function handleDelete (id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  function handleToggle (id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Check duplicate

  return (
    <div>
      <h1>My Todo App</h1>
      <AddTodo todos={todos} onAdd={handleAddTodo} />
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
