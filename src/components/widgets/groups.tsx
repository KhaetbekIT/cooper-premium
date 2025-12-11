import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Group = ({
	className,
	children,
	...props
}: ComponentProps<"div">) => {
	return (
		<div
			data-slot="group"
			{...props}
			className={cn(`flex flex-col gap-5 ${className}`)}
		>
			{children}
		</div>
	);
};
