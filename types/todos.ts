export type AddTodoProps = {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type TodosType = {
	id: number;
	isDone: boolean;
	todo: string;
};

export type TodosListType = {
	todos: TodosType[];
	setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
};

export type SingleTodoType = {
	todo: TodosType;
	handleDeleteTodo: (id: number) => void;
	handleSaveEdit: (todo: TodosType) => void;
	handleDoneTodo: (id: number) => void;
};
