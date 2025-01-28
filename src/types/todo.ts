import type { ReactNode } from "react";

export type Todo = {
	id: number;
	title: string;
	isDone: boolean;
	createdAt: Date;
};

export type AddTodoProps = {
	addTodo: (title: string) => void;
};

export type LayoutProps = {
	children: ReactNode;
};

export type TodoListProps = {
	todos: Todo[];
	updateTodo: (id: number, updateParams: Partial<Todo>) => void;
	deleteTodo: (id: number) => void;
};

export type TodoItemProps = {
	todo: Todo;
	updateTodo: (id: number, updateParams: Partial<Todo>) => void;
	deleteTodo: (id: number) => void;
};
