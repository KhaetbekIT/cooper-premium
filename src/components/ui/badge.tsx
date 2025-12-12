import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1",
	{
		variants: {
			variant: {
				default:
					"bg-black text-white hover:bg-gray-900 border border-transparent",
				gray: "bg-gray-200 text-gray-800 hover:bg-gray-300 border border-transparent",
				blue: "bg-blue-600 text-white hover:bg-blue-700 border border-transparent",
				red: "bg-red-600 text-white hover:bg-red-700 border border-transparent",
				outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
			},
			size: {
				default: "",
				sm: "text-xs",
				md: "text-sm",
				lg: "text-base",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Badge({
	className,
	variant,
	asChild = false,
	size,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : "span";

	return (
		<Comp
			data-slot="badge"
			className={cn(badgeVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
