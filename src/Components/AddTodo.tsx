import type { AddTodoProps } from "@/types/todo";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AddTodo({ addTodo }: AddTodoProps) {
	const [title, setTitle] = useState("");
	const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title.trim()) {
			addTodo(title);
			setTitle("");
		}
	};

	return (
		<div className="p-6">
			<form className="w-full" onSubmit={handleSubmit}>
				<div className="flex w-full items-center space-x-2">
					<Input type="text" onChange={handleAddTitle} value={title} />
					<Button type="submit" className="">
						追加
					</Button>
				</div>
			</form>
		</div>
	);
}
