import TodoItem from "./TodoItem";


 const todos = [
        {id:1, text:'Learn React Basics'},
        {id:2, text:'Build a Todo App'},
        {id:3, text:'Understand components'},
        {id:4, text:'Understand components'},
    ];

function TodoList(){
   return(
    <ul>
        {todos.map((todo)=>
        (
            <TodoItem key={todo.id} text = {todo.text}/>
        ))}
    </ul>
   )


}
export default TodoList;