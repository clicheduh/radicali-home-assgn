import React, { useState } from 'react';
import '../App.css';
import {
	Stack,
	Label,
	IconButton,
	Dialog,
	DialogFooter,
	DefaultButton,
	PrimaryButton,
	DialogType,
	Text
} from '@fluentui/react';
import { connect } from 'react-redux';

const TodoItem = (props) => {
	const [openDeleteModal, setOpenModal] = useState(true);

	const handleClick = () => {
		props.deleteTodo(props.todo.id);
		setOpenModal(true);
	};

	return (
		<Stack>
			<Stack
				horizontal
				verticalAlign="center"
				horizontalAlign="space-between"
			>
				<Stack vertical>
					<Label>{props.todo.name}</Label>
					<Text>{props.todo.description}</Text>
				</Stack>
				<IconButton
					iconProps={{ iconName: 'trash' }}
					className="clearButton"
					onClick={() => {
						setOpenModal(!openDeleteModal);
					}}
				/>
			</Stack>
			<Dialog
				hidden={openDeleteModal}
				dialogContentProps={{
					type: DialogType.normal,
					title: 'Delete',
					subText:
						'Are you sure you want to delete this item? This cannot be undone.'
				}}
				modalProps={{
					isBlocking: false
				}}
			>
				<DialogFooter>
					<PrimaryButton text="Yes" onClick={handleClick} />
					<DefaultButton
						text="No"
						onClick={() => {
							setOpenModal(true);
						}}
					/>
				</DialogFooter>
			</Dialog>
		</Stack>
	);
};

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTodo: (id) => {
			dispatch({ type: 'DELETE_TODO', id: id });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
