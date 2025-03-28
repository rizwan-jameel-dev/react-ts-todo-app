import { useCallback, useEffect, useState } from "react";
import { TodosTypeProps } from "../types/todos";
import TodoList from "./components/todos/TodoList";
import Header from "./components/header";
import AddTodoModal from "./components/modal/AddTodo";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<TodosTypeProps[]>([]);
	const [searchTodo, setSearchTodo] = useState<string>("");
	const [isAddTodo, setIsAddTodo] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const todosArr = localStorage.getItem("todosArr") || [];
		if (todosArr) {
			const parseArr = todosArr.length > 0 ? JSON.parse(todosArr) : [];
			setTodos(parseArr);
			setLoading(false);
		}
	}, []);

	const handleAddTodo = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (todo.trim() && !todos.some((t) => t.todo === todo.trim())) {
				const single: TodosTypeProps = {
					id: Date.now(),
					isDone: false,
					todo: todo,
				};

				const latestTodos = [...todos, single];
				setTodos(latestTodos);
				setTodo("");
				setIsAddTodo(false);
				localStorage.setItem("todosArr", JSON.stringify(latestTodos));
			}
		},
		[todo]
	);

	const handleSearch = (val: string): void => {
		const todosArr = localStorage.getItem("todosArr") || [];

		if (todosArr?.length > 0) {
			const parseArr = JSON.parse(todosArr);
			console.log(parseArr, "check arr");
			const searchVal = parseArr.filter((item) =>
				item.todo.includes(val)
			);
			setTodos(searchVal);
		}
	};

	const handleFiltered = (value: string): void => {
		const todosArr = localStorage.getItem("todosArr") || [];

		if (todosArr?.length > 0) {
			const parseArr = JSON.parse(todosArr);
			const searchVal =
				value !== "all"
					? parseArr.filter((item) => {
							if (value == "complete") {
								return item.isDone;
							} else if (value == "incomplete") {
								return !item.isDone;
							}
					  })
					: parseArr;
			setTodos(searchVal);
		}
	};

	return (
		<div className="app">
			<Header
				setIsAddTodo={setIsAddTodo}
				searchTodo={searchTodo}
				setSearchTodo={setSearchTodo}
				handleSearch={handleSearch}
				handleFiltered={handleFiltered}
			/>
			<main className="main">
				<section className="main__list list">
					<TodoList
						todos={todos}
						setTodo={setTodo}
						setTodos={setTodos}
						loading={loading}
					/>
				</section>
				<AddTodoModal
					todo={todo}
					setTodo={setTodo}
					isAddTodo={isAddTodo}
					handleAddTodo={handleAddTodo}
				/>
			</main>
		</div>
	);
};

export default App;
