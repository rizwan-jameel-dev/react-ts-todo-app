export type AddTodoProps = {
	todo: string;
	isAddTodo: boolean;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type TodosTypeProps = {
	id: number;
	isDone: boolean;
	todo: string;
};

export type TodosListType = {
	todos: TodosTypeProps[];
	setTodos: React.Dispatch<React.SetStateAction<TodosTypeProps[]>>;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	loading: false;
};

export type SingleTodoType = {
	todo?: TodosTypeProps;
	handleDeleteTodo: (id: number) => void;
	handleSaveEdit: (todo: TodosTypeProps) => void;
	handleDoneTodo: (id: number) => void;
};

export type SearchInputProps = {
	searchTodo: string;
	setSearchTodo: React.Dispatch<React.SetStateAction<string>>;
	setIsAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
	handleSearch: (val: string) => void;
	handleFiltered: (value: string) => void;
};

export type UndoBtnProps = {
	isShowUndo: boolean;
	setIsShowUndo: React.Dispatch<React.SetStateAction<boolean>>;
	setTodos: React.Dispatch<React.SetStateAction<TodosTypeProps[]>>;
	todos: TodosTypeProps[];
};

export type SelectDropDownProps = {
	handleFiltered: (value: string) => void;
};

export type SelectedOptionsType = {
	value: string;
	label: string;
};
