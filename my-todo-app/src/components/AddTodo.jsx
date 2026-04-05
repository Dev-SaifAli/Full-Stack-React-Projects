import { useState } from 'react';

export default function AddTodo ({ onAdd, todos }) {
  const [text, setText] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    if (text.trim() === '') {
      alert('Please Enter something!');
      return;
    }

    const isDuplicate = todos.some(
      todo => todo.text.toLowerCase() === text.toLowerCase()
    );
    console.log(isDuplicate);
    if (isDuplicate) {
      alert('Todo already exists');
      return;
    }

    onAdd(text);

    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Enter a new todo...'
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
}
