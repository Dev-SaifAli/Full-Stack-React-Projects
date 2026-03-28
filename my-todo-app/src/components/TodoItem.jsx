function TodoItem (props) {
  return (
    <>
      <li>{props.text}</li>
      <button onClick={props.onDelete}>Delete</button>
    </>
  );
}
export default TodoItem;
