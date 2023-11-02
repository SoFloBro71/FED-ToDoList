import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import { Button, Card, Form, ListGroup } from 'react-bootstrap'


const TodoList = () => {


	let initialList = [
		{
			id: 0,
			text: 'Clean Room',
			done:true
		},
		{
			id: 1,
			text: 'Go Shopping',
			done:false
		},
	]

	let localList = JSON.parse(localStorage.getItem('todos'));

	if(localList){
		initialList = localList;
	}

	console.log("Local list");
	console.log(localList);

	const [list, setList] = useState(initialList)
	const [textInput, setTextInput] = useState('')

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list))
	}, [list])

	const handleTextInput = (e) => {
		setTextInput(e.target.value)
	}

    const addToDoItem = () => {

		let lastItem = list[list.length - 1];
		let id = 1;

		if(lastItem){
			id = lastItem.id + 1
		}

        let newTodo = {
            id: id,
            text: textInput,
            done: false,

        }

        setList((prevList) => [...prevList, newTodo])
    }

	const markAsDone = (id) => {
		const newList = list.map((item) => {
			if (item.id === id){
				item.done = true;
			}

			return item;
		});

		setList(newList);
	}

	const deleteTodo = (id) => {
		const newList = list.filter((item) => {
			return item.id !== id;
		});
		console.log("boop");

		setList(newList);
	}

	let todoItems = list.map((item) => {
		return <TodoItem key={item.id} todo={item} markAsDone={markAsDone} deleteTodo={deleteTodo}/>
	})

	const handleSumbit = (item) => {
		item.preventDefault()
		addToDoItem()
	}


	return (
		

		<Card>
			<Card.Header>TodoList</Card.Header>
			<Card.Body>
				<ListGroup>
					{todoItems}
				</ListGroup>
			</Card.Body>
			<Card.Footer>
				<input type='flush' onChange={handleTextInput} value={textInput} />
				<Button variant='primary' onClick={handleSumbit}>Add</Button>
			</Card.Footer>
		</Card>
	)
}

export default TodoList