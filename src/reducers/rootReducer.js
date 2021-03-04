const initState = {
	todos: []
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_TODO') {
		var newTodos = state.todos.filter((todo) => {
			return action.id !== todo.id;
		});
		return {
			...state,
			todos: newTodos
		};
	} else if (action.type === 'ADD_TODO') {
		var newTodos;
		if (action.todoInfo.name != '') {
			const newId = state.todos.length + 1;
			newTodos = [
				...state.todos,
				{
					id: newId,
					name: action.todoInfo.name,
					description: action.todoInfo.description
				}
			];
		}
		return {
			...state,
			todos: newTodos
		};
	}
	return state;
};

export default rootReducer;
