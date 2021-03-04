import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Stack } from '@fluentui/react';
import { connect } from 'react-redux';
import '../App.css';

const Home = (props) => {
	const { todos } = props;

	return (
		<Stack horizontalAlign="center">
			<h1>Todo App using Fluent UI & React</h1>
			<Stack style={{ width: 300 }} gap={25}>
				<AddTodo />
				<TodoList todos={todos} />
			</Stack>
		</Stack>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps)(Home);
