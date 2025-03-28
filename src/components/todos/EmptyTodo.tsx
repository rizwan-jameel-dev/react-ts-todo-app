import EmptyTodoImg from "../../assets/empty-todo.png";
const EmptyTodo = () => {
	return (
		<div className="empty_todo">
			<div className="empty_todo__preview">
				<img src={EmptyTodoImg} alt="empty todo" />
			</div>

			<p className="empty_todo__message">Oops... it's empty :(</p>
		</div>
	);
};

export default EmptyTodo;
