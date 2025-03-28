import { useCallback, useState } from "react";
import { TodosListType, TodosTypeProps } from "../../../types/todos";
import SingleTodo from "./SingleTodo";
import EmptyTodo from "./EmptyTodo";

import "./style.css";
import UndoBtn from "../UndoBtn";

const TodoList = ({ todos, setTodos, loading }: TodosListType) => {
	const [isShowUndo, setIsShowUndo] = useState(false);
	const handleDeleteTodo = useCallback(
		(id: number): void => {
			const filterArr = todos.filter((item) => item.id !== id);
			setTodos(filterArr);
			setIsShowUndo(true);
		},
		[setTodos, todos]
	);


	const handleSaveEdit = useCallback(
		(todo: TodosTypeProps) => {
			const updateTodoList = todos.map((item) => {
				if (item.id === todo.id) {
					return todo;
				} else {
					return item;
				}
			});
			setTodos(updateTodoList);
			localStorage.setItem("todosArr", JSON.stringify(updateTodoList));
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
			localStorage.setItem("todosArr", JSON.stringify(updateTodoList));
		},
		[setTodos, todos]
	);

	return (
		<div className="list__container">
			<div className="list__container-small">
				{todos?.length > 0 ? (
					<>
						{todos?.map((todo, index) => (
							<SingleTodo
								key={index}
								todo={todo}
								handleSaveEdit={handleSaveEdit}
								handleDeleteTodo={handleDeleteTodo}
								handleDoneTodo={handleDoneTodo}
								
							/>
						))}
					</>
				) : (
					!loading && <EmptyTodo />
				)}
				<UndoBtn
					todos={todos}
					isShowUndo={isShowUndo}
					setIsShowUndo={setIsShowUndo}
					setTodos={setTodos}
				/>
			</div>
		</div>
	);
};

export default TodoList;
