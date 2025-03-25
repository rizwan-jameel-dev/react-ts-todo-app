import { useState } from "react";
import { SingleTodoType, TodosType } from "../../../types/todos";

const SingleTodo = ({
	todo,
	handleDeleteTodo,
	handleSaveEdit,
	handleDoneTodo
}: SingleTodoType) => {
	const [isEditTodo, setIsEditTodo] = useState<boolean>(false);
	const [selectedTodo, setSelectedTodo] = useState<TodosType>(todo);

	const handleToggle = () => {
		setIsEditTodo(true);
	};
	const handleEditTodo = (e:React.ChangeEvent<HTMLInputElement>) => {
		const editTodo = {
			...selectedTodo,
			todo: e.target.value,
		};
		setSelectedTodo(editTodo);
	};

	const handleSave = () => {
		setIsEditTodo(false);
		handleSaveEdit(selectedTodo);
	};

	return (
		<div  onClick={()=>handleDoneTodo(todo.id)}>
			{isEditTodo ? (
				<input
					type="text"
					onChange={handleEditTodo}
					value={selectedTodo?.todo}
				/>
			) : (
				<p className={`${todo.isDone ? "line-through":""}`}>{todo?.todo}</p>
			)}
			{isEditTodo ? (
				<span onClick={handleSave}>save</span>
			) : (
				<span className="icon" onClick={handleToggle}>
					edit
				</span>
			)}

			<span className="delete" onClick={() => handleDeleteTodo(todo.id)}>
				delete
			</span>
		</div>
	);
};

export default SingleTodo;
