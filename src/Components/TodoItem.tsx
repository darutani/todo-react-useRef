import type { TodoItemProps } from "@/types/todo";
import { Trash2 } from "lucide-react";
import type React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

export default function TodoItem({
	todo,
	updateTodo,
	deleteTodo,
}: TodoItemProps) {
	const handleIsDone = () => {
		updateTodo(todo.id, { isDone: !todo.isDone });
	};

	const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateTodo(todo.id, { title: e.target.value });
	};

	const handleTrash = () => {
		deleteTodo(todo.id);
	};

	return (
		<div
			className={`flex items-center gap-2 p-3 rounded-md shadow-sm transition-colors ${
				todo.isDone
					? "bg-muted text-muted-foreground line-through"
					: "bg-card text-card-foreground hover:bg-muted"
			}`}
		>
			<Checkbox
				className=""
				checked={todo.isDone}
				onCheckedChange={handleIsDone}
			/>
			<Input
				type="text"
				className="border-none focus:ring-1 focus:ring-input shadow-none"
				value={todo.title}
				onChange={handleTitle}
			/>
			<Button
				type="button"
				variant="ghost"
				size="icon"
				className="text-muted-foreground hover:bg-muted hover:text-foreground"
				onClick={handleTrash}
			>
				<Trash2 />
			</Button>
		</div>
	);
}
