import { Todo } from "./types";
import ToDoItem from "./ToDoItem";

interface Props{
    toDos: Array<Todo>
    onTodoClick: (todo: Todo) => void
}


const ListOfTodo: React.FC<Props> = ({toDos, onTodoClick})=> {
    return (
        
        <ul>
            {
                toDos.map(todo => <ToDoItem key={todo.id} todo={todo} onTodoClick={onTodoClick}/>)
            }
        </ul>
    )
}
export default ListOfTodo