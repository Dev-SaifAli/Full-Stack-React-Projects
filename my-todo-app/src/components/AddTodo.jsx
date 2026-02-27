import { useState } from 'react';

export default function AddTodo ({ onAdd }) {
  const [text, setText] = useState('');

  function handleSubmit (e) {
    e.preventDefault();

    if (text.trim() === '') return;

    onAdd(text);

    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onInput={setText(e.target.value)}
        placeholder='Enter a new todo...'
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
}
