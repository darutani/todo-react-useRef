import type { LayoutProps } from "@/types/todo";

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<header className="bg-primary text-primary-foreground text-2xl font-bold py-4 px-6 shadow">
				<h1>Todo App</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}
