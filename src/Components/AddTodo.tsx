import type { AddTodoProps } from "@/types/todo";
import { useRef } from "react";
import type { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AddTodo({ addTodo }: AddTodoProps) {
	const id = useRef(0);
	const title = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!title.current) return;

		const newTitle = title.current.value.trim();
		if (!newTitle) return;
		addTodo(newTitle, ++id.current);
		title.current.value = '';
	};

	return (
		<div className="p-6">
			<form className="w-full" onSubmit={handleSubmit}>
				<div className="flex w-full items-center space-x-2">
					<Input type="text" ref={title} />
					<Button type="submit" className="">
						追加
					</Button>
				</div>
			</form>
		</div>
	);
}
