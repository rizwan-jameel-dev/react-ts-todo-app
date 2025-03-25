import { useCallback } from "react";
import { TodosListType, TodosType } from "../../../types/todos";
import SingleTodo from "./SingleTodo";

const TodoList = ({ todos, setTodos }: TodosListType) => {
	const handleDeleteTodo = useCallback(
		(id: number): void => {
			const filterArr = todos.filter((item) => item.id !== id);
			setTodos(filterArr);
		},
		[setTodos, todos]
	);

	const handleSaveEdit = useCallback(
		(todo: TodosType) => {
			const updateTodoList = todos.map((item) => {
				if (item.id === todo.id) {
					return todo;
				} else {
					return item;
				}
			});
			setTodos(updateTodoList);
		},
		[setTodos, todos]
	);

	const handleDoneTodo = useCallback(
		(id: number) => {
			const updateTodoList = todos.map((item) => {
				if (item.id === id) {
					return {
						...item,
						isDone: !item.isDone,
					};
				} else {
					return item;
				}
			});
			setTodos(updateTodoList);
		},
		[setTodos, todos]
	);

	return (
		<div>
			{todos?.map((todo, index) => (
				<SingleTodo
					todo={todo}
					key={index}
					handleSaveEdit={handleSaveEdit}
					handleDeleteTodo={handleDeleteTodo}
					handleDoneTodo={handleDoneTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
