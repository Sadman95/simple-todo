import {useState} from 'react';
import {NewTodo} from './types';

interface Props {
    
    onNewTodoSubmit?: (newTodo: NewTodo) => void
}

function AddTodo({onNewTodoSubmit}: Props) {
    
    const [label, setLabel] = useState("");

    function handleSubmit(e: React.FormEvent) {
	e.preventDefault();
	
	if(!label) {
		return
	};

	if(onNewTodoSubmit){
	    onNewTodoSubmit({
		    label,
		    isDone: false
		})
	}

	setLabel("")

    }

    function handleLabelChange(e: React.ChangeEvent<HTMLInputElement>) {
	setLabel(e.target.value)
    }

    return (
	    <form onSubmit={handleSubmit}>
			<input type="text" name="label" onChange={handleLabelChange} value={label} />
			<button type="submit"> Add </button>
	    </form>
    )
}

export default AddTodo