import SelectDropDown from "../select/Select";
import { SearchInputProps } from "../../../types/todos";

import AddIcon from "../../assets/add.svg";

const Header = ({ setSearchTodo, searchTodo, setIsAddTodo, handleSearch, handleFiltered }: SearchInputProps) => {


	return (
		<header className="header">
			<div className="header__container">
				<h1 className="header__title">TODO LIST</h1>
				<div className="header__nav-panel">
					<div className="field">
						<input
							type="text"
							className="field__input"
							placeholder="Search note..."
							value={searchTodo}
							onChange={(e) => {
								const value = e.target.value;
								setSearchTodo(value);
								handleSearch(value);
							}}

							// value=""
						/>
						<svg
							className="field__button"
							width="21"
							height="22"
							viewBox="0 0 21 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.7773 20.184L15.9056 15.312H15.8531C17.3547 13.5415 18.1136 11.2588 17.9709 8.94156C17.8282 6.62433 16.7951 4.45202 15.0876 2.87905C13.3801 1.30608 11.1306 0.454303 8.80958 0.501892C6.48855 0.549481 4.27583 1.49275 2.63427 3.13439C0.992706 4.77602 0.0494786 6.98885 0.00189181 9.30999C-0.045695 11.6311 0.806045 13.8808 2.37894 15.5883C3.95184 17.2958 6.12404 18.329 8.44117 18.4717C10.7583 18.6144 13.0408 17.8555 14.8113 16.3539C14.8113 16.3539 14.8113 16.3914 14.8113 16.4063L19.6831 21.2783C19.7527 21.3485 19.8356 21.4043 19.927 21.4424C20.0183 21.4804 20.1163 21.5 20.2152 21.5C20.3141 21.5 20.4121 21.4804 20.5034 21.4424C20.5948 21.4043 20.6777 21.3485 20.7473 21.2783C20.8242 21.2103 20.8862 21.1272 20.9296 21.0342C20.9731 20.9412 20.9969 20.8402 20.9997 20.7376C21.0025 20.635 20.9842 20.533 20.946 20.4377C20.9077 20.3425 20.8503 20.2561 20.7773 20.184ZM9.00276 16.9685C7.5204 16.9685 6.07133 16.5289 4.83879 15.7053C3.60625 14.8817 2.64561 13.7111 2.07833 12.3415C1.51106 10.9719 1.36263 9.46488 1.65183 8.01094C1.94102 6.55699 2.65485 5.22146 3.70303 4.17322C4.75122 3.12499 6.08669 2.41113 7.54057 2.12192C8.99445 1.83272 10.5014 1.98115 11.871 2.54845C13.2405 3.11575 14.411 4.07644 15.2346 5.30904C16.0581 6.54163 16.4977 7.99077 16.4977 9.4732C16.4977 10.4575 16.3038 11.4322 15.9272 12.3415C15.5505 13.2509 14.9985 14.0772 14.3025 14.7732C13.6065 15.4692 12.7803 16.0213 11.871 16.3979C10.9616 16.7746 9.98701 16.9685 9.00276 16.9685Z"
								fill="#6C63FF"
							></path>
						</svg>
						{searchTodo?.length > 0 && (
							<svg
								onClick={() => setSearchTodo("")}
								className="cross-icon"
								width="800px"
								height="800px"
								viewBox="-0.5 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3 21.32L21 3.32001"
									stroke="#000000"
								></path>
								<path
									d="M3 3.32001L21 21.32"
									stroke="#000000"
								></path>
							</svg>
						)}
					</div>
					<SelectDropDown handleFiltered={handleFiltered} />
					<button className="add-note-btn" onClick={()=> setIsAddTodo(true)}>
						<span style={{fontWeight:"700"}}>New note</span>
						<img src={AddIcon} alt="add todo button" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
