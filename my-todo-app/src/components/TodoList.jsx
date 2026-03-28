import TodoItem from './TodoItem';

function TodoList ({ todos, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}
export default TodoList;
