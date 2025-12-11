import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Container = ({
	className,
	children,
	...props
}: ComponentProps<"div">) => {
	return (
		<div
			data-slot="container"
			{...props}
			className={cn("container mx-auto px-4", className)}
		>
			{children}
		</div>
	);
};
