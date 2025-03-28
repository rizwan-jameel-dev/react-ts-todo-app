import { AddTodoProps } from "../../../types/todos";
import "./add-todo.css";

const AddTodoModal = ({ isAddTodo, todo, setTodo, handleAddTodo }: AddTodoProps) => {
	return (
		<div className={`popup ${isAddTodo ? "opened" : ""} `} id="popup-card">
			<div className="popup__card">
				<h2 className="popup__title">New Note</h2>
				<form className="popup__form"  onSubmit={handleAddTodo}>
					<div className="field">
						<input
							className="field__input field__input_p"
							placeholder="New note..."
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
						/>
					</div>
					<div className="popup__buttons">
						<button
							type="submit"
							className="popup__button popup__button_stroke"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="popup__button popup__button_filled"
						>
							Apply
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddTodoModal;
