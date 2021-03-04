import React from 'react';
import { Stack, Label } from '@fluentui/react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import '../App.css';

const TodoList = (props) => {
	return (
		<Stack gap={10}>
			{props.todos.length > 0 ? (
				props.todos.map((todo) => (
					<TodoItem
						todo={todo}
						key={todo.id}
						deleteTodo={props.deleteTodo}
					/>
				))
			) : (
				<Label>Woohoo! Todo list is empty.</Label>
			)}
		</Stack>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps)(TodoList);
