import TodoItem from './TodoItem';

function TodoList ({ todos, onDelete, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}
export default TodoList;
