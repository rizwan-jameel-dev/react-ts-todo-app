import { useCallback, useState } from "react";
import AddTodo from "./components/todos/AddTodo";
import { TodosType } from "../types/todos";
import TodoList from "./components/todos/TodoList";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<TodosType[]>([]);

	const handleAddTodo = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (todo.trim() && !todos.some((t) => t.todo === todo.trim())) {
				const single: TodosType = {
					id: Date.now(),
					isDone: false,
					todo: todo,
				};

				setTodos((prevTodos) => [...prevTodos, single]);
				setTodo("");
			}
		},
		[todo]
	);

	return (
		<div className="app">
			<h1 className="heading">Taskify</h1>
			<AddTodo
				todo={todo}
				setTodo={setTodo}
				handleAddTodo={handleAddTodo}
			/>
			<TodoList todos={todos} setTodo={setTodo} setTodos={setTodos} />
		</div>
	);
};

export default App;
