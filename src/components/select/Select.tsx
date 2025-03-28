import { useState } from "react";
import Select from "react-select";
import { SelectDropDownProps, SelectedOptionsType } from "../../../types/todos";

const options = [
	{ value: "all", label: "ALL" },
	{ value: "complete", label: "COMPLETE" },
	{ value: "incomplete", label: "IN COMPLETE" },
];

export default function SelectDropDown({ handleFiltered }: SelectDropDownProps) {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleChange = (value: SelectedOptionsType): void => {
		console.log(value, "check value");
		setSelectedOption(value);
		handleFiltered(value.value);
	};

	return (
		<Select
			defaultValue={selectedOption}
			onChange={handleChange}
			placeholder="ALL"
			options={options}
			className="react-select-container"
			classNamePrefix="react-select"
		/>
	);
}
