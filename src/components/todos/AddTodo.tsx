import { useRef } from "react";
import { AddTodoProps } from "../../../types/todos";

import "./style.css";

const AddTodo = ({ todo, setTodo, handleAddTodo }: AddTodoProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form className="form_container" onSubmit={(e)=>{
			handleAddTodo(e);
			inputRef.current?.blur();
		}}>
			<input
				ref={inputRef}
				className="form_field"
				onChange={(e) => setTodo(e.target.value)}
				value={todo}
				type="text"
			/>
			<button className="form_btn" disabled={todo?.length == 0}>
				Submit
			</button>
		</form>
	);
};
export default AddTodo;
