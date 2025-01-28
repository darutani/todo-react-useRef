import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Layout from "./Components/Layout";
import TodoList from "./Components/TodoList";
import type { Todo } from "./types/todo";

let id = 0;

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (title: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{
				id: ++id,
				title: title,
				isDone: false,
				createdAt: new Date(),
			},
		]);
	};

	const sortedTodos = [...todos];
	sortedTodos.sort((m, n) => {
		if (m.isDone !== n.isDone) {
			return m.isDone ? 1 : -1;
		}
		return n.createdAt.getTime() - m.createdAt.getTime();
	});

	const updateTodo = (id: number, updateParams: Partial<Todo>) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, ...updateParams } : todo,
			),
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<Layout>
				<AddTodo addTodo={addTodo} />
				<TodoList
					todos={sortedTodos}
					updateTodo={updateTodo}
					deleteTodo={deleteTodo}
				/>
			</Layout>
		</div>
	);
}

export default App;
