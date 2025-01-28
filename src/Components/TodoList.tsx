import type { TodoListProps } from "@/types/todo";
import TodoItem from "./TodoItem";

export default function TodoList({
	todos,
	updateTodo,
	deleteTodo,
}: TodoListProps) {
	return (
		<div className="space-y-2">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					updateTodo={updateTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</div>
	);
}
