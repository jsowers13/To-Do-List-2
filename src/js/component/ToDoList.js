import React from "react";
import { useState, useEffect } from "react";

const ToDoList = () => {
	const [data, setdata] = useState([
		{ text: "task 1", isEdit: false },
		{ text: "task 2", isEdit: false },
		{ text: "task 3", isEdit: false },
	]);

	// const inputRef = useRef(null);

	const [newTask, setNewTask] = useState("");

	const add = () => {
		console.log("clicked");
		let newArray = [...data];
		newArray.push({ text: newTask, isEdit: false });

		console.log(newArray);
		setdata(newArray);
	};

	const deleteItem = (index) => {
		console.log(index);
		let newArr = [...data];
		newArr.splice(index, 1);

		setdata(newArr);
	};

	const handleInput = (event) => {
		console.log(event.target.value);
		setNewTask(event.target.value);
	};

	return (
		<div className="d-flex flex-column align-items-center">
			<h1>To Do List</h1>
			<div className="list text-center">
				<div>
					<input
						onChange={handleInput}
						// ref={inputRef}
						placeholder="Add Task Here"
					/>
					<button className="btn btn-success" onClick={add}>
						add
					</button>
				</div>
				{data.map((todo, index) => {
					return (
						<div
							className="w-100 border d-flex justify-content-between"
							key={index}
							style={{}}>
							<div className="mx-3">{todo.text}</div>
							<div className="mx-3">
								<button
									className="btn btn-primary mx-2"
									onClick={""}>
									edit
								</button>{" "}
								<button
									className="btn btn-danger mx-2"
									onClick={() => {
										deleteItem(index);
									}}>
									delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ToDoList;
