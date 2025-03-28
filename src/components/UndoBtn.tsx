import { useEffect, useState } from "react";
import UndoIcon from "../assets/undo-icon.svg";
import { UndoBtnProps } from "../../types/todos";
let intervalId: number;
const UndoBtn = ({
	isShowUndo,
	setIsShowUndo,
	setTodos,
	todos,
}: UndoBtnProps) => {
	const [count, setCount] = useState<number>(5);

	useEffect(() => {
		if (isShowUndo) {
			intervalId = setInterval(() => {
				setCount((pre) => {
					if (pre === 0) {
						setIsShowUndo(false);
						clearInterval(intervalId);
						localStorage.setItem("todosArr", JSON.stringify(todos));
						return 5; // Prevent state from becoming undefined
					}
					return pre - 1;
				});
			}, 1000);
		}

		return () => clearInterval(intervalId); // Cleanup on unmount
	}, [isShowUndo]);

	const handleUndoTodo = () => {
		const items = localStorage.getItem("todosArr");
		setTodos(JSON.parse(items));
		setIsShowUndo(false);
		setCount(5);
		clearInterval(intervalId);
	};

	return (
		<div
			className={`undo   ${isShowUndo ? "active" : ""}`}
			onClick={handleUndoTodo}
		>
			<div className="undo__timer timer">
				<div className="timer__sec">{count}</div>
			</div>
			<div className="undo__text">Undo</div>
			<div className="undo__icon">
				<img src={UndoIcon} alt="undo icon" />
			</div>
		</div>
	);
};

export default UndoBtn;
