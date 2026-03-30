function TodoItem (props) {
  console.log('Task:', props.text, 'is completed?', props.completed);
  return (
    <>
      <input type='checkbox' onChange={props.onToggle}></input>
      <li style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>
        {props.text}
      </li>
      <button onClick={props.onDelete}>Delete</button>
    </>
  );
}
export default TodoItem;
