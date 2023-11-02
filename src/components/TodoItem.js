import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

const TodoItem = (props) => {

    const add = () => {
        props.markAsDone(props.todo.id)
    };

    const deleteTodo = () => {
        props.deleteTodo(props.todo.id)
    }

    let itemHTML = (
    <>
        {props.todo.text}
        <Badge  pill bg="sucess" className="float-end" > </Badge>
        <button onClick={add}>mark as done</button>
    </>);

    if(props.todo.done){
        itemHTML = (
            <>
            <span className="done">{props.todo.text}</span>
            <button onClick={deleteTodo}>Delete</button>

            </>
        )
    }

    return (
    <ListGroup.Item>
			{itemHTML}
		</ListGroup.Item>
    )
}

export default TodoItem;