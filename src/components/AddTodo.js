import React, { useState } from 'react';
import { Stack, TextField, PrimaryButton } from '@fluentui/react';
import { connect } from 'react-redux';

const AddTodo = (props) => {
	const [todoInfo, setTodoInfo] = useState({ name: '', description: '' });

	const changeHandler = (e) => {
		setTodoInfo({
			...todoInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleClick = () => {
		props.addTodo(todoInfo);
		setTodoInfo({ name: '', description: '' });
	};

	return (
		<Stack>
			<Stack vertical>
				<Stack.Item gap="25">
					<TextField
						name="name"
						placeholder="Add title"
						value={todoInfo.name}
						onChange={changeHandler}
					/>
				</Stack.Item>
				<Stack.Item gap="25">
					<TextField
						name="description"
						placeholder="Add description"
						value={todoInfo.description}
						onChange={changeHandler}
					/>
				</Stack.Item>
				<PrimaryButton onClick={handleClick}>Add</PrimaryButton>
			</Stack>
		</Stack>
	);
};

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (todoInfo) => {
			dispatch({ type: 'ADD_TODO', todoInfo: todoInfo });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
